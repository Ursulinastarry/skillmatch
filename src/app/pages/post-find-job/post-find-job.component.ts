// post-find-job.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Added FormsModule import
import { RouterModule } from '@angular/router';
import { JobsService, Job } from '../../services/jobs.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-post-find-job',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule], // Added FormsModule to imports
  template: `
    <div class="container">
      <div class="header">
        <h2>Find Your Dream Job</h2>
        <div class="toggle-buttons">
          <button [class.active]="!searchActive" (click)="showAllJobs()">All Jobs</button>
          <button [class.active]="searchActive" (click)="focusSearch()">Search</button>
        </div>
      </div>
      
      <form [formGroup]="searchForm" class="form-group">
        <label for="searchTerm">Search Jobs</label>
        <input 
          id="searchTerm"
          type="text" 
          formControlName="searchTerm" 
          placeholder="Search for jobs by title, company, or skills"
        >
        <button type="button" (click)="onSearch()" class="submit-button">Search</button>
      </form>

      <div class="filters">
        <h4>Filter Results</h4>
        <div class="checkbox-group">
          <div>
            <input type="checkbox" id="fulltime" [(ngModel)]="filters.fullTime" [ngModelOptions]="{standalone: true}">
            <label for="fulltime">Full-time</label>
          </div>
          <div>
            <input type="checkbox" id="parttime" [(ngModel)]="filters.partTime" [ngModelOptions]="{standalone: true}">
            <label for="parttime">Part-time</label>
          </div>
          <div>
            <input type="checkbox" id="remote" [(ngModel)]="filters.remote" [ngModelOptions]="{standalone: true}">
            <label for="remote">Remote</label>
          </div>
        </div>
      </div>

      <div *ngIf="loading" class="job-listings">
        <p>Loading jobs...</p>
      </div>

      <div *ngIf="error" class="error-message">
        <p>{{ error }}</p>
      </div>

      <div *ngIf="!loading && jobs.length === 0 && !error" class="job-listings">
        <p>No jobs found. Try different search terms.</p>
      </div>

      <div class="job-listings" *ngIf="jobs.length > 0">
        <div *ngFor="let job of filteredJobs" class="job-card">
          <div class="job-header">
            <h3>{{ job.title }}</h3>
            <button class="save-button" [class.saved]="isSaved(job.id)" (click)="toggleSaveJob(job.id)">
              {{ isSaved(job.id) ? 'Saved' : 'Save' }}
            </button>
          </div>
          
          <div class="job-details">
            <p class="company">{{ job.company_name }}</p>
            <p>{{ job.location }}</p>
            <p *ngIf="job.salary_range">{{ job.salary_range }}</p>
          </div>
          
          <div class="job-description">
            <p>{{ job.description | slice:0:200 }}{{ job.description.length > 200 ? '...' : '' }}</p>
            
            <div *ngIf="job.skills && job.skills.length > 0" class="job-skills">
              <span *ngFor="let skill of job.skills">{{ skill }}</span>
            </div>
          </div>
          
          <div class="job-actions">
            <span class="posted-date">Posted: {{ formatDate(job.created_at) }}</span>
            <a [routerLink]="['/post-find-job', job.id]" class="apply-button">View Details</a>
            <a [routerLink]="['/jobs', job.id]" class="apply-button">Apply</a>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      border-radius: 8px;
      background-color: #fff;
      font-family: Arial, sans-serif;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .toggle-buttons button {
      padding: 8px 16px;
      background-color: #f0f0f0;
      border: none;
      cursor: pointer;
      border-radius: 4px;
      margin-left: 5px;
    }
    
    .toggle-buttons button.active {
      background-color: #d6a4a4;
      color: white;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }
    
    input, textarea, select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    
    .submit-button {
      background-color: #d6a4a4;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
      font-weight: bold;
    }
    
    .submit-button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    
    .secondary-button {
      background-color: #f0f0f0;
      color: #333;
      padding: 10px 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 10px;
    }
    
    .filters {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    
    .checkbox-group {
      display: flex;
      gap: 15px;
      align-items: center;
    }
    
    .checkbox-group input[type="checkbox"] {
      width: auto;
      margin-right: 5px;
    }
    
    /* Job Listings Styles */
    .job-listings {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .job-card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    }
    
    .job-card:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transform: translateY(-2px);
    }
    
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    
    .job-header h3 {
      margin: 0;
      color: #333;
    }
    
    .save-button {
      background-color: transparent;
      border: 1px solid #d6a4a4;
      color: #d6a4a4;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .save-button.saved {
      background-color: #d6a4a4;
      color: white;
    }
    
    .job-details {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 10px;
      color: #666;
    }
    
    .job-details p {
      margin: 0;
      font-size: 14px;
    }
    
    .company {
      font-weight: bold;
    }
    
    .job-description {
      font-size: 14px;
      line-height: 1.4;
      margin-bottom: 15px;
      color: #555;
    }
    
    .job-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 10px;
    }
    
    .job-skills span {
      background-color: #f0f0f0;
      border-radius: 20px;
      padding: 4px 10px;
      font-size: 12px;
      color: #666;
    }
    
    .job-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .posted-date {
      font-size: 12px;
      color: #888;
    }
    
    .apply-button {
      background-color: #d6a4a4;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      text-decoration: none;
    }
    
    .error-message {
      color: #d32f2f;
      font-size: 12px;
      margin-top: 5px;
    }
  `]
})
export class PostFindJobComponent implements OnInit {
  searchForm = new FormGroup({
    searchTerm: new FormControl('')
  });
  
  jobs: Job[] = [];
  loading = false;
  error = '';
  searchActive = false;
  savedJobs: string[] = [];
  
  filters = {
    fullTime: false,
    partTime: false,
    remote: false
  };

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    // Load initial jobs list
    this.loadJobs();
    
    // Set up search term debounce
    this.searchForm.get('searchTerm')?.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(() => {
        if (this.searchForm.get('searchTerm')?.value) {
          this.searchActive = true;
          this.onSearch();
        }
      });
      
    // Load saved jobs from localStorage if available
    const savedJobsStr = localStorage.getItem('savedJobs');
    if (savedJobsStr) {
      this.savedJobs = JSON.parse(savedJobsStr);
    }
  }

  loadJobs(): void {
    this.loading = true;
    this.error = '';
    
    this.jobsService.getJobs().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load jobs. Please try again later.';
        this.loading = false;
        console.error('Error loading jobs:', err);
      }
    });
  }

  onSearch(): void {
    const term = this.searchForm.get('searchTerm')?.value;
    
    if (!term || term.trim() === '') {
      this.loadJobs();
      this.searchActive = false;
      return;
    }
    
    this.loading = true;
    this.error = '';
    this.searchActive = true;
    
    this.jobsService.searchJobs(term).subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to search jobs. Please try again later.';
        this.loading = false;
        console.error('Error searching jobs:', err);
      }
    });
  }

  showAllJobs(): void {
    this.searchForm.get('searchTerm')?.setValue('');
    this.searchActive = false;
    this.loadJobs();
  }

  focusSearch(): void {
    this.searchActive = true;
    setTimeout(() => {
      document.getElementById('searchTerm')?.focus();
    }, 0);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else {
      return date.toLocaleDateString();
    }
  }
  
  toggleSaveJob(jobId: string): void {
    const index = this.savedJobs.indexOf(jobId);
    if (index > -1) {
      // Remove from saved jobs
      this.savedJobs.splice(index, 1);
    } else {
      // Add to saved jobs
      this.savedJobs.push(jobId);
    }
    
    // Update localStorage
    localStorage.setItem('savedJobs', JSON.stringify(this.savedJobs));
  }
  
  isSaved(jobId: string): boolean {
    return this.savedJobs.includes(jobId);
  }
  
  // Getter to apply filters to the jobs list
  get filteredJobs(): Job[] {
    if (!this.filters.fullTime && !this.filters.partTime && !this.filters.remote) {
      return this.jobs; // No filters applied
    }
    
    return this.jobs.filter(job => {
      const jobDescription = job.description.toLowerCase();
      
      // Check if job matches any of the selected filters
      if (this.filters.fullTime && jobDescription.includes('full-time')) {
        return true;
      }
      
      if (this.filters.partTime && jobDescription.includes('part-time')) {
        return true;
      }
      
      if (this.filters.remote && (jobDescription.includes('remote') || job.location.toLowerCase().includes('remote'))) {
        return true;
      }
      
      // If filters are active but job doesn't match any filter, exclude it
      return false;
    });
  }
}
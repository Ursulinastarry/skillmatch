import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-find-job',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>{{ isPostingJob ? 'Post New Job' : 'Find Job' }}</h2>
        <div class="toggle-buttons">
          <button [class.active]="!isPostingJob" (click)="isPostingJob = false">Find Jobs</button>
          <button [class.active]="isPostingJob" (click)="isPostingJob = true">Post Job</button>
        </div>
      </div>
      
      <div *ngIf="isPostingJob" class="post-job-form">
        <div class="form-group">
          <label for="jobTitle">Job Title</label>
          <input type="text" id="jobTitle" placeholder="Enter job title">
        </div>
        
        <div class="form-group">
          <label for="company">Company</label>
          <input type="text" id="company" placeholder="Enter company name">
        </div>
        
        <div class="form-group">
          <label for="jobDescription">Description</label>
          <textarea id="jobDescription" rows="4" placeholder="Enter job description"></textarea>
        </div>
        
        <div class="form-group">
          <label for="jobLocation">Location</label>
          <input type="text" id="jobLocation" placeholder="Enter job location">
        </div>
        
        <button class="submit-button">Post Job</button>
      </div>
      
      <div *ngIf="!isPostingJob" class="find-job-form">
        <div class="form-group">
          <label for="searchKeywords">Keywords</label>
          <input type="text" id="searchKeywords" placeholder="Search by title, skills, or company">
        </div>
        
        <div class="form-group">
          <label for="searchLocation">Location</label>
          <input type="text" id="searchLocation" placeholder="City, state, or remote">
        </div>
        
        <div class="filters">
          <div class="filter-group">
            <label>Job Type</label>
            <div class="checkbox-group">
              <input type="checkbox" id="fullTime"> <label for="fullTime">Full-time</label>
              <input type="checkbox" id="partTime"> <label for="partTime">Part-time</label>
              <input type="checkbox" id="contract"> <label for="contract">Contract</label>
            </div>
          </div>
        </div>
        
        <button class="submit-button">Search Jobs</button>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      border-radius: 8px;
      background-color: #fff;
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
    
    input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    
    .submit-button {
      background-color: #d6a4a4;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }
    
    .filters {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    
    .checkbox-group {
      display: flex;
      gap: 15px;
    }
  `]
})
export class PostFindJobComponent {
  isPostingJob = false;
}


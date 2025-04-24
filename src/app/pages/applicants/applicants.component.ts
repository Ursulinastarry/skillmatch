import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsService, Application } from '../../services/applications.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-applications-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container" *ngIf="!loading">
  <div class="header">
    <h2>Applications</h2>
    <div class="header-filters">
      <input class="search-input" placeholder="Search by name..." />
      <select class="filter-select">
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="reviewed">Reviewed</option>
        <option value="interviewed">Interviewed</option>
        <option value="rejected">Rejected</option>
        <option value="accepted">Accepted</option>
      </select>
    </div>
  </div>

  <div class="applicants-list">
    <div class="applicant-item" *ngFor="let app of applications">
      
      <!-- Profile Picture -->
      <div class="applicant-photo">
        <img *ngIf="app.profile_picture; else noPic" [src]="app.profile_picture" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;" />
        <ng-template #noPic>
          <div class="photo-placeholder"></div>
        </ng-template>
      </div>

      <!-- Name and Skills -->
      <div>
        <div class="applicant-name">{{ app.full_name }}</div>
        <div class="applicant-position">Skills: {{ app.skills.join(', ') }}</div>
        <div class="applicant-location">Applied: {{ app.applied_at | date:'mediumDate' }}</div>
      </div>

      <!-- CV and Status Meta -->
      <div class="applicant-stats">
        <div>
          <span class="stat-label">CV:</span>
          <a [href]="app.cv_url" target="_blank" class="stat-value">View CV</a>
        </div>
        <div>
          <span class="stat-label">CV ID:</span>
          <span class="stat-value">{{ app.cv_id }}</span>
        </div>
      </div>

      <!-- Application Status -->
      <div>
        <span class="applicant-status" [ngClass]="getStatusClass(app.status)">
          {{ app.status }}
        </span>
      </div>

      <!-- Actions -->
      <div class="applicant-actions">
        <button class="action-btn view">View</button>
        <button class="action-btn interview">Interview</button>
        <button class="action-btn reject">Reject</button>
        <button class="action-btn hire">Hire</button>
      </div>
    </div>
  </div>
</div>

<div *ngIf="loading">Loading applications...</div>

  `,
  styles: [
    `/* Styles provided by user */
    .container { padding: 20px; border-radius: 8px; background-color: #fff; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .header-filters { display: flex; gap: 15px; }
    .search-input { padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px; min-width: 200px; }
    .filter-select { padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px; }
    .applicants-list { display: flex; flex-direction: column; gap: 12px; }
    .applicant-item { display: grid; grid-template-columns: 60px 1.5fr 1fr 0.7fr 1.2fr; gap: 15px; padding: 15px; border: 1px solid #eee; border-radius: 6px; align-items: center; }
    .applicant-photo { width: 50px; height: 50px; border-radius: 50%; overflow: hidden; }
    .photo-placeholder { width: 100%; height: 100%; background-color: #f0f0f0; }
    .applicant-name { font-weight: 500; font-size: 16px; }
    .applicant-position { color: #666; margin-top: 3px; }
    .applicant-location { color: #888; font-size: 12px; margin-top: 3px; }
    .applicant-stats { display: flex; flex-direction: column; gap: 8px; }
    .stat-label { font-size: 12px; color: #666; }
    .stat-value { font-weight: 500; }
    .applicant-status { padding: 4px 8px; border-radius: 12px; display: inline-block; font-size: 12px; text-align: center; }
    .applicant-status.new { background-color: #e3f2fd; color: #1565c0; }
    .applicant-status.review { background-color: #fff9c4; color: #9e9d24; }
    .applicant-status.interview { background-color: #e8f5e9; color: #2e7d32; }
    .applicant-actions { display: flex; gap: 8px; }
    .action-btn { padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; }
    .action-btn.view { background-color: #e0e0e0; color: #424242; }
    .action-btn.interview { background-color: #bbdefb; color: #1565c0; }
    .action-btn.reject { background-color: #ffcdd2; color: #c62828; }
    .action-btn.hire { background-color: #c8e6c9; color: #2e7d32; }
    .action-btn.reschedule { background-color: #e6e6e6; color:rgb(153, 126, 126); }
    `
  ]
})
export class ApplicantsComponent implements OnInit {
  applications: Application[] = [];
  loading: boolean = false;

  constructor(private applicationsService: ApplicationsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.applicationsService.getApplications().subscribe({
      next: (apps) => {
        this.applications = apps;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading applications', err);
        this.loading = false;
      },
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'pending':
        return 'new';
      case 'reviewed':
        return 'review';
      case 'interviewed':
        return 'interview';
      case 'rejected':
        return 'reject';
      case 'accepted':
        return 'hire';
      default:
        return '';
    }
  }
}
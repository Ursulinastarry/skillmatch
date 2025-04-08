import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-applicants',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Applicants</h2>
        <div class="header-filters">
          <input type="text" placeholder="Search applicants" class="search-input">
          <select class="filter-select">
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="review">In Review</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
            <option value="hired">Hired</option>
          </select>
        </div>
      </div>
      
      <div class="applicants-list">
        <div class="applicant-item">
          <div class="applicant-photo">
            <div class="photo-placeholder"></div>
          </div>
          <div class="applicant-info">
            <div class="applicant-name">John Smith</div>
            <div class="applicant-position">Frontend Developer</div>
            <div class="applicant-location">New York, NY</div>
          </div>
          <div class="applicant-stats">
            <div class="stat-item">
              <div class="stat-label">Experience</div>
              <div class="stat-value">5 years</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Applied</div>
              <div class="stat-value">Apr 3, 2025</div>
            </div>
          </div>
          <div class="applicant-status new">New</div>
          <div class="applicant-actions">
            <button class="action-btn view">View CV</button>
            <a class="action-btn reschedule" [routerLink]="'/schedule-interview'">Schedule</a>
            <button class="action-btn reject">Reject</button>
          </div>
        </div>
        
        <div class="applicant-item">
          <div class="applicant-photo">
            <div class="photo-placeholder"></div>
          </div>
          <div class="applicant-info">
            <div class="applicant-name">Emily Johnson</div>
            <div class="applicant-position">UX Designer</div>
            <div class="applicant-location">San Francisco, CA</div>
          </div>
          <div class="applicant-stats">
            <div class="stat-item">
              <div class="stat-label">Experience</div>
              <div class="stat-value">3 years</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Applied</div>
              <div class="stat-value">Apr 5, 2025</div>
            </div>
          </div>
          <div class="applicant-status review">In Review</div>
          <div class="applicant-actions">
            <button class="action-btn view">View CV</button>
            <a class="action-btn reschedule" [routerLink]="'/schedule-interview'">Schedule</a>
            <button class="action-btn reject">Reject</button>
          </div>
        </div>
        
        <div class="applicant-item">
          <div class="applicant-photo">
            <div class="photo-placeholder"></div>
          </div>
          <div class="applicant-info">
            <div class="applicant-name">David Williams</div>
            <div class="applicant-position">Backend Developer</div>
            <div class="applicant-location">Austin, TX</div>
          </div>
          <div class="applicant-stats">
            <div class="stat-item">
              <div class="stat-label">Experience</div>
              <div class="stat-value">7 years</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Applied</div>
              <div class="stat-value">Apr 2, 2025</div>
            </div>
          </div>
          <div class="applicant-status interview">Interview</div>
          <div class="applicant-actions">
            <button class="action-btn view">View CV</button>
            <button class="action-btn hire">Hire</button>
            <button class="action-btn reject">Reject</button>
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
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .header-filters {
      display: flex;
      gap: 15px;
    }
    
    .search-input {
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      min-width: 200px;
    }
    
    .filter-select {
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    
    .applicants-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .applicant-item {
      display: grid;
      grid-template-columns: 60px 1.5fr 1fr 0.7fr 1.2fr;
      gap: 15px;
      padding: 15px;
      border: 1px solid #eee;
      border-radius: 6px;
      align-items: center;
    }
    
    .applicant-photo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
    }
    
    .photo-placeholder {
      width: 100%;
      height: 100%;
      background-color: #f0f0f0;
    }
    
    .applicant-name {
      font-weight: 500;, 
      font-size: 16px;
    }
    
    .applicant-position {
      color: #666;
      margin-top: 3px;
    }
    
    .applicant-location {
      color: #888;
      font-size: 12px;
      margin-top: 3px;
    }
    
    .applicant-stats {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .stat-label {
      font-size: 12px;
      color: #666;
    }
    
    .stat-value {
      font-weight: 500;
    }
    
    .applicant-status {
      padding: 4px 8px;
      border-radius: 12px;
      display: inline-block;
      font-size: 12px;
      text-align: center;
    }
    
    .applicant-status.new {
      background-color: #e3f2fd;
      color: #1565c0;
    }
    
    .applicant-status.review {
      background-color: #fff9c4;
      color: #9e9d24;
    }
    
    .applicant-status.interview {
      background-color: #e8f5e9;
      color: #2e7d32;
    }
    
    .applicant-actions {
      display: flex;
      gap: 8px;
    }
    
    .action-btn {
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
    }
    
    .action-btn.view {
      background-color: #e0e0e0;
      color: #424242;
    }
    
    .action-btn.interview {
      background-color: #bbdefb;
      color: #1565c0;
    }
    
    .action-btn.reject {
      background-color: #ffcdd2;
      color: #c62828;
    }
    
    .action-btn.hire {
      background-color: #c8e6c9;
      color: #2e7d32;
    }
      .action-btn.reschedule {
      background-color: #e6e6e6;
      color:rgb(153, 126, 126);
    }
    
  `]
})
export class ApplicantsComponent {}
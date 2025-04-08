import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-interview-notifications',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
   <div class="container">
      <div class="header">
        <h2>Interview Notifications</h2>
      </div>
      
      <div class="notification-list">
        <div class="notification-item">
          <div class="notification-company">Google</div>
          <div class="notification-position">Senior Frontend Developer</div>
          <div class="notification-date">April 12, 2025 - 10:00 AM</div>
          <div class="notification-status pending">Pending</div>
          <div class="notification-actions">
            <button class="action-btn accept">Accept</button>
            <a class="action-btn reschedule" [routerLink]="'/schedule-interview'">Reschedule</a>
            <button class="action-btn decline">Decline</button>
          </div>
        </div>
        
        <div class="notification-item">
          <div class="notification-company">Microsoft</div>
          <div class="notification-position">UI/UX Designer</div>
          <div class="notification-date">April 15, 2025 - 2:30 PM</div>
          <div class="notification-status confirmed">Confirmed</div>
          <div class="notification-actions">
            <button class="action-btn details">View Details</button>
            <a class="action-btn reschedule" [routerLink]="'/schedule-interview'">Reschedule</a>
            <button class="action-btn decline">Decline</button>
          </div>
        </div>
        
        <div class="notification-item">
          <div class="notification-company">Amazon</div>
          <div class="notification-position">Product Manager</div>
          <div class="notification-date">April 18, 2025 - 11:15 AM</div>
          <div class="notification-status pending">Pending</div>
          <div class="notification-actions">
            <button class="action-btn accept">Accept</button>
            <a class="action-btn reschedule" [routerLink]="'/schedule-interview'">Reschedule</a>
            <button class="action-btn decline">Decline</button>
          </div>
        </div>
      </div>
      
      <div class="past-interviews">
        <h3>Past Interviews</h3>
        
        <div class="notification-item past">
          <div class="notification-company">Apple</div>
          <div class="notification-position">Software Engineer</div>
          <div class="notification-date">April 2, 2025 - 9:00 AM</div>
          <div class="notification-status completed">Completed</div>
          <div class="notification-actions">
            <button class="action-btn details">View Feedback</button>
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
      margin-bottom: 20px;
    }
    
    .notification-list {
      margin-bottom: 30px;
    }
    
    .notification-item {
      display: grid;
      grid-template-columns: 1fr 1fr 1.2fr 0.8fr 2fr;
      gap: 10px;
      padding: 15px;
      border: 1px solid #eee;
      border-radius: 6px;
      margin-bottom: 10px;
      align-items: center;
    }
    
    .notification-company {
      font-weight: 500;
    }
    
    .notification-status {
      padding: 4px 8px;
      border-radius: 12px;
      display: inline-block;
      font-size: 12px;
      text-align: center;
    }
    
    .notification-status.pending {
      background-color: #ffecb3;
      color: #996b00;
    }
    
    .notification-status.confirmed {
      background-color: #c8e6c9;
      color: #2e7d32;
    }
    
    .notification-status.completed {
      background-color: #e0e0e0;
      color: #616161;
    }
    .notification-actions {
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
    
    .action-btn.accept {
      background-color: #c8e6c9;
      color: #2e7d32;
    }
    
    .action-btn.reschedule {
      background-color: #e6e6e6;
      color: #616161;
    }
    
    .action-btn.decline {
      background-color: #ffcdd2;
      color: #c62828;
    }
    
    .action-btn.details {
      background-color: #e3f2fd;
      color: #1565c0;
    }
    
    .past-interviews h3 {
      margin-bottom: 15px;
    }
  `]
})
export class InterviewNotificationsComponent {}  
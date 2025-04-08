import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-administrators',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="admin-container">
      <div class="admin-card">
        <div class="hero-image-container">
          <img src="assets/admin-hero.jpg" alt="Admin Dashboard" class="hero-image">
        </div>

        <div class="admin-header">
          <h2>Administration Panel</h2>
          <p>Manage and optimize the platform for better performance</p>
        </div>

        <div class="admin-grid">
          <div class="admin-feature">
              <h3>Manage Users</h3>
              <p>Add, edit, or remove users from the platform</p>
<a routerLink="/manage-users" class="btn">
              <button class="btn">Access module</button>
            
            </a>          </div>
          <div class="admin-feature">
              <h3>Security</h3>
              <p>Configure security settings and user permissions</p>
<a routerLink="/system-performance-logs" class="btn">
              <button class="btn">Access module</button>
            
            </a>          </div>
          <div class="admin-feature">
              <h3>AI Accuracy</h3>
              <p>Review and improve AI matching algorithms</p>
            <a routerLink="/system-performance-logs" class="btn">
              <button class="btn">Access module</button>
            
            </a>
          </div>
          <div class="admin-feature">
            
              <h3>System Performance</h3>
              <p>Monitor system health and optimize performance</p>
               <a routerLink="/system-performance-logs" class="btn">
              <button class="btn">Access module</button>
            
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-container {
      width: 90vw;
      margin: 40px auto;
      padding: 0 20px;
      height: 100vh;
    }

    .admin-card {
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
    }

    .hero-image-container {
      width: 100%;
      height: 250px;
      overflow: hidden;
      border-radius: 6px;
      margin-bottom: 30px;
    }

    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .admin-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .admin-header h2 {
      color: #333;
      margin-bottom: 10px;
    }

    .admin-header p {
      color: #666;
    }

    .admin-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }
    .btn {
      display: inline-block;
      background-color: #e75480;
      color: white;
      
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s;
    }

    .btn:hover {
      background-color: #d23e6d;
    }
    .admin-feature {
      background-color: #f9f9f9;
      border-radius: 6px;
      padding: 20px;
      border: 1px solid #eee;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .admin-feature:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      border-color: #e75480;
    }

    .admin-feature h3 {
      color: #e75480;
      margin-bottom: 10px;
    }

    .admin-feature p {
      color: #666;
      font-size: 14px;
    }
  `]
})
export class AdministratorsComponent { }

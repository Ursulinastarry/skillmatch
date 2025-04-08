// pages/job-seekers/job-seekers.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-seekers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="job-seekers-container">
      <div class="job-seekers-card">
       

        <div class="hero-image-container">
          <img src="assets/career-hero.jpg" alt="Career Path" class="hero-image">
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <h3>Create skill profile</h3>
            <p>Build a comprehensive profile to showcase your skills</p>
            <a routerLink="/create-update-profile" class="feature-link">Get Started</a>
          </div>
          <div class="feature-card">
            <h3>Update portfolio</h3>
            <p>Add your past work and accomplishments to stand out</p>
            <a routerLink="/create-update-profile" class="feature-link">Update Now</a>
          </div>
          <div class="feature-card">
            <h3>Apply for a job</h3>
            <p>Browse thousands of opportunities and apply directly</p>
            <a routerLink="/post-find-job" class="feature-link">Explore Jobs</a>
          </div>
          <div class="feature-card">
            <h3>Interview notifications</h3>
            <p>Receive alerts and prepare for upcoming interviews</p>
            <a routerLink="/interview-notifications" class="feature-link">Check Notifications</a>
          </div>
          <div class="feature-card">
            <h3>Career paths</h3>
            <p>Explore various career paths and growth opportunities</p>
            <a routerLink="/career-guidance" class="feature-link">Explore Paths</a>
          </div>
          <div class="feature-card">
            <h3>Upload CV</h3>
            <p>Upload your resume to quickly apply to relevant positions</p>
            <a routerLink="/upload-review-cv" class="feature-link">Upload Now</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .job-seekers-container {
     width: 90vw;
      margin: 40px auto;
      padding: 0 20px;
    }

    .job-seekers-card {
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
    }

    .logo-container {
      text-align: center;
      margin-bottom: 20px;
    }

    .logo {
      height: 40px;
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

    .features-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .feature-card {
      background-color: #f9f9f9;
      border-radius: 6px;
      padding: 20px;
      border: 1px solid #eee;
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      border-color: #e75480;
    }

    .feature-card h3 {
      color: #e75480;
      margin-bottom: 10px;
      font-size: 18px;
    }

    .feature-card p {
      color: #666;
      font-size: 14px;
      margin-bottom: 15px;
    }

    .feature-link {
      display: inline-block;
      color: #e75480;
      text-decoration: none;
      font-weight: 500;
      font-size: 14px;
      transition: color 0.2s;
    }

    .feature-link:hover {
      color: #d23e6d;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class JobSeekersComponent {
  
}
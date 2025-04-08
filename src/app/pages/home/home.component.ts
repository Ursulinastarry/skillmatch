
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <div class="hero-section">
       
        <div class="welcome-text">
          <h2>Welcome to Skillmatch💕</h2>
        </div>
        <div class="hero-image-container">
          <img src="assets/hero-image.jpg" alt="Job Market" class="hero-image">
        </div>
        <div class="search-options">
          <div class="search-option">
            <h3>Find Jobs</h3>
            <p>Browse thousands of opportunities</p>
            <a routerLink="/post-find-job" class="btn">Search Now</a>
          </div>
          <div class="search-option">
            <h3>Find Candidates</h3>
            <p>Discover top talent for your company</p>
            <a routerLink="/applicants" class="btn">Search Now</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      width: 90vw;
      margin: 0 auto;
      padding: 20px;
    }

    .hero-section {
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .logo-container {
      text-align: center;
      padding: 20px 0;
    }

    .logo {
      height: 40px;
    }

    .welcome-text {
      text-align: center;
      margin-bottom: 20px;
    }

    .welcome-text h2 {
      color: #e75480;
      font-size: 24px;
      font-weight: 500;
    }

    .hero-image-container {
      width: 100%;
      height: 300px;
      overflow: hidden;
    }

    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .search-options {
      display: flex;
      justify-content: space-around;
      padding: 30px 20px;
    }

    .search-option {
      text-align: center;
      width: 45%;
    }

    .search-option h3 {
      color: #333;
      margin-bottom: 10px;
      font-size: 20px;
    }

    .search-option p {
      color: #666;
      margin-bottom: 20px;
    }

    .btn {
      display: inline-block;
      background-color: #e75480;
      color: white;
      padding: 10px 20px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s;
    }

    .btn:hover {
      background-color: #d23e6d;
    }

    @media (max-width: 768px) {
      .search-options {
        flex-direction: column;
      }

      .search-option {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  `]
})
export class HomeComponent {

}
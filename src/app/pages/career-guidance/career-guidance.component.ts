import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-career-guidance',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Career Guidance</h2>
      </div>
      
      <div class="guidance-form">
        <div class="form-group">
          <label for="careerGoal">What are your career goals?</label>
          <textarea id="careerGoal" rows="3" placeholder="Describe your short and long-term career goals"></textarea>
        </div>
        
        <div class="form-group">
          <label for="currentSkills">Your current skills</label>
          <input type="text" id="currentSkills" placeholder="Enter your skills (separated by commas)">
        </div>
        
        <div class="form-group">
          <label for="targetRole">Target role or industry</label>
          <input type="text" id="targetRole" placeholder="What role or industry are you targeting?">
        </div>
        
        <div class="form-group">
          <label for="experienceLevel">Experience level</label>
          <select id="experienceLevel">
            <option value="" disabled selected>Select your experience level</option>
            <option value="entry">Entry Level (0-2 years)</option>
            <option value="mid">Mid Level (3-5 years)</option>
            <option value="senior">Senior Level (6+ years)</option>
          </select>
        </div>
        
        <button class="submit-button">Get Guidance</button>
      </div>
      
      <div class="results-section">
        <h3>Recommended Steps</h3>
        
        <div class="recommendation-card">
          <div class="recommendation-header">
            <span class="recommendation-title">Skills to Develop</span>
          </div>
          <div class="recommendation-body">
            <p>Based on your goals, consider developing these skills:</p>
            <ul>
              <li>Project Management</li>
              <li>Data Analysis</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
        
        <div class="recommendation-card">
          <div class="recommendation-header">
            <span class="recommendation-title">Suggested Resources</span>
          </div>
          <div class="recommendation-body">
            <ul>
              <li><a href="#">Project Management Professional (PMP) Certification</a></li>
              <li><a href="#">Data Analytics Course - Recommended Path</a></li>
              <li><a href="#">Leadership Workshop Series</a></li>
            </ul>
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
    
    .guidance-form {
      margin-bottom: 30px;
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
    
    .results-section h3 {
      margin-bottom: 15px;
    }
    
    .recommendation-card {
      border: 1px solid #eee;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 15px;
    }
    
    .recommendation-header {
      background-color: #f5f5f5;
      padding: 10px 15px;
      border-bottom: 1px solid #eee;
    }
    
    .recommendation-title {
      font-weight: 500;
    }
    
    .recommendation-body {
      padding: 15px;
    }
    
    .recommendation-body ul {
      padding-left: 20px;
      margin-top: 10px;
    }
    
    .recommendation-body li {
      margin-bottom: 5px;
    }
    
    a {
      color: #d6a4a4;
      text-decoration: none;
    }
  `]
})
export class CareerGuidanceComponent {}
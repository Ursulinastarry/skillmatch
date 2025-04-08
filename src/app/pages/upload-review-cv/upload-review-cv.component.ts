import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-review-cv',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>My CVs</h2>
      </div>
      
      <div class="cv-list">
        <div class="cv-item">
          <div class="cv-name">technical.pdf</div>
          <div class="cv-actions">
            <button class="action-button view">View</button>
            <button class="action-button edit">Edit</button>
            <button class="action-button delete">Delete</button>
          </div>
        </div>
        
        <div class="cv-item">
          <div class="cv-name">QA405.pdf</div>
          <div class="cv-actions">
            <button class="action-button view">View</button>
            <button class="action-button edit">Edit</button>
            <button class="action-button delete">Delete</button>
          </div>
        </div>
        
        <div class="cv-item">
          <div class="cv-name">AIPro.pdf</div>
          <div class="cv-actions">
            <button class="action-button view">View</button>
            <button class="action-button edit">Edit</button>
            <button class="action-button delete">Delete</button>
          </div>
        </div>
      </div>
      
      <div class="upload-section">
        <div class="upload-box">
          <div class="upload-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
          </div>
          <div class="upload-text">Upload CV</div>
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
    
    .cv-list {
      margin-bottom: 20px;
    }
    
    .cv-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      border: 1px solid #eee;
      margin-bottom: 10px;
      border-radius: 4px;
    }
    
    .cv-actions {
      display: flex;
      gap: 8px;
    }
    
    .action-button {
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
    }
    
    .view {
      background-color: #f0f0f0;
    }
    
    .edit {
      background-color: #f0f0f0;
    }
    
    .delete {
      background-color: #f0f0f0;
    }
    
    .upload-section {
      margin-top: 20px;
    }
    
    .upload-box {
      border: 2px dashed #ccc;
      border-radius: 4px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    
    .upload-icon {
      color: #d6a4a4;
      margin-bottom: 10px;
    }
    
    .upload-text {
      color: #666;
    }
  `]
})
export class UploadReviewCvComponent {}
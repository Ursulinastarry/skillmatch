import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-update-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Profile</h2>
      </div>
      
      <div class="profile-section">
        <div class="user-info">
          <div class="avatar-section">
            <div class="avatar">
              <span class="avatar-placeholder">Photo</span>
            </div>
            <button class="upload-btn">Upload</button>
          </div>
          
          <div class="form-content">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Enter your full name">
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email">
            </div>
            
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" placeholder="Enter your phone number">
            </div>
            
            <div class="form-group">
              <label for="location">Location</label>
              <input type="text" id="location" placeholder="City, Country">
            </div>
          </div>
        </div>
        
        <div class="section-divider"></div>
        
        <div class="experience-section">
          <h3>Add Experience</h3>
          <div class="form-group">
            <label for="company">Company</label>
            <input type="text" id="company" placeholder="Company name">
          </div>
          
          <div class="form-group">
            <label for="position">Position</label>
            <input type="text" id="position" placeholder="Your job title">
          </div>
          
          <div class="date-range">
            <div class="form-group">
              <label for="startDate">Start Date</label>
              <input type="text" id="startDate" placeholder="MM/YYYY">
            </div>
            
            <div class="form-group">
              <label for="endDate">End Date</label>
              <input type="text" id="endDate" placeholder="MM/YYYY or Present">
            </div>
          </div>
          
          <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" rows="3" placeholder="Describe your responsibilities"></textarea>
          </div>
          
          <button class="add-button">Add Experience</button>
        </div>
        
        <div class="actions">
          <button class="save-button">Save Profile</button>
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
    
    .profile-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .user-info {
      display: flex;
      gap: 30px;
    }
    
    .avatar-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed #ccc;
    }
    
    .avatar-placeholder {
      color: #888;
    }
    
    .upload-btn {
      background-color: #d6a4a4;
      color: white;
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .form-content {
      flex: 1;
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
    
    .section-divider {
      height: 1px;
      background-color: #eee;
      margin: 10px 0;
    }
    
    .experience-section {
      margin-top: 10px;
    }
    
    .date-range {
      display: flex;
      gap: 15px;
    }
    
    .date-range .form-group {
      flex: 1;
    }
    
    .add-button, .save-button {
      background-color: #d6a4a4;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }
  `]
})
export class CreateUpdateProfileComponent {}


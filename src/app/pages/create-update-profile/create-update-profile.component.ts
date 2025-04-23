import { Component, OnInit } from '@angular/core';
import { UserProfilesService, UserProfile } from '../../services/user-profiles.service';
import { AuthService } from '../../services/auth.service'; // Assuming you have this service for auth
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginResponse } from '../../services/auth.service';
@Component({
  selector: 'app-create-update-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Profile</h2>
      </div>
      
      <div class="profile-section" *ngIf="userProfile">
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
              <input type="text" [(ngModel)]="userProfile.full_name" id="fullName" placeholder="Enter your full name">
            </div>
            
           
            
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="tel" [(ngModel)]="userProfile.phone" id="phone" placeholder="Enter your phone number">
            </div>
            
            <div class="form-group">
              <label for="location">Location</label>
              <input type="text" [(ngModel)]="userProfile.location" id="location" placeholder="City, Country">
            </div>
          </div>
        </div>

        <div class="actions">
          <button class="save-button" (click)="saveProfile()">Save Profile</button>
          <button class="delete-button" (click)="deleteProfile()">Delete Profile</button>
        </div>
      </div>

      <div *ngIf="!userProfile">
        <p>Loading user profile...</p>
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
    
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      margin-top: 20px;
    }
    
    .save-button, .delete-button {
      background-color: #d6a4a4;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class CreateUpdateProfileComponent implements OnInit {
  userProfile: UserProfile | null = null;

  constructor(
    private userProfilesService: UserProfilesService,
    private authService: AuthService, // Assuming you have an auth service
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('[Component Debug] Component initialized');
    this.authService.inspectCookies();
    
    this.authService.user$.subscribe(user => {
      console.log('[Component Debug] User state changed:', user ? `User ID: ${user.id}` : 'No user');
      
      if (user) {
        console.log('[Component Debug] Loading profile for user:', user.id);
        this.loadUserProfile(user.id);
      } else {
        console.log('[Component Debug] No user in state, checking auth status...');
        this.authService.checkAuthStatus().subscribe({
          next: (user) => {
            if (user) {
              console.log('[Component Debug] Auth check successful, loading profile for:', user.id);
              this.loadUserProfile(user.id);
            } else {
              console.error('[Component Debug] Auth check returned no user');
            }
          },
          error: (err) => {
            console.error('[Component Debug] Auth check failed with error:', err.message);
          }
        });
      }
    });
  }
  
  // You might want to add logging to the load profile method too
  loadUserProfile(userId: string | number): void {
    console.log('[Component Debug] Starting profile load for:', userId);
    if (userId) {
      this.userProfilesService.getUserProfileByUserId(String(userId)).subscribe(
        (profile) => this.userProfile = profile,
        (error) => console.error('Error fetching user profile', error)
      );
    } else {
      console.error('No logged-in user ID found');
    }
  }

  saveProfile(): void {
    if (this.userProfile) {
      this.userProfilesService.updateUserProfile(this.userProfile.id, this.userProfile).subscribe(
        (updatedProfile) => {
          this.userProfile = updatedProfile; // Update the UI with the new profile data
          console.log('Profile saved successfully');
        },
        (error) => console.error('Error saving profile', error)
      );
    }
  }

  deleteProfile(): void {
    if (this.userProfile) {
      this.userProfilesService.deleteUserProfile(this.userProfile.id).subscribe(
        () => {
          this.userProfile = null; // Clear the profile after deletion
          console.log('Profile deleted successfully');
        },
        (error) => console.error('Error deleting profile', error)
      );
    }
  }
}

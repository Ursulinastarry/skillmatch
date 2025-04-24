import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Update this path if needed
import { LoginResponse } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="login-container">
      <div class="auth-card">
        <div class="social-login">
          <button class="social-btn google-btn">
            Sign in with <span class="google-text">Google</span>
          </button>
          <button class="social-btn apple-btn">
            Sign in with <span class="apple-text">Apple</span>
          </button>
        </div>

        <div class="separator">
          <span>Log into your account</span>
        </div>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              formControlName="email" 
              class="form-control"
              placeholder="Enter your email">
            <div *ngIf="submitted && f['email'].errors" class="error-message">
              <div *ngIf="f['email'].errors['required']">Email is required</div>
              <div *ngIf="f['email'].errors['email']">Please enter a valid email</div>
            </div>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              formControlName="password" 
              class="form-control"
              placeholder="Enter your password">
            <div *ngIf="submitted && f['password'].errors" class="error-message">
              <div *ngIf="f['password'].errors['required']">Password is required</div>
            </div>
          </div>

          <div class="form-group">
            <label for="userRole">Login as</label>
            <select 
              id="userRole" 
              formControlName="userRole" 
              class="form-control">
              <option value="">Select your role</option>
              <option value="admin">Admin</option>
              <option value="jobseeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
            <div *ngIf="submitted && f['userRole'].errors" class="error-message">
              <div *ngIf="f['userRole'].errors['required']">Role selection is required</div>
            </div>
          </div>

          <div class="form-options">
            <div class="remember-me">
              <input type="checkbox" id="remember" formControlName="remember">
              <label for="remember">Remember me</label>
            </div>
            <a routerLink="/forgot-password" class="forgot-link">Forgot password?</a>
          </div>

          <div *ngIf="loginError" class="error-message">
            {{ loginError }}
          </div>

          <button type="submit" class="sign-in-btn">Sign In</button>
        </form>

        <div class="register-link">
          <span>Don't have an account?</span>
          <a routerLink="/create-account">Create account</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 40px auto;
      padding: 0 20px;
    }

    .auth-card {
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
    }

    .social-login {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
    }

    .social-btn {
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: white;
      cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
    }

    .social-btn:hover {
      background-color: #f5f5f5;
    }

    .google-text, .apple-text {
      font-weight: bold;
      margin-left: 5px;
    }

    .separator {
      text-align: center;
      margin: 20px 0;
      position: relative;
    }

    .separator::before, .separator::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 100px;
      height: 1px;
      background-color: #ddd;
    }

    .separator::before {
      left: 0;
    }

    .separator::after {
      right: 0;
    }

    .separator span {
      background-color: white;
      padding: 0 10px;
      color: #777;
      position: relative;
      z-index: 1;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
      color: #333;
    }

    .form-control {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }

    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0;
    }

    .remember-me {
      display: flex;
      align-items: center;
    }

    .remember-me input {
      margin-right: 5px;
    }

    .forgot-link {
      color: #e75480;
      text-decoration: none;
      font-size: 14px;
    }

    .sign-in-btn {
      width: 100%;
      padding: 12px;
      background-color: #e75480;
      color: white;
      border: none;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .sign-in-btn:hover {
      background-color: #d23e6d;
    }

    .register-link {
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
    }

    .register-link a {
      color: #e75480;
      text-decoration: none;
      margin-left: 5px;
      font-weight: 500;
    }

    .error-message {
      color: #dc3545;
      font-size: 12px;
      margin-top: 5px;
    }
  `]
})

export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  loginError = '';
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      userRole: ['', [Validators.required]],
      remember: [false]
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    this.loginError = '';
    console.log('Form submitted:', this.loginForm.value);
    
    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const formValue = this.loginForm.value;
    const roleId = this.authService.getRoleIdByName(formValue.userRole);

    console.log('Role ID retrieved for user role:', formValue.userRole, 'Role ID:', roleId);

    this.isLoading = true;
    
    // Login with HTTP-only cookie approach
    this.authService.login(formValue.email, formValue.password, formValue.userRole).subscribe({
      next: (response) => {
        const body = response.body;
        const user = body?.user;
      
        if (!user || !user.id) {
          console.error('Login response missing user information', response);
          this.loginError = 'Invalid login response. Please try again.';
          this.isLoading = false;
          return;
        }
      
        console.log('Login successful ✨', user);
        
        // No need to manually store tokens as they're in HTTP-only cookies
        
        // Navigate based on user role
        this.navigateBasedOnRole(formValue.userRole);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.loginError = 'Login failed. Please check your credentials and try again.';
        this.isLoading = false;
      }
    });
  }
  
  /**
   * Navigate to appropriate route based on user role
   */
  private navigateBasedOnRole(userRole: string): void {
    switch (userRole) {
      case 'admin':
        this.router.navigate(['/administrators']);
        break;
      case 'jobseeker':
        this.router.navigate(['/job-seekers']);
        break;
      case 'employer':
        this.router.navigate(['/employers']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
}
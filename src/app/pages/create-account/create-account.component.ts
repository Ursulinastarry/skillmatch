// pages/create-account/create-account.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="register-container">
      <div class="auth-card">
        

        <div class="social-login">
          <button class="social-btn google-btn">
            Sign up with <span class="google-text">Google</span>
          </button>
          <button class="social-btn apple-btn">
            Sign up with <span class="apple-text">Apple</span>
          </button>
        </div>

        <div class="separator">
          <span>Sign up for JobSeeker</span>
        </div>

        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              formControlName="email" 
              class="form-control"
              placeholder="Enter your email">
           
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              formControlName="password" 
              class="form-control"
              placeholder="Create a password">
          
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              formControlName="confirmPassword" 
              class="form-control"
              placeholder="Confirm your password">
          
          </div>

          <div class="terms-container">
            <input type="checkbox" id="terms" formControlName="terms">
            <label for="terms">I agree to the <a href="#">Terms & Conditions</a></label>
           
          </div>

          <button type="submit" class="register-btn">Register</button>
        </form>

        <div class="login-link">
          <span>Already have an account?</span>
          <a routerLink="/login">Log in</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .register-container {
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

    .logo-container {
      text-align: center;
      margin-bottom: 20px;
    }

    .logo {
      height: 40px;
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

    .terms-container {
      display: flex;
      align-items: flex-start;
      margin: 15px 0;
    }

    .terms-container input {
      margin-right: 10px;
      margin-top: 3px;
    }

    .terms-container a {
      color: #e75480;
      text-decoration: none;
    }

    .register-btn {
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

    .register-btn:hover {
      background-color: #d23e6d;
    }

    .login-link {
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
    }

    .login-link a {
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
export class CreateAccountComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: this.mustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // Here you would handle the registration logic
    console.log('Registration details', this.registerForm.value);
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="employers-container">
      <div class="employers-card">

        <div class="employers-header">
          <h2>Find the best talent for your company</h2>
          <p>Post jobs, search candidates, and manage your hiring process</p>
        </div>

        <div class="features-grid">
          <a class="feature-card" [routerLink]="['/create-update-profile']">
            <h3>Profile</h3>
            <p>Add your past work and accomplishments to stand out</p>
          </a>
          <a class="feature-card" [routerLink]="['/applicants']">
            <h3>Review candidates</h3>
            <p>Screen applicants and manage your talent pool</p>
          </a>
          <a class="feature-card" [routerLink]="['/chat-bot']">
            <h3>Chat</h3>
            <p>Connect with applicants directly through our platform</p>
          </a>
          <a class="feature-card" [routerLink]="['/schedule-interview']">
            <h3>Schedule interview</h3>
            <p>Coordinate and manage interview schedules efficiently</p>
          </a>
        </div>

        <div class="contact-form-container">
          <h3>Contact our sales team</h3>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                formControlName="name" 
                class="form-control"
                placeholder="Your name">
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                formControlName="email" 
                class="form-control"
                placeholder="Your email">
            </div>

            <div class="form-group">
              <label for="company">Company</label>
              <input 
                type="text" 
                id="company" 
                formControlName="company" 
                class="form-control"
                placeholder="Your company">
            </div>

            <button type="submit" class="contact-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .employers-container {
      width: 90vw;
      margin: 40px auto;
      padding: 0 20px;
    }

    .employers-card {
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
    }

    .employers-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .employers-header h2 {
      color: #333;
      margin-bottom: 10px;
    }

    .employers-header p {
      color: #666;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }

    .feature-card {
      background-color: #f9f9f9;
      border-radius: 6px;
      padding: 20px;
      border: 1px solid #eee;
      text-decoration: none;
      display: block;
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
    }

    .contact-form-container {
      margin-top: 30px;
    }

    .contact-form-container h3 {
      color: #333;
      margin-bottom: 20px;
      text-align: center;
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

    .contact-btn {
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

    .contact-btn:hover {
      background-color: #d23e6d;
    }

    @media (max-width: 768px) {
      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class EmployersComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) return;
    console.log('Contact form submitted:', this.contactForm.value);
  }
}

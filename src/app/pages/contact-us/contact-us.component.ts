import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact-container">
      <div class="contact-card">
       

        <div class="contact-header">
          <h2>Contact Us</h2>
          <p>We're here to help with any questions you might have</p>
        </div>

        <div class="contact-content">
          <div class="contact-form">
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
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject" 
                  class="form-control"
                  placeholder="Subject">
               
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  formControlName="message" 
                  class="form-control message-input"
                  placeholder="Your message"></textarea>
                
              </div>

              <button type="submit" class="submit-btn">Submit</button>
            </form>
          </div>

          <div class="contact-info">
            <div class="info-section">
              <h3>Resources</h3>
              <ul class="info-list">
                <li>FAQ</li>
                <li>Best practices</li>
                <li>Pricing</li>
                <li>Career advice</li>
                <li>Support</li>
                <li>Documents</li>
                <li>Legal information</li>
              </ul>
            </div>

            <div class="social-links">
              <h3>Connect with us</h3>
              <div class="social-icons">
                <a href="#" class="social-icon"><i class="fas fa-envelope"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
    }

    .contact-card {
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

    .contact-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .contact-header h2 {
      color: #333;
      margin-bottom: 10px;
    }

    .contact-header p {
      color: #666;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 30px;
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
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    .message-input {
      height: 100px;
      resize: none;
    }

    .submit-btn {
      background-color: #8d4f2f;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      margin-top: 10px;
    }

    .submit-btn:hover {
      background-color: #a86042;
    }

    .error-message {
      color: red;
      font-size: 12px;
    }

    .contact-info {
      font-size: 14px;
    }

    .info-section {
      margin-bottom: 20px;
    }

    .info-list {
      list-style: none;
      padding: 0;
    }

    .info-list li {
      margin-bottom: 6px;
      color: #555;
    }

    .social-links h3 {
      margin-bottom: 10px;
    }

    .social-icons {
      display: flex;
      gap: 10px;
    }

    .social-icon {
      font-size: 18px;
      color: #555;
      transition: color 0.3s;
    }

    .social-icon:hover {
      color: #8d4f2f;
    }

    @media screen and (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    console.log("✅ Form Submitted:", this.contactForm.value);

    // Reset after submission
    this.contactForm.reset();
    this.submitted = false;
  }
}

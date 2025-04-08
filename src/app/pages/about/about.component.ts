// pages/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="about-card">
       

        <div class="about-header">
          <h1 class="about-title">WHO ARE WE?</h1>
        </div>

        <div class="about-content">
          <p class="about-description">
         SkillMatch AI is a full-stack platform that revolutionizes the hiring process by focusing on skills rather than  job titles. The platform leverages AI to match candidates with opportunities based on actual abilities and  potential rather than traditional resume metrics.</p>

          <div class="faq-section">
            <h3 class="faq-title">FAQ</h3>

            <div class="faq-item">
              <div class="faq-question" (click)="toggleFAQ('faq1')">
                <h4>Why JobSeeker?</h4>
                <span class="toggle-icon">{{ expandedFaq === 'faq1' ? '−' : '+' }}</span>
              </div>
              <div class="faq-answer" [class.expanded]="expandedFaq === 'faq1'">
                <p>JobSeeker brings together employers and job seekers in a seamless experience, offering advanced AI matching algorithms to ensure the perfect fit. Our platform provides comprehensive tools for both job seekers and employers, streamlining the entire recruitment process from job posting to final hiring decision.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question" (click)="toggleFAQ('faq2')">
                <h4>How accurate are recommendations?</h4>
                <span class="toggle-icon">{{ expandedFaq === 'faq2' ? '−' : '+' }}</span>
              </div>
              <div class="faq-answer" [class.expanded]="expandedFaq === 'faq2'">
                <p>Our recommendation system achieves over 85% accuracy in matching candidates with suitable positions. The AI continuously learns from successful placements, improving its accuracy over time. We combine traditional keyword matching with advanced natural language processing to understand the nuances of job requirements and candidate qualifications.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question" (click)="toggleFAQ('faq3')">
                <h4>How to upload multiple CVs?</h4>
                <span class="toggle-icon">{{ expandedFaq === 'faq3' ? '−' : '+' }}</span>
              </div>
              <div class="faq-answer" [class.expanded]="expandedFaq === 'faq3'">
                <p>You can upload multiple CVs through your profile dashboard. Navigate to the "Documents" section and select "Upload CVs." Our system allows you to label each CV for different positions or industries, making it easier to apply to various job types with targeted resumes tailored to specific opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
    }

    .about-card {
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

    .about-header {
      text-align: center;
      margin-bottom: 30px;
    }

    .about-title {
      color: #4a6fa5;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: 1px;
    }

    .about-content {
      color: #444;
      line-height: 1.6;
    }

    .about-description {
      margin-bottom: 20px;
      font-size: 16px;
    }

    .faq-section {
      margin-top: 40px;
    }

    .faq-title {
      color: #333;
      margin-bottom: 20px;
      font-size: 22px;
    }

    .faq-item {
      margin-bottom: 15px;
      border: 1px solid #eee;
      border-radius: 6px;
      overflow: hidden;
    }

    .faq-question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      background-color: #f9f9f9;
      cursor: pointer;
    }

    .faq-question h4 {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: #333;
    }

    .toggle-icon {
      font-size: 20px;
      color: #e75480;
      font-weight: bold;
    }

    .faq-answer {
      padding: 0 15px;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
    }

    .faq-answer.expanded {
      max-height: 300px;
      padding: 15px;
      border-top: 1px solid #eee;
    }

    .faq-answer p {
      margin: 0;
      font-size: 15px;
      color: #555;
    }

    @media (max-width: 768px) {
      .about-title {
        font-size: 24px;
      }
    }
  `]
})
export class AboutComponent {
  expandedFaq: string | null = null;

  toggleFAQ(id: string) {
    this.expandedFaq = this.expandedFaq === id ? null : id;
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="chat-container">
        <div class="chat-header">
          <h3>Job Assistant</h3>
        </div>
        
        <div class="chat-messages">
          <div class="message bot">
            <div class="message-content">
              Hello! I'm your job search assistant. How can I help you today?
            </div>
          </div>
          
          <div class="message user">
            <div class="message-content">
              I'm looking for frontend developer positions
            </div>
          </div>
          
          <div class="message bot">
            <div class="message-content">
              Great! I can help you find frontend developer positions. Would you prefer full-time or contract roles?
            </div>
          </div>
        </div>
        
        <div class="chat-input">
          <input type="text" placeholder="Type your message..." [(ngModel)]="userMessage">
          <button class="send-button" (click)="sendMessage()">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="quick-replies">
        <div class="quick-reply-header">
          <h4>Quick Actions</h4>
        </div>
        <div class="quick-reply-buttons">
          <button class="quick-reply">Find jobs near me</button>
          <button class="quick-reply">Resume tips</button>
          <button class="quick-reply">Interview preparation</button>
          <button class="quick-reply">Salary information</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      gap: 20px;
    }
    
    .chat-container {
      flex: 2;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      height: 400px;
    }
    
    .chat-header {
      background-color: #d6a4a4;
      color: white;
      padding: 15px;
    }
    
    .chat-header h3 {
      margin: 0;
    }
    
    .chat-messages {
      flex: 1;
      padding: 15px;
      overflow-y: auto;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .message {
      display: flex;
      margin-bottom: 10px;
    }
    
    .message.bot {
      justify-content: flex-start;
    }
    
    .message.user {
      justify-content: flex-end;
    }
    
    .message-content {
      padding: 10px 15px;
      border-radius: 18px;
      max-width: 70%;
    }
    
    .message.bot .message-content {
      background-color: #e9e9e9;
    }
    
    .message.user .message-content {
      background-color: #d6a4a4;
      color: white;
    }
    
    .chat-input {
      display: flex;
      padding: 15px;
      background-color: white;
      border-top: 1px solid #eee;
    }
    
    .chat-input input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 20px;
      margin-right: 10px;
    }
    
    .send-button {
      background-color: #d6a4a4;
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    
    .quick-replies {
      flex: 1;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    
    .quick-reply-header {
      background-color: #f0f0f0;
      padding: 15px;
    }
    
    .quick-reply-header h4 {
      margin: 0;
    }
    
    .quick-reply-buttons {
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    .quick-reply {
      padding: 10px;
      background-color: #f9f9f9;
      border: 1px solid #eee;
      border-radius: 4px;
      cursor: pointer;
      text-align: left;
    }
    
    .quick-reply:hover {
      background-color: #f0f0f0;
    }
  `]
})
export class ChatBotComponent {
  userMessage = '';
  
  sendMessage() {
    // Implement chat logic here
    this.userMessage = '';
  }
}

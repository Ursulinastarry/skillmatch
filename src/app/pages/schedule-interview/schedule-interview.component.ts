import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule-interview',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Schedule Interview</h2>
      </div>
      
      <div class="schedule-form">
        <div class="form-group">
          <label for="candidate">Candidate</label>
          <input type="text" id="candidate" placeholder="Select or enter candidate name">
        </div>
        
        <div class="form-group">
          <label for="position">Position</label>
          <input type="text" id="position" placeholder="Enter position title">
        </div>
        
        <div class="form-group">
          <label for="interviewDate">Date</label>
          <input type="date" id="interviewDate">
        </div>
        
        <div class="time-slots">
          <div class="time-slot-header">
            <h4>Available Time Slots</h4>
          </div>
          
          <div class="time-slot-grid">
            <div class="time-slot">
              <input type="radio" name="timeSlot" id="slot1">
              <label for="slot1">9:00 AM - 10:00 AM</label>
            </div>
            
            <div class="time-slot">
              <input type="radio" name="timeSlot" id="slot2">
              <label for="slot2">10:30 AM - 11:30 AM</label>
            </div>
            
            <div class="time-slot">
              <input type="radio" name="timeSlot" id="slot3">
              <label for="slot3">1:00 PM - 2:00 PM</label>
            </div>
            
            <div class="time-slot">
              <input type="radio" name="timeSlot" id="slot4">
              <label for="slot4">2:30 PM - 3:30 PM</label>
            </div>
            
            <div class="time-slot">
              <input type="radio" name="timeSlot" id="slot5">
              <label for="slot5">4:00 PM - 5:00 PM</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label for="interviewType">Interview Type</label>
          <select id="interviewType">
            <option value="inPerson">In Person</option>
            <option value="video">Video Call</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="interviewers">Interviewers</label>
          <input type="text" id="interviewers" placeholder="Add interviewer names (separated by commas)">
        </div>
        
        <div class="form-group">
          <label for="notes">Additional Notes</label>
          <textarea id="notes" rows="3" placeholder="Any additional information for the interview"></textarea>
        </div>
        
        <button class="schedule-button">Schedule Interview</button>
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
    
    .schedule-form {
      max-width: 600px;
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
    
    .time-slots {
      margin-bottom: 20px;
    }
    
    .time-slot-header {
      margin-bottom: 10px;
    }
    
    .time-slot-header h4 {
      margin: 0;
      font-weight: 500;
    }
    
    .time-slot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 10px;
    }
    
    .time-slot {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    
    .schedule-button {
      background-color: #d6a4a4;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }
  `]
})
export class ScheduleInterviewComponent {}
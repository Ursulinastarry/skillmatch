// Manage Users component
// manage-users.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="header">
        <h2>Manage Users</h2>
        <div class="header-actions">
          <input type="text" placeholder="Search users" class="search-input" [(ngModel)]="searchQuery" (input)="filterUsers()">
          <button class="add-user-btn" (click)="openAddUserModal()">Add User</button>
        </div>
      </div>
      
      <div class="users-table">
        <div class="table-header">
          <div class="header-item name-col">Name</div>
          <div class="header-item email-col">Email</div>
          <div class="header-item role-col">Role</div>
          <div class="header-item status-col">Status</div>
          <div class="header-item actions-col">Actions</div>
        </div>
        
        <div class="table-row" *ngFor="let user of displayedUsers">
          <div class="cell name-col">{{ user.name }}</div>
          <div class="cell email-col">{{ user.email }}</div>
          <div class="cell role-col">{{ user.role }}</div>
          <div class="cell status-col">
            <span class="status-badge" [ngClass]="user.active ? 'active' : 'inactive'">
              {{ user.active ? 'Active' : 'Inactive' }}
            </span>
          </div>
          <div class="cell actions-col">
            <button class="action-btn edit" (click)="editUser(user)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button class="action-btn delete" (click)="deleteUser(user)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="no-users" *ngIf="displayedUsers.length === 0">
          No users found matching your search criteria.
        </div>
      </div>
      
      <div class="pagination">
        <button class="pagination-btn prev" [disabled]="currentPage === 1" (click)="changePage(currentPage - 1)">
          Previous
        </button>
        <div class="page-numbers">
          <button 
            *ngFor="let page of getPageNumbers()" 
            class="page-number" 
            [ngClass]="{'active': page === currentPage}"
            (click)="changePage(page)">
            {{ page }}
          </button>
        </div>
        <button class="pagination-btn next" [disabled]="currentPage === totalPages" (click)="changePage(currentPage + 1)">
          Next
        </button>
      </div>
      
      <!-- Add User Modal -->
      <div class="modal" *ngIf="showAddUserModal">
        <div class="modal-content">
          <div class="modal-header">
            <h3>{{ editingUser ? 'Edit User' : 'Add New User' }}</h3>
            <button class="close-btn" (click)="closeModal()">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="userName">Name</label>
              <input type="text" id="userName" [(ngModel)]="newUser.name" class="form-input">
            </div>
            <div class="form-group">
              <label for="userEmail">Email</label>
              <input type="email" id="userEmail" [(ngModel)]="newUser.email" class="form-input">
            </div>
            <div class="form-group">
              <label for="userRole">Role</label>
              <select id="userRole" [(ngModel)]="newUser.role" class="form-select">
                <option value="Administrator">Administrator</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Employer">Employer</option>
              </select>
            </div>
            <div class="form-group">
              <label for="userStatus">Status</label>
              <div class="toggle-switch">
                <input type="checkbox" id="userStatus" [(ngModel)]="newUser.active">
                <label for="userStatus">{{ newUser.active ? 'Active' : 'Inactive' }}</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="cancel-btn" (click)="closeModal()">Cancel</button>
            <button class="save-btn" (click)="saveUser()">{{ editingUser ? 'Update' : 'Add' }}</button>
          </div>
        </div>
      </div>
      
      <!-- Delete Confirmation Modal -->
      <div class="modal" *ngIf="showDeleteModal">
        <div class="modal-content delete-modal">
          <div class="modal-header">
            <h3>Confirm Delete</h3>
            <button class="close-btn" (click)="cancelDelete()">&times;</button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete {{ userToDelete?.name }}?</p>
            <p class="warning">This action cannot be undone.</p>
          </div>
          <div class="modal-footer">
            <button class="cancel-btn" (click)="cancelDelete()">Cancel</button>
            <button class="delete-btn" (click)="confirmDelete()">Delete</button>
          </div>
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .header-actions {
      display: flex;
      gap: 15px;
    }
    
    .search-input {
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      min-width: 200px;
    }
    
    .add-user-btn {
      background-color: #d6a4a4;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .users-table {
      border: 1px solid #eee;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .table-header {
      display: grid;
      grid-template-columns: 1.5fr 2fr 1fr 1fr 1fr;
      background-color: #f5f5f5;
      padding: 15px;
      font-weight: 500;
    }
    
    .table-row {
      display: grid;
      grid-template-columns: 1.5fr 2fr 1fr 1fr 1fr;
      padding: 15px;
      border-top: 1px solid #eee;
      align-items: center;
    }
    
    .status-badge {
      padding: 4px 8px;
      border-radius: 12px;
      display: inline-block;
      font-size: 12px;
      text-align: center;
    }
    
    .status-badge.active {
      background-color: #c8e6c9;
      color: #2e7d32;
    }
    
    .status-badge.inactive {
      background-color: #ffcdd2;
      color: #c62828;
    }
    
    .action-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
    }
    
    .action-btn.edit {
      color: #1976d2;
    }
    
    .action-btn.delete {
      color: #d32f2f;
    }
    
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      gap: 15px;
    }
    
    .pagination-btn {
      background-color: #f0f0f0;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .pagination-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .page-numbers {
      display: flex;
      gap: 5px;
    }
    
    .page-number {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: none;
      cursor: pointer;
    }
    
    .page-number.active {
      background-color: #d6a4a4;
      color: white;
      border-color: #d6a4a4;
    }
    
    .no-users {
      padding: 20px;
      text-align: center;
      color: #666;
    }
    
    /* Modal styles */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    
    .modal-content {
      background-color: white;
      border-radius: 8px;
      width: 100%;
      max-width: 500px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .delete-modal {
      max-width: 400px;
    }
    
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      border-bottom: 1px solid #eee;
    }
    
    .close-btn {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #666;
    }
    
    .modal-body {
      padding: 20px;
    }
    
    .modal-footer {
      padding: 15px 20px;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      border-top: 1px solid #eee;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }
    
    .form-input, .form-select {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    
    .toggle-switch {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .cancel-btn {
      padding: 8px 16px;
      border: 1px solid #ccc;
      background-color: white;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .save-btn {
      padding: 8px 16px;
      background-color: #d6a4a4;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .delete-btn {
      padding: 8px 16px;
      background-color: #f44336;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .warning {
      color: #d32f2f;
      font-size: 14px;
    }
  `]
})
export class ManageUsersComponent {
  // Mock user data
  users = [
    { id: 1, name: 'John Smith', email: 'john.smith@example.com', role: 'Administrator', active: true },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@example.com', role: 'Recruiter', active: true },
    { id: 3, name: 'Michael Brown', email: 'm.brown@example.com', role: 'Employer', active: false },
    { id: 4, name: 'Jessica Davis', email: 'jessica.davis@example.com', role: 'Recruiter', active: true },
    { id: 5, name: 'Robert Wilson', email: 'r.wilson@example.com', role: 'Employer', active: true },
    { id: 6, name: 'Emily Taylor', email: 'e.taylor@example.com', role: 'Administrator', active: false },
    { id: 7, name: 'David Moore', email: 'd.moore@example.com', role: 'Recruiter', active: true },
    { id: 8, name: 'Amanda Clark', email: 'a.clark@example.com', role: 'Employer', active: true }
  ];
  
  // Displayed users (filtered)
  displayedUsers: any[] = [];
  
  // Pagination variables
  itemsPerPage = 5;
  currentPage = 1;
  totalPages = 1;
  
  // Search functionality
  searchQuery = '';
  
  // Modal controls
  showAddUserModal = false;
  showDeleteModal = false;
  
  // New/Edited user object
  newUser: any = { name: '', email: '', role: 'Recruiter', active: true };
  editingUser: any = null;
  userToDelete: any = null;
  
  constructor() {
    this.updateDisplayedUsers();
  }
  
  updateDisplayedUsers() {
    // Apply search filter
    const filteredUsers = this.filterUsers();
    
    // Calculate total pages
    this.totalPages = Math.ceil(filteredUsers.length / this.itemsPerPage);
    
    // Get current page items
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedUsers = filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
  }
  
  filterUsers() {
    if (!this.searchQuery.trim()) {
      const filteredUsers = [...this.users];
      this.totalPages = Math.ceil(filteredUsers.length / this.itemsPerPage);
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      this.displayedUsers = filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
      return filteredUsers;
    }
    
    const query = this.searchQuery.toLowerCase().trim();
    const filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(query) || 
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    );
    
    this.totalPages = Math.ceil(filteredUsers.length / this.itemsPerPage);
    
    // Reset to first page when searching
    this.currentPage = 1;
    
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedUsers = filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
    
    return filteredUsers;
  }
  
  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  
  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updateDisplayedUsers();
  }
  
  openAddUserModal() {
    this.editingUser = null;
    this.newUser = { name: '', email: '', role: 'Recruiter', active: true };
    this.showAddUserModal = true;
  }
  
  closeModal() {
    this.showAddUserModal = false;
  }
  
  editUser(user: any) {
    this.editingUser = user;
    this.newUser = { ...user };
    this.showAddUserModal = true;
  }
  
  saveUser() {
    if (this.editingUser) {
      // Update existing user
      const index = this.users.findIndex(u => u.id === this.editingUser.id);
      if (index !== -1) {
        this.users[index] = { ...this.newUser, id: this.editingUser.id };
      }
    } else {
      // Add new user
      const newId = Math.max(...this.users.map(u => u.id), 0) + 1;
      this.users.push({ ...this.newUser, id: newId });
    }
    
    this.closeModal();
    this.updateDisplayedUsers();
  }
  
  deleteUser(user: any) {
    this.userToDelete = user;
    this.showDeleteModal = true;
  }
  
  cancelDelete() {
    this.userToDelete = null;
    this.showDeleteModal = false;
  }
  
  confirmDelete() {
    if (this.userToDelete) {
      const index = this.users.findIndex(u => u.id === this.userToDelete.id);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    }
    
    this.cancelDelete();
    this.updateDisplayedUsers();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="logo">
        <a routerLink="/">
          <img src="assets/logo.png" alt=" Logo" class="logo-image">
        </a>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact Us</a></li>
        </ul>
      </nav>
      <button class="menu-toggle" (click)="toggleMenu()">
        <span class="menu-icon"></span>
      </button>
    </header>
    <div class="mobile-menu" [class.active]="isMenuOpen">
      <ul class="mobile-nav-list">
        <li><a routerLink="/" (click)="closeMenu()">Home</a></li>
        <li><a routerLink="/about" (click)="closeMenu()">About</a></li>
        <li><a routerLink="/contact" (click)="closeMenu()">Contact Us</a></li>
      </ul>
    </div>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo-image {
      height: 40px;
      width: 80px;
    }

    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-list li {
      margin: 0 12px;
    }

    .nav-list a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-list a:hover, .nav-list a.active {
      color: #e75480;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
    }

    .menu-icon {
      display: block;
      width: 24px;
      height: 2px;
      background-color: #333;
      position: relative;
    }

    .menu-icon::before,
    .menu-icon::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: #333;
      transition: transform 0.2s;
    }

    .menu-icon::before {
      top: -8px;
    }

    .menu-icon::after {
      bottom: -8px;
    }

    .mobile-menu {
      display: none;
    }

    @media (max-width: 768px) {
      .nav {
        display: none;
      }

      .menu-toggle {
        display: block;
      }

      .mobile-menu {
        display: block;
        position: fixed;
        top: 72px;
        left: 0;
        right: 0;
        background-color: #ffffff;
        padding: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transform: translateY(-100%);
        transition: transform 0.3s ease-in-out;
        z-index: 100;
      }

      .mobile-menu.active {
        transform: translateY(0);
      }

      .mobile-nav-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .mobile-nav-list li {
        margin: 16px 0;
      }

      .mobile-nav-list a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        font-size: 18px;
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
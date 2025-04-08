import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      padding: 20px;
      min-height: calc(100vh - 140px);
      background-color: #f5f5f5;
    }
  `]
})

export class AppComponent {
  title = 'skillmatch';
}





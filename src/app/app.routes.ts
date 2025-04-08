import { Routes } from '@angular/router';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { SystemPerformanceLogsComponent } from './pages/system-performance-logs/system-performance-logs.component';
export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'create-account', 
    loadComponent: () => import('./pages/create-account/create-account.component').then(m => m.CreateAccountComponent) 
  },
  { 
    path: 'employers', 
    loadComponent: () => import('./pages/employers/employers.component').then(m => m.EmployersComponent) 
  },
  { 
    path: 'job-seekers', 
    loadComponent: () => import('./pages/job-seekers/job-seekers.component').then(m => m.JobSeekersComponent) 
  },
  { 
    path: 'administrators', 
    loadComponent: () => import('./pages/administrators/administrators.component').then(m => m.AdministratorsComponent) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactComponent) 
  },
  { 
    path: 'post-find-job', 
    loadComponent: () => import('./pages/post-find-job/post-find-job.component').then(m => m.PostFindJobComponent) 
  },
  { 
    path: 'applicants', 
    loadComponent: () => import('./pages/applicants/applicants.component').then(m => m.ApplicantsComponent) 
  },
  { 
    path: 'career-guidance', 
    loadComponent: () => import('./pages/career-guidance/career-guidance.component').then(m => m.CareerGuidanceComponent) 
  },
  { 
    path: 'chat-bot', 
    loadComponent: () => import('./pages/chat-bot/chat-bot.component').then(m => m.ChatBotComponent) 
  },
  { 
    path: 'create-update-profile', 
    loadComponent: () => import('./pages/create-update-profile/create-update-profile.component').then(m => m.CreateUpdateProfileComponent) 
  },
  { 
    path: 'interview-notifications', 
    loadComponent: () => import('./pages/interview-notifications/interview-notifications.component').then(m => m.InterviewNotificationsComponent) 
  },
  { path: 'manage-users', component: ManageUsersComponent},
  { 
    path: 'schedule-interview', 
    loadComponent: () => import('./pages/schedule-interview/schedule-interview.component').then(m => m.ScheduleInterviewComponent) 
  },
  { 
    path: 'system-performance-logs', 
     component: SystemPerformanceLogsComponent  },
  { 
    path: 'upload-review-cv', 
    loadComponent: () => import('./pages/upload-review-cv/upload-review-cv.component').then(m => m.UploadReviewCvComponent) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
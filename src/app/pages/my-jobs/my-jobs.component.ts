// import { Component } from '@angular/core';
// import { inject, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { JobsService } from '../../services/jobs.service';
// import { Job } from '../../pages/post-find-job/post-find-job.component';

// @Component({
//   selector: 'app-my-jobs',
//   imports: [],
//   templateUrl: './my-jobs.component.html',
//   styleUrl: './my-jobs.component.css'
// })
// // my-jobs.component.ts


// export class MyJobsComponent implements OnInit {
//   jobs: Job[] = [];
//   loading = true;
//   router = inject(Router);
//   jobsService = inject(JobsService);

//   ngOnInit(): void {
//     this.fetchJobs();
//   }

//   fetchJobs(): void {
//     this.jobsService.getEmployerJobs().subscribe({
//       next: (data) => {
//         this.jobs = data;
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error(err);
//         this.loading = false;
//       }
//     });
//   }

//   viewApplicants(jobId: string): void {
//     this.router.navigate(['/employer/jobs', jobId, 'applicants']);
//   }

//   postNewJob(): void {
//     this.router.navigate(['/employer/jobs/create']);
//   }
// }

// }

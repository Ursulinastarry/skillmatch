import { Component } from '@angular/core';
import { inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../services/jobs.service';

@Component({
  selector: 'app-my-jobs',
  imports: [],
  templateUrl: './my-jobs.component.html',
  styleUrl: './my-jobs.component.css'
})


export class MyJobsComponent implements OnInit {
  jobs: Job[] = [];
  loading = true;
  router = inject(Router);
  jobsService = inject(JobsService);
  employerId: string = 'YOUR_EMPLOYER_ID_HERE'; // TODO: Replace with actual logic to get employerId

  ngOnInit(): void {
    this.fetchJobs();
  }
  fetchJobs(): void {
    this.jobsService.getJobsByEmployer(this.employerId).subscribe({
      next: (data) => {
        this.jobs = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
  viewApplicants(jobId: string): void {
    this.router.navigate(['/employer/jobs', jobId, 'applicants']);
  }

  postNewJob(): void {
    this.router.navigate(['/employer/jobs/create']);
  }
  }

  




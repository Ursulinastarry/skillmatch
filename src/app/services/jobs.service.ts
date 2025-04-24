import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Job {
  id: string;
  title: string;
  description: string;
  company_name: string;
  location: string;
  salary_range: string;
  employer_name: string;
  skills: string[];
  created_at: string;
 
}


@Injectable({
  providedIn: 'root'
})
export class JobsService {
private apiUrl = `${environment.apiUrl}/jobs`;

private httpOptions = {
    withCredentials: true
};

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  createJob(job: Partial<Job>): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }

  updateJob(id: string, job: Partial<Job>): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}/${id}`, job);
  }

  deleteJob(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getJobsByEmployer(employerId: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/employer/${employerId}`);
  }

 
  searchJobs(searchTerm: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/search?term=${searchTerm}`);
  }

  getRecommendedJobs(userId: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/recommended/${userId}`);
  }
}
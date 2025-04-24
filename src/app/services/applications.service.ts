import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Application {
  id: string;
  user_id: string;
  cv_id: number;
  cv_url:string;
  status: string; // 'pending', 'reviewed', 'interviewed', 'rejected', 'accepted'
  applied_at: string;
  full_name: string;
  profile_picture: string;
  skills: string[];

}

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private apiUrl = `${environment.apiUrl}/applications`;

  constructor(private http: HttpClient) { }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }

  getApplicationById(id: string): Observable<Application> {
    return this.http.get<Application>(`${this.apiUrl}/${id}`);
  }

  createApplication(application: Partial<Application>): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, application);
  }

  updateApplication(id: string, application: Partial<Application>): Observable<Application> {
    return this.http.put<Application>(`${this.apiUrl}/${id}`, application);
  }

  deleteApplication(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getUserApplications(userId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/user/${userId}`);
  }

  getJobApplications(jobId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/job/${jobId}`);
  }

  updateApplicationStatus(id: string, status: string): Observable<Application> {
    return this.http.patch<Application>(`${this.apiUrl}/${id}/status`, { status });
  }

  getApplicationsByStatus(status: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/status/${status}`);
  }
}
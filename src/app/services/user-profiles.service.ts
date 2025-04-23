import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface UserProfile {
  id: number;
  userId: number;
  full_name: string;
  phone: string;
  bio: string;
  company_name: string;
  location: string;
  profile_picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserProfilesService {
  private apiUrl = `${environment.apiUrl}/profiles`;

  constructor(private http: HttpClient) { }

  getUserProfiles(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(this.apiUrl);
  }

  getUserProfileById(id: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/${id}`);
  }

  getUserProfileByUserId(userId: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/users/${userId}`);
  }

  createUserProfile(profile: Partial<UserProfile>): Observable<UserProfile> {
    return this.http.post<UserProfile>(this.apiUrl, profile);
  }

  updateUserProfile(id: number, profile: Partial<UserProfile>): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.apiUrl}/${id}`, profile);
  }

  deleteUserProfile(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
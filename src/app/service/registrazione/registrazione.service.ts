import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {
  private backendUrl = 'http://localhost:8080/api/v1/auth/register';

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post(this.backendUrl, userData);
  }
}

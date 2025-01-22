import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'http://127.0.0.1:5000/api/cripto'; // Endpoint Flask

  constructor(private http: HttpClient) {}

  getCryptoData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

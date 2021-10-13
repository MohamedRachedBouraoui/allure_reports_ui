import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiEndpoint = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {
    if (AppConfig.parametres) {
      this.apiEndpoint = AppConfig.parametres.apiEndpoint;
    }
  }

  recuperePrefixApi():string{
    return this.apiEndpoint;
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.apiEndpoint + url);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.httpClient.post<any>(
      this.apiEndpoint + url,
      JSON.stringify(data),
      this.httpOptions
    );
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.httpClient.put<any>(
      this.apiEndpoint + url,
      JSON.stringify(data),
      this.httpOptions
    );
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<any>(
      this.apiEndpoint + url,
      this.httpOptions
    );
  }

  putAvecFile<T>(url: string, data: any): Observable<T> {
    return this.httpClient.put<any>(this.apiEndpoint + url, data);
  }
}

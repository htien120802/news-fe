import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response-model.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  server_url = `${environment.apiUrl}/api/`;
  headers = new HttpHeaders().append('Access-Control-Allow-Origin','*').append('Content-Type','application/json');

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ResponseModel> {
    const url = `${this.server_url}category`;
    return this.httpClient.get<ResponseModel>(url);
  }
  getNewses(): Observable<ResponseModel>{
    const url = `${this.server_url}news`;
    return this.httpClient.get<ResponseModel>(url);
  }
  getNewsesByCategoryCode(code: any, page: number, size: number): Observable<ResponseModel>{
    const url = `${this.server_url}news/category/${code}?page=${page}&&size=${size}`;
    return this.httpClient.get<ResponseModel>(url);
  }
  getNewsById(id: any): Observable<ResponseModel>{
    const url = `${this.server_url}news/${id}`;
    return this.httpClient.get<ResponseModel>(url);
  }
  getNewsPage(page: number, size: number): Observable<ResponseModel>{
    const url = `${this.server_url}news?page=${page}&&size=${size}`;
    return this.httpClient.get<ResponseModel>(url);
  }
}

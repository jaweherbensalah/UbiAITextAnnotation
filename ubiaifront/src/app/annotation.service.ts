import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {
  

  private apiUrl = 'http://localhost:8000/annotations/save-document/';

  constructor(private http: HttpClient) { }

  saveDocumentAndAnnotations(data: { document: string, annotations: any[] }): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
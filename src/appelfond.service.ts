import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appelfond } from './app/appelfond';

@Injectable({
  providedIn: 'root'
})
export class AppelfondService {

  constructor(private http: HttpClient) { }

  getAF(): Observable<Appelfond[]> {
    return this.http.get<Appelfond[]>('http://localhost:8080/appelfond');
  }
}

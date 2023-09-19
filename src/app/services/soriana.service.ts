import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SorianaService {

  constructor(private readonly http: HttpClient) { }

  public clientVerfificationDataIsCorrect(): Observable<any> {
    const headers = {
      'Access-Control-Allow-Headers': `*`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    return this.http.post<any>(`https://hooks.zapier.com/hooks/catch/632774/3ri85w6/`, 2, {headers} )
  }
}

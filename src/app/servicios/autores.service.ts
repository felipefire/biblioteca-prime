import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../interfaces/autor.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

     private url: string = 'http://localhost:3000/autor';
  
    constructor(
      private http:HttpClient
       ) { }
  
    get (): Observable <Autor[]> {
      return this.http.get<Autor[]>(this.url);
    }
  
    post(autor: Autor): Observable<any>{
      return this.http.post(this.url, autor, { responseType: 'text' });
    }
  
    put(autor:Autor): Observable<any>{
      return this.http.put(this.url, autor, {responseType: 'text'});
    }
    delete(autor: Autor): Observable<any>{
      return this.http.delete(`${this.url}/${autor.id}`, {responseType: 'text'});
    }
  }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private dataUri = `${environment.apiUri}/books`;
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {

    console.log("get books called" );

    return this.http.get<Book[]>(`${this.dataUri}`)

  }

}

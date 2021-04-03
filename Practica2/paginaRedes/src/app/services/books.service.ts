import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { bookInfo } from '../../interface/book_interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

  headers:HttpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  })

  prefijo_url = "http://localhost:3000/api/book";

  // CONSULTA PARA VER TODOS LOS LIBROS
  get_books(){
    const url = this.prefijo_url + '/read';
    return this.http.get(url, {headers: this.headers}).pipe(map(data => data));
  }

  // ALMACENAR LIBRO EN LOCALSTORAGE
  setCurrentBook(book:bookInfo){
    let book_string = JSON.stringify(book);
    localStorage.setItem('BookLog', book_string);
  }

  // EXTRAER LIBRO DEL LOCALSTORAGE
  getCurrentBook(){
    let current_book = localStorage.getItem('BookLog');
    if (current_book){
      let book_json = JSON.parse(current_book);
      return book_json;
    }else {
      return null;
    }
  }

  // CONSULTA PARA CREAR UN LIBRO
  create_book(nombre:string, cantidad:string, precio:string, descripcion:string){
    const url = this.prefijo_url + '/add';
    return this.http.post(url, {
      "nombre": nombre,
      "cantidad": cantidad,
      "precio": precio,
      "descripcion": descripcion
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }

}

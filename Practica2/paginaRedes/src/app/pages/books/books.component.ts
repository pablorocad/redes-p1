import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(
    public book_service:BooksService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  books_list:any = [];

  /* METODO PARA EXTRAER TODOS LOS LIBROS */
  getBooks(){
    this.book_service.get_books().subscribe((res:any) => {
      this.books_list = res;
    });
  }

  /* METODO PARA GUARDAR EN LOCALSTORAGE EL LIBRO SELECCIONADO */
  selectBook(data:any){
    this.book_service.setCurrentBook(data);
    this.router.navigate(['/book']);
  }

}

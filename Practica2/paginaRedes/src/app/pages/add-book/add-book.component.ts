import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(
    public book_service:BooksService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  nombre:string = "";
  precio:string = "";
  cantidad:string = "";
  descripcion:string = "";

  new_book(){
    this.book_service.create_book(
      this.nombre, this.cantidad, this.precio, this.descripcion
    ).subscribe((res:any) => {
      this.router.navigate(['/books']);
    });
  }

}

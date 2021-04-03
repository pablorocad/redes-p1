import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    public book_service:BooksService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.data_book = this.book_service.getCurrentBook();
  }

  data_book:any = null;

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() book?: Book;
  @Output() bookFormClose = new EventEmitter<Book>();
  bookForm : FormGroup = new FormGroup({});


  constructor() { }

  ngOnInit(): void {

    this.bookForm  = new FormGroup({
      title: new FormControl ('', [Validators.required, Validators.minLength(4)]),
      year_written: new FormControl ('', [Validators.required]),
      edition: new FormControl(''),
      // price: new FormControl(''),
      author: new FormGroup({
        name: new FormControl(''),
        nationality: new FormControl('')
      })
    })
  }
  onSubmit(){
    console.log('forms submitted with: ');
    console.table(this.bookForm?.value);
    this.bookFormClose.emit(this.bookForm?.value);
  }
  closeForm() {
    this.bookFormClose.emit(undefined)

  }
  
  get title() {
    return this.bookForm?.get('title');
  }
  get year_written() {
    return this.bookForm?.get('year_written');
  }




}

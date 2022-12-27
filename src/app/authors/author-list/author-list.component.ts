import { Component, OnInit } from '@angular/core';
import { Author, authors } from 'src/app/authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];
  constructor() {
    console.log(this.authors);
  }

  ngOnInit(): void {}
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }
  onDelete(id: number) {
    console.log(id);
    this.authors = this.authors.filter((author) => {
      return author.id !== id;
    });
    if(this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0]
    }
  }
}

import {Injectable} from '@angular/core';
import {Post} from '../Post';
import {Observable, of} from 'rxjs';

@Injectable()
export class DataService {

  ELEMENT_DATA: Post[] = [
    {position: 0, titre: 'Post One', date: new Date().toDateString(), article: 'Body 1', auteur: 'Leslie'},
    {position: 1, titre: 'Post Two', date: new Date().toDateString(), article: 'Body 2', auteur: 'Leslie'},
    {position: 2, titre: 'Post Three', date: new Date().toDateString(), article: 'Body 3', auteur: 'Leslie'},
    {position: 3, titre: 'Post Four', date: new Date().toDateString(), article: 'Body 4', auteur: 'Leslie'},
    {position: 4, titre: 'Post Five', date: new Date().toDateString(), article: 'Body 5', auteur: 'Leslie'},
    {position: 5, titre: 'Post Six', date: new Date().toDateString(), article: 'Body 6', auteur: 'Leslie'},
  ];
  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];

  constructor() {
  }

  getData(): Observable<Post[]> {
    return of<Post[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  addPost(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}

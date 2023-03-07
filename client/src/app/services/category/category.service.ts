import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories?: Category[];

  private url = 'http://localhost:3000/category';

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.url}/`);
  }

  getCategoryCount(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.url}/count`);
  }

  deleteCategory(category: Category) {
    return this.httpClient.delete(this.url + `/${category._id}`);
  }

}

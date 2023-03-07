import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/services/category/category.model';
import { CategoryService } from 'src/app/services/category/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.refreshCategoryList();
  }

  refreshCategoryList() {
    this.categoryService.getCategories().subscribe((res) => {
      this.categoryService.categories = res as Category[];
      console.log(this.categoryService.categories);
    })
  }

  new() {
    this.router.navigate(['categories/new']);
  }

  view(category: Category) {
    console.log(category);
    this.router.navigate(['categories/view/' + category._id]);
  }

  delete(category: Category) {
    if (confirm('Are you sure to delete this category ?') == true) {
      this.categoryService.deleteCategory(category).subscribe((res) => {
        this.refreshCategoryList();
        this.snackBar.open('Deleted Successfully!', '', {
          duration: 3000,
        });
      });
    }
  }

  navigateToHome() {
    this.router.navigate(['categories']);
  }
}

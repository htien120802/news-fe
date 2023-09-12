import { Component } from '@angular/core';
import { HttpServiceService } from './service/http-service.service';
import { NewsModel } from './model/news-model.model';
import { CategoryModel } from './model/category-model.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'news-fe';
  categories?: CategoryModel[];


  

 

  constructor(
    private httpService: HttpServiceService,
    private router: Router
  ) {}
  ngOnInit() {
    

    this.httpService.getCategories().subscribe((response) => {
      if (response.status === 'success') {
        this.categories = response.data;
      } else {
        console.log('Get categories is failure!');
      }
    });
    this.router.navigate(['/news-list/trang-chu'])
  }

  
}

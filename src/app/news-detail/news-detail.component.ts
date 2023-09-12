import { Component } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent {
  news: any;
  constructor( private httpService: HttpServiceService, private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.params['id'];
    this.httpService.getNewsById(id).subscribe(response => {
      if (response.status === "success"){
        this.news = response.data;
      }else{
        console.log("Can't get news with this id")
      }
    });
  }
}

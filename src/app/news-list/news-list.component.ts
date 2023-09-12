import { Component } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  newses?: any;

  isLoading=false;
  currentPage: number =0;
  itemsPerPage: number =9;
  code:any;

  constructor(private httpService: HttpServiceService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.route.paramMap.subscribe((param: ParamMap)=>{
      this.code = param.get("code");
      this.loadData();
    })
  }


  toggleLoading = ()=>this.isLoading=!this.isLoading;

  // it will be called when this component gets initialized.
  loadData= ()=>{
    
    if (this.code === "trang-chu"){
      
      this.httpService.getNewsPage(this.currentPage,this.itemsPerPage).subscribe({
      next:response=>this.newses = response.data,
      error:err=>console.log(err),
      complete:()=>this.toggleLoading()
     });
    } else {
        this.httpService.getNewsesByCategoryCode(this.code,this.currentPage,this.itemsPerPage).subscribe({
        next:response=>this.newses = response.data,
        error:err=>console.log(err),
        complete:()=>this.toggleLoading()
       });
    }
    
  }

  // this method will be called on scrolling the page
  appendData= ()=>{
    this.toggleLoading();
    if (this.code==="trang-chu"){
      this.httpService.getNewsPage(this.currentPage,this.itemsPerPage).subscribe({
        next:response=>this.newses = [...this.newses,...response.data],
        error:err=>console.log(err),
        complete:()=>this.toggleLoading()
        });
    }else{
      this.httpService.getNewsesByCategoryCode(this.code,this.currentPage,this.itemsPerPage).subscribe({
        next:response=>this.newses = [...this.newses,...response.data],
        error:err=>console.log(err),
        complete:()=>this.toggleLoading()
        });
    }
    
  }

  onScroll= ()=>{
    this.currentPage++;
    this.appendData();
    console.log("scroll")
  }

  getNewsDetail(id: any) {
    this.newses = [];
    this.router.navigate([`/news-detail/${id}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingModule } from 'ngx-rating';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-movie-page-details',
  templateUrl: './movie-page-details.component.html',
  styleUrls: ['./movie-page-details.component.css']
})
export class MoviePageDetailsComponent implements OnInit {

  UserName!:any;
  UserCommends!:any;


 formValue !: FormGroup;
 movie !: any;
 ApiService: any;
 id !: any;
 Movieid : any;
 starsCount : any;
 UserRating: number;
 moviereview !: any;
 AvgRating !: any;


 constructor(private api : ApiService,private _route : ActivatedRoute,private router : Router){
  this.UserRating = 0;
 }
 ngOnInit(): void {
 
  this.FullMovieDetails(this.id);
  this.UserReview(this.id)
 }
 FullMovieDetails(id:any){
  this._route.paramMap.subscribe(
    (params)=>{
      this.id=params.get("id")
      this.id
      if(this.id){
        this.api.GetFullMovieDetails(this.id)
        .subscribe(res=>{
          this.movie = res;
          console.log(this.movie)
        })}
    })
 }

 UserReview(id:any){
  this._route.paramMap.subscribe(
    (params)=>{
      this.id=params.get("id")
      this.id
      if(this.id){
        this.api.GetUserReview(this.id)
        .subscribe(res=>{
          this.moviereview = res;
          console.log(this.moviereview)
        })
      }
    }
  )
 }
 AvgUserRating(id:any){
  this._route.paramMap.subscribe(
    (params)=>{
      this.id=params.get("id")
      this.id
      if(this.id){
        this.api.GetAVGUserReview(this.id)
        .subscribe(res=>{
          this.AvgRating = res;
          console.log(this.AvgRating)
        })
      }
    }
  )
 }



 postUserReview(){
  var val1={UserName : this.UserName,
  UserCommends : this.UserCommends,
  UserRating : this.UserRating,
  MovieReviewId: this.id
  };


console.log(val1);
  this.api.PostUserReview(val1)
  .subscribe(res=>{
    console.log(res);
    alert("Movie Added Successfully")
    // let ref = document.getElementById('cancel')
    // ref?.click();
    // this.formValue.reset();
    location.reload();
  },
  err=>{
    alert("something went wrong");
  })
}
 
}


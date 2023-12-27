import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { MoviesModel } from './movies-dash board.model';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesdetailsModel } from './moviedetails-dashboard.model';



@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.css']
})
export class MoviesDashboardComponent implements OnInit{


  MovieName : any;
  YearOfRelease : any;
  ShortDescript : any;
  UrlImage : any;
  Director : any;
  Actors : any;
  Producer : any;
  Story : any;
  Rating : any;
  Commends : any;



  term='';
  formValue !: FormGroup;
  MovieModel !: any;
  movieModelObj : MoviesModel = new MoviesModel();
  moviesdetailsModelObj : MoviesdetailsModel = new MoviesdetailsModel();
  movieData !: any;
  movie !: any;
  movie1 !: any;
  value !: any;
  // MovieName !: any;
  ApiService: any;
  moviesearch !: any;


@ViewChild('search') search! : ElementRef;
Search='';


  constructor(private formbuilder: FormBuilder,private api : ApiService ,private router : Router){
 
  }

  

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      moviename : [''],
      yearofrelease : [''],
      shortdescript :[''],
      image :[''],
      director : [''],
      actors : [''],
      story : [''],
      producer : [''],
      rating : [''],
      commends : [''],
      MovieName : ['']
    });
    this.getAllMovie();
  }
  onEdit(row: any){
    this.router.navigate(['movie-page-details',row.id]);
   }
  clickAddMovie(){
    this.formValue.reset();
  }
  postMovieDetails(){
    this.movieModelObj.MovieName = this.formValue.value.moviename;
    this.movieModelObj.YearOfRelease = this.formValue.value.yearofrelease;
    this.movieModelObj.ShortDescript = this.formValue.value.shortdescript;
    this.movieModelObj.image = this.formValue.value.image;

    this.api.PostMovie(this.movieModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Movie Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllMovie();
    },
    err=>{
      alert("something went wrong");
    })
  }
  postAllMovieDetails(){
    var val={MovieName : this.MovieName,
   YearOfRelease : this.YearOfRelease,
    ShortDescript: this.ShortDescript,
    image : this.UrlImage,
    Director : this.Director,
    Actors : this.Actors,
    Producer: this.Producer,
    Story : this.Story,
    Rating : this.Rating,
    Commends : this.Commends
    };


console.log(val);
    this.api.PostallMovieDetails(val)
    .subscribe(res=>{
      console.log(res);
      alert("Movie Added Successfully")
      // let ref = document.getElementById('cancel')
      // ref?.click();
      this.formValue.reset();
      location.reload();

    },
    err=>{
      alert("something went wrong");
    })
  }
  getAllMovie(){  
    this.api.GetMovie()
    .subscribe(res=>{
      this.movieData = res;
     
    })
  }
  SearchMoviedetails(){
    this.api.SearchMovie(this.formValue.value.MovieName)
    .subscribe(res=>{
      this.movie = res.Movies;
    })
  }
 SearchMovieName(){
  this.search = this.search.nativeElement.value;

  var moviesearch = this.search;
  alert(moviesearch)
  this.api.SearchMovieByName(moviesearch)
  .subscribe(res=>{
    this.movieData = res.result;
    console.log(this.movie)
  })
 }

}

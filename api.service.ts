import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { map} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  PostMovie(data : any){
    return this._http.post<any>("https://localhost:7206/api/Movie/add_movie",data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  GetMovie(){
    return this._http.get<any>("https://localhost:7206/api/Movie/get_all_movies")
    .pipe(map((res: any)=>{
      console.log(res)
      return res;
    }))
  }
  SearchMovie(MovieName : string){
    return this._http.get<any>("https://localhost:7206/api/Movie/get_movie/moviename?MovieName="+MovieName)
    .pipe(map((res:any)=>{
      console.log(res)
      return res;
    }))
  }
  GetFullMovieDetails(id : number){
    return this._http.get<any>("https://localhost:7206/api/Moviedetails/get_fullmoviedetails?id="+id)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  PostallMovieDetails(data : any){
    return this._http.post<any>("https://localhost:7206/api/Moviedetails/add_full_Moviedetails",data)
    .pipe(map((res: any)=>{
      console.log(res)
      return res;
    }))
  }

  SearchMovieByName(MovieName : any){
    return this._http.get<any>("https://localhost:7206/api/Moviedetails/get_movie_search?moviesearch="+MovieName)
    .pipe(map((res:any)=>{
      console.log(res)
      return res;
    }))
  }

  GetUserReview(id :number){
    return this._http.get<any>("https://localhost:7206/api/Moviedetails/get_userreview?id="+id)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  

PostUserReview(data : any){
  return this._http.post<any>("https://localhost:7206/api/Moviedetails/add_userreview",data)
  .pipe(map((res: any)=>{
    console.log(res)
    return res;
  }))
}

GetAVGUserReview(id :number){
  return this._http.get<any>("https://localhost:7206/api/Moviedetails/get_avguserreview?id"+id)
  .pipe(map((res: any)=>{
    return res;
  }))
}
}

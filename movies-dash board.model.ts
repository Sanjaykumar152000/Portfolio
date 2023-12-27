export class MoviesModel{
    Id : number = 0;
    MovieName : string = '';
    YearOfRelease : string = '';
    ShortDescript : string = '';
    image : string = '';

}



// ngOnInit(): void {

//     this.formValue = this.formbuilder.group({
//       moviename :new FormControl("",[Validators.required]),
//       yearofrelease : new FormControl("",[Validators.required,Validators.maxLength(4),Validators.pattern("[1900-2050].*")]),
//       shortdescript : new FormControl("",Validators.required),
//       image : new FormControl("",Validators.required),
//       director : new FormControl("",Validators.required),
//       actors : new FormControl("",Validators.required),
//       story : new FormControl("",Validators.required),
//       producer : new FormControl("",Validators.required),
//       rating : new FormControl("",Validators.required),
//       commends : new FormControl("",Validators.required),
//       MovieName : ['']
//     })
//     this.getAllMovie();
//   }


// get Moviename(): FormControl {
//   return this.formValue.get("moviename") as FormControl;
// }
// get Yearofrelease(): FormControl {
//   return this.formValue.get("yearofrelease") as FormControl;
// }
// get Shortdescript(): FormControl {
//   return this.formValue.get("shortdescript") as FormControl;
// }
// get Image(): FormControl {
//   return this.formValue.get("image") as FormControl;
// }
// get Director(): FormControl {
//   return this.formValue.get("director") as FormControl;
// }
// get  Actors(): FormControl {
//   return this.formValue.get("actors") as FormControl;
// }
// get Story(): FormControl {
//   return this.formValue.get("story") as FormControl;
// }
// get Producer(): FormControl {
//   return this.formValue.get("producer") as FormControl;
// }
// get Rating(): FormControl {
//   return this.formValue.get("rating") as FormControl;
// }
// get Commends(): FormControl {
//   return this.formValue.get("commends") as FormControl;
// }









// 



// <div class="mb-3">
//                   <label for="moviename" class="form-label">MovieName</label>
//                   <input type="text" class="form-control"[(ngModel)]="Moviename"  name ="moviename" #name = "ngModel" id="moviename" required>
//                   <div class="form-text text-danger" *ngIf="Moviename.errors?.['required'] && (Moviename.touched || Moviename.dirty)">Movie Name is Required*</div>
//                 </div>

//                 <div class="mb-3">
//                   <label for="yearofrelease" class="form-label">YearOfRelease</label>
//                   <input type="number" formControlName="yearofrelease" class="form-control" id="yearofrelease" required>
//                 <div class="form-text text-danger" *ngIf="Yearofrelease.errors?.['required'] && (Yearofrelease.touched || Yearofrelease.dirty)">Please Enter year</div>
//                 <div class="form-text text-danger" *ngIf="Yearofrelease.errors?.['maxlength'] && (Yearofrelease.touched || Yearofrelease.dirty)">
//                   Check the Year*
//                 </div>
//                 <div class="form-text text-danger" *ngIf="Yearofrelease.errors?.['pattern'] && (Yearofrelease.touched || Yearofrelease.dirty)">
//                   Check the Year*
//                 </div>
//                 </div>
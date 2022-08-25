import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.css']
})
export class EnterDetailsComponent implements OnInit {
  
  // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  //   const isSubmitted = form && form.submitted;
  //   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  // }

  constructor(private _userServiece: UserServiceService,  private router: Router) { }

  ngOnInit(): void {
  }
  
  userDetail={
    "name": "",
    "email": "",
    "phoneNumber": "",
    "company": "",
    "age": ""
}
  onSubmit(){
    console.log(this.userDetail);
    this._userServiece.sendAddUserDetails(this.userDetail).subscribe(
      response =>{
        console.log("response:-"+ response);
      },
      error=>{
        console.log("error"+error);
        
      }
    );
    this.router.navigate(['/']);
  }
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}

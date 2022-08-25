import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:UserServiceService) { }

  
  ngOnInit(): void {
  }
  public productsArray: user[] = [];
  
  getData(){
    this.service.getAllUsesrDetails().subscribe(
      response=>{
        this.productsArray = response;
        console.log("r"+ this.productsArray);
        this.productsArray.forEach(u=>{
          console.log(u);
          
        })
        
      },
      error=>{
        console.log("E"+error);
        
      }
    )
    
  }
}

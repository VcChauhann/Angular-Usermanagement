import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { UserServiceService } from 'src/app/service/user-service.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {

  constructor(private service:UserServiceService) {
   }

  displayedColumns: string[] = ['id', 'name', 'email', 'age' , 'phoneNumber', 'company'];
  public productsArray: user[] = [];
  public sortedData: user[] = [];

  
  ngOnInit(): void {
    this.service.getAllUsesrDetails().subscribe(
      response=>{
        this.productsArray = response;
        this.sortedData = response;
        this.productsArray.forEach(u=>{
          console.log(u);
          
        })
      },
      error=>{
        console.log("E"+error);
        
      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    // this.productsArray.filter = filterValue.trim().toLowerCase();
  
  }

  
  sortData(sort: Sort) {
    const data = this.productsArray.slice();
    if (!sort.active || sort.direction === '') {
      this.productsArray = data;
      return;
    }

    this.productsArray = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return this.compare(a.id, b.id, isAsc);
        case 'name':
          return this.compare(a.name , b.name, isAsc);
        case 'age':
          return this.compare(a.age, b.age, isAsc);
          case 'company':
            return this.compare(a.comapny, b.comapny, isAsc);
        default:
          return 0;
      }
    })
  };
    
    compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

   
    
}

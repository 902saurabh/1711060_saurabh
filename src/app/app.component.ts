import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { event } from './../Event';
import {GetDataService} from './get-data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ia2';

  name="";
  date="";
  time="";
  address="";
  city="";
  country="";
  events:event[] = [];

  constructor(private eventService:GetDataService,private router:Router){}
  
  onSubmit(form: NgForm) {
    
    //console.log(form);
    //this.router.navigate(['/login']);
    
    if (form.valid) {
      
      
      const temp ={
        "name":form.value.name,
        "date":form.value.date,
        "time":form.value.time,
        "address":form.value.address,
        "city":form.value.city,
        "country":form.value.country
      }

      this.events.push(temp);
     // console.log(this.events)

     this.eventService.addEvent(temp);

     this.router.navigate(['event-list']);
     
     
    }
    
  }

  clear(){

    this.name="";
    this.date="";
    this.time="";
    this.address="";
    this.city="";
    this.country="";
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
products:any=[];
selection = 'name';
options = ['name','address','other'];
selectedAnimal = 'dog';
animals = ['cat', 'dog', 'zebra', 'giraffe'];
people: any[] = [
  {
    "name": "Avinash",
    "country": 'INDIA'
  },
  {
    "name": "Mcleod  Mueller",
    "country": 'USA'
  },{
    "name": "Day  Meyers",
    "country": 'HK'
  }
 ];
  constructor(private auth:AuthService) { 
    this.products=['cars','books','jobs','furniture','music']
  }

  ngOnInit() {
  }

  onAnimalClicked(event:Event){
    const clickedAnimal = event.srcElement.innerHTML.trim();
    this.selectedAnimal = clickedAnimal;
  }
  
  getColor(country) { 
    switch (country) {
      case 'INDIA':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

}

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  title = 'This is the component title data of {{ title }} ';
  imageUrl = 'assets/img/01.png';
  isDisabled = true;
  value : string = 'Default value';
  count = 0;
  increment()
  {
    this.count++;
  }
  decrement()
  {
    if(this.count > 0) this.count--;
    
  }
  ngOnInit(): void {
    this.isDisabled = Math.random() < 0.5; // Randomly sets true or false on each refresh
    console.log('Button Disabled:', this.isDisabled);
  }
}

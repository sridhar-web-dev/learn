import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
  title = 'learn';
  islogin = false;
  orderStatus = 'Completed';
  products = ['Apple', 'Nokia', 'vivo', 'redmi', 'oppo'];
  productsWithPrice = [
    ['apple', '10'],
    ['apple', '10'],
  ];
  property = [
    {
      name: 'apple',
      price: '100',
      year: '1996',
    },
    {
      name: 'samsung',
      price: '80',
      year: '2000',
    },
    {
      name: 'google',
      price: '120',
      year: '1998',
    },
    {
      name: 'microsoft',
      price: '150',
      year: '1975',
    },
    {
      name: 'amazon',
      price: '90',
      year: '1994',
    },
    {
      name: 'tesla',
      price: '200',
      year: '2003',
    },
    {
      name: 'sony',
      price: '110',
      year: '1946',
    },
  ];
  textlengh: string = 'Srar';
  username: string = 'Sridhar';
  
}

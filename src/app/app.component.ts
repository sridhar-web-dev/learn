import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {
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
  lifecycleLogs: string[] = [];

  constructor() {
    this.logLifecycle('Constructor Called!!!');
  }

  ngOnInit(): void {
    this.logLifecycle('ngOnInit Called !!!');
  }

  ngDoCheck(): void {
    this.logLifecycle('ngDoCheck Called !!!');
  }

  ngAfterContentInit(): void {
    this.logLifecycle('ngAfterContentInit Called !!!');
  }

  ngAfterContentChecked(): void {
    this.logLifecycle('ngAfterContentChecked Called !!!');
  }

  ngAfterViewInit(): void {
    this.logLifecycle('ngAfterViewInit Called !!!');
  }

  ngAfterViewChecked(): void {
    this.logLifecycle('ngAfterViewChecked Called !!!');
  }

  ngOnDestroy(): void {
    this.logLifecycle('ngOnDestroy Called !!!');
  }

  private logLifecycle(message: string) {
    this.lifecycleLogs.push(message);
    // console.log(message);
  }
  clearLogs() {
    this.lifecycleLogs = [];
  }
  
}

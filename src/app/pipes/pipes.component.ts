import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
name = 'test name';
today = new Date();
price = 456456546;
employees = [
  { id: 101, name: 'John', role: 'Developer' },
  { id: 102, name: 'Jane', role: 'Designer' },
  { id: 103, name: 'Smith', role: 'Tester' }
];
}

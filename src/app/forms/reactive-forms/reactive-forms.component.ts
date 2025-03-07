import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
contactForm = new FormGroup(
  {
    firstname : new FormControl(),
    lastname : new FormControl(),
    email : new FormControl(),
    phone : new FormControl(),
    gender : new FormControl(),
    country : new FormControl(),
    maritalStatus : new FormControl(),
  }
  
)
onSubmit()
  {
    console.log(this.contactForm.value)
  }
}

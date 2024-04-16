import { Component } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss'
})
export class AddClientComponent {
  formData = {
    code: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  };

  submitForm() {
    console.log(this.formData);

  }

}

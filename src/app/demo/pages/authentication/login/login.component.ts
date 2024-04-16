import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  constructor(private router: Router) {}

  login(username: string, password: string): void {
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Invalid credentials');
    }
  }
}

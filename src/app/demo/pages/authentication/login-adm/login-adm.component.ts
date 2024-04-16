import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-adm',
  standalone: true,
  imports: [],
  templateUrl: './login-adm.component.html',
  styleUrl: './login-adm.component.scss'
})
export class LoginAdmComponent {
  constructor(private router: Router) {}

  login(username: string, password: string): void {
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Invalid credentials');
    }
  }
}

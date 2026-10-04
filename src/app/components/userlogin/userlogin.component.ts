import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  imports: [FormsModule,RouterLink,RouterOutlet],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
 email = '';
  password = '';
  rememberMe = false;

  login() {
    if (this.email === 'admin@gmail.com' &&
        this.password === 'admin123') {
      alert('Login Successful!');
    } else {
      alert('Invalid Email or Password!');
    }
  }
}

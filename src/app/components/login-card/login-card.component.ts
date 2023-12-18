import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user.mode';

@Component({
  selector: 'jwf-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {
  user: User = new User; 
}

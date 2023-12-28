import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { SimpleUser } from 'src/app/shared/models/user.mode';

@Component({
  selector: 'jwf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor( private adminS : AdminService){}
  
  userList$ = this.adminS.loadUsers()
  
  performAction( user: SimpleUser) {
    console.log(user)
    this.adminS.updateMemberSignature(user.email).subscribe(
      response => {
        console.log('POST successful', response);

      },
      error => {
        console.error('Error during POST', error);

      }
    );
  }
}


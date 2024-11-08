import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  users: string[] = [];
  admins: string[] = [];

  //for Users
  pushUsers(data: string) {
    //alert(data);
    this.users.push(data);
  }
  onRemoveUser(item: number) {
    this.users.splice(item, 1);
  }

  //for Admins
  pushAdmins(data: string) {
    this.admins.push(data);
  }
  onRemoveAdmin(item: number) {
    this.admins.splice(item, 1);
  }
}

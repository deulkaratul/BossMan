import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  users: any;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users=this.userService.getAllUsersMock();
  }

  // ngOnInit(): void {
  //  this.userService.getAllUsersMock().subscribe((data)=>{
  //   this.users=data;

  //  });
  }




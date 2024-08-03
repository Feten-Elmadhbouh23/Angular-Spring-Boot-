import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UserListComponent implements OnInit {
  users: User[] = []; 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsersList().subscribe({
      next: (data: User[]) => {
        this.users = data;
        console.log(this.users);  // Debug: Check the console for user data
      },
      error: (error: any) => {
        console.error('Error fetching users', error);
      },
      complete: () => {
        console.log('User fetching completed');
      }
    });
  }
}

import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { UserService } from '../../../services';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  private readonly userService = inject(UserService);

  users$ = this.userService.getUsers();
}

import { Component, input, output} from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  user = input.required<User>();
  deleteUser = output<number>();

  onDeleteUser(): void {
    this.deleteUser.emit(this.user().id);
  }
}

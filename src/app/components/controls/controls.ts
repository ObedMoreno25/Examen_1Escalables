import { Component , output} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-controls',
  styleUrl: './controls.css',
  templateUrl: './controls.html',
})
export class Controls {
  orderByIdClick = output<void>();
  orderByNameClick = output<void>();
  invertListClick = output<void>();

  onOrderByIdClick(): void {
    this.orderByIdClick.emit();
  }

  onOrderByNameClick(): void {
    this.orderByNameClick.emit();
  }

  onInvertListClick(): void {
    this.invertListClick.emit();
  }

}

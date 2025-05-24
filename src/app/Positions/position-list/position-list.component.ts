import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Position, PositionService } from '../../Services/positions.service';

@Component({
  selector: 'app-position-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './position-list.component.html',
  styleUrl: './position-list.component.css',
})
export class PositionListComponent implements OnInit {
  positions: Position[] = [];

  constructor(private positionService: PositionService) {}

  ngOnInit(): void {
    this.positionService.getAll().subscribe((data) => {
      this.positions = data;
      console.log('Positions', data);
    });
  }

  delete(id: number) {
    if (!confirm('Are you sure you want to delete this Position?')) return;
    this.positionService
      .delete(id)
      .subscribe({ next: () => this.positions.filter((pos) => pos.id !== id) });
  }

  update(id: number, position: Position) {
    /////
  }
}

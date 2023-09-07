import { Component, Input } from '@angular/core';
import {
  CommonModule,
  NgClass,
  NgFor,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import { KanbanItemComponent } from '../kanban-item/kanban-item.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lg-kanban-status',
  standalone: true,
  imports: [
    KanbanItemComponent,
    MatIconModule,
    NgSwitch,
    NgSwitchCase,
    NgClass,
    NgFor,
  ],
  templateUrl: './kanban-status.component.html',
  styleUrls: ['./kanban-status.component.scss'],
})
export class KanbanStatusComponent {
  @Input({ required: true, alias: 'status' }) status!: string;
  @Input({ alias: 'tasks' }) data!: any[];
  openListTask = true;
}

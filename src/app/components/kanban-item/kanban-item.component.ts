import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/@core/models/task.model';

@Component({
  selector: 'lg-kanban-item',
  standalone: true,
  imports: [],
  templateUrl: './kanban-item.component.html',
  styleUrls: ['./kanban-item.component.scss'],
})
export class KanbanItemComponent {
  @Input({ alias: 'task', required: true }) taskData!: ITask;
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KANBAN_STATUS, STATUS, TStatus } from './@core/constants/kanban.const';
import { KanbanStatusComponent } from './components/kanban-status/kanban-status.component';
import { KanbanItemComponent } from './components/kanban-item/kanban-item.component';
import { HttpClient } from '@angular/common/http';
import { ITask } from './@core/models/task.model';
@Component({
  selector: 'lg-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    KanbanStatusComponent,
    KanbanItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'aptech-ajs';
  columns = KANBAN_STATUS;
  status = STATUS;
  task: ITask[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get<ITask[]>('../assets/data/data.json').subscribe((data) => {
      console.log(data);

      this.task = data;
    });
  }

  filterTaskByStatus(status: TStatus) {
    console.log(
      this.task.filter((item) => item.task_status === STATUS[status])
    );

    return this.task.filter((item) => item.task_status === STATUS[status]);
  }
}

import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeListModule } from 'devextreme-angular';

import {
  Host, CufService
  /*Service, Task, Employee, Priority,*/
} from './app.service';


@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CufService],
  preserveWhitespaces: true,
})
export class AppComponent {
  hosts: Host[] = [];

  constructor(service: CufService) {
    this.hosts = service.getHosts();
  }
  /*
  tasks: Task[];

  employees: Employee[];

  priorities: Priority[];

  statuses: string[];

  constructor(service: Service) {
    this.tasks = service.getTasks();
    this.employees = service.getEmployees();
    this.priorities = service.getPriorities();

    this.statuses = [
      'Not Started',
      'Need Assistance',
      'In Progress',
      'Deferred',
      'Completed',
    ];
  }

  getCompletionText(cellInfo) {
    return `${cellInfo.valueText}%`;
  } */
}

@NgModule({
  imports: [
    BrowserModule,
    DxTreeListModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'], 
  directives: [ ROUTER_DIRECTIVES ]
})
export class ReportComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

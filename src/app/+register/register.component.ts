import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class RegisterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

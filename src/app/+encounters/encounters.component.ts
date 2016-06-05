import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { IEncounter } from '../shared/models';
import { EncounterService  } from '../shared/services';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [EncounterService],
})
export class EncountersComponent implements OnInit {

  public encounter: IEncounter[];

  constructor(
    private router: Router,
    private encounterService: EncounterService
  ) {
  }

  ngOnInit() {
    this.encounterService.getEncounters().then( encounters => this.encounter = encounters);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../../people.service';
import { ModalComponent } from '../modal/modal.component';
import { People } from '../models/people.model';

@Component({
  selector: 'peopleTable',
  templateUrl: './peopleTable.component.html',
  styleUrls: ['./peopleTable.component.scss']
})
export class PeopleTableComponent implements OnInit {
  pagenumber: number = 1;
  totalPeople: number = 100;
  people: People[] = [];
  person: People | undefined;
  cargando: boolean = true;
  @ViewChild(ModalComponent, { static: false }) ModalComponent: ModalComponent | undefined;

  constructor(
    public peopleService: PeopleService,
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople(this.pagenumber)
      .subscribe({
        next: (resp: any) => {
          this.people = resp.results;
          this.cargando = false;
        },
        error: (err: any) => {
          console.log('err :>> ', err);
        }
      });
  }

  pageChanged(page: any) {
    this.pagenumber = page,
      this.getPeople();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  openModal(person: People) {
    this.person = person;
    this.ModalComponent?.toggleModal();
  }
}

import { PeopleService } from './../../people.service';
import { People } from './../models/people.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'peopleGrid',
  templateUrl: './peopleGrid.component.html',
  styleUrls: ['./peopleGrid.component.scss']
})
export class PeopleGridComponent implements OnInit {
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

import { PeopleService } from './../../people.service';
import { People } from './../models/people.model';
import { Component, OnInit } from '@angular/core';

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
  
  constructor(
    public peopleService: PeopleService,
  ) {}

  ngOnInit() {
    this.getPeople();
    
    const overlay = document.querySelector('.modal-overlay')
    overlay?.addEventListener('click', this.toggleModal)
    
    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', this.toggleModal)
    }
    
    document.onkeydown = (evt) => {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc")
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
        this.toggleModal()
      }
    };
  }

  getPeople(){
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

  pageChanged(page: any){
    this.pagenumber = page,
    this.getPeople();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  
  
  toggleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal?.classList.toggle('opacity-0')
    modal?.classList.toggle('pointer-events-none')
    body?.classList.toggle('modal-active')
  }

  openModal(person: People){
    this.person = person;
    this.toggleModal();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { People } from '../models/people.model';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input('person') person: People | undefined;

  ngOnInit() {
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

  toggleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal?.classList.toggle('opacity-0')
    modal?.classList.toggle('pointer-events-none')
    body?.classList.toggle('modal-active')
  }

}

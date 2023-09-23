import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private modalService: NgbModal
  ) { }

  modalOpen: boolean = false;
  urlVideo: string = 'https://www.youtube.com/watch?v=7mDLJvAKoNk&t=1372s&ab_channel=LethalCrysis';
  myName: {
    firstName: string,
    secondName: string,
    firstLastName: string,
    secondLastName: string
  } = {
    firstName: 'Oscar',
    secondName: 'Leonardo',
    firstLastName: 'Perdomo',
    secondLastName: 'González'
  }

  myEmail: string = 'leonardo.perdomo.1081@gmail.com';
  myPhoneNumber: string = '+573154883782';
  proffesion: string = 'FullStack Development'

  ngOnInit(): void {
    const typedElement = document.querySelector('.typed-text-output');
    if (typedElement) {
      console.log(typedElement);
      new Typed(typedElement, {
        strings: this.proffesion?.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openVideoModal(content: any) {
    if (!this.modalOpen) {
      this.modalOpen = true;
    };
    this.modalService
    .open(content, { ariaLabelledBy: 'modal-basic-title' })
    .result.then(
      (result) => {
        console.log(`Closed with: ${result}`);
        this.closeVideoModal();
      },
      (reason) =>{
        console.log(`Dismissed ${this.getDismissReason(reason)}`);
      }
    )
  }

  closeVideoModal() {
    if (this.modalOpen) {
      this.modalOpen = false;
    };

  }
}

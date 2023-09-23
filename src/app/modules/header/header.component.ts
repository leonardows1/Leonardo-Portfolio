import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  modalOpen: boolean = false;
  urlVideo: string = 'https://www.youtube.com/watch?v=7mDLJvAKoNk&t=1372s&ab_channel=LethalCrysis';

  constructor(
    private modalService: NgbModal
  ) { }

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

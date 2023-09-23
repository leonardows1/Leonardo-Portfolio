import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent {

  @Input() urlVideo: string = '';
  @Output() closeVideo = new EventEmitter<any>();

  constructor(

  ) { }

  closeModal() {
    this.closeVideo.emit();
  }

}

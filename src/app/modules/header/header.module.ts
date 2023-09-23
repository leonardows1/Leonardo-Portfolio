import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { VideoModalModule } from 'src/app/widgets/video-modal/video-modal.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    VideoModalModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }

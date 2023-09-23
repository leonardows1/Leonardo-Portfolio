import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './components/skill.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SkillComponent
  ],
  imports: [
    CommonModule,
    NgbProgressbarModule
  ],
  exports: [SkillComponent]
})
export class SkillModule { }

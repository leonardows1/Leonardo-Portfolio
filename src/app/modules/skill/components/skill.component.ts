import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  skillsMatrix: Skill[][] = [
    [
      {
        name: 'HTML',
        level: 95
      },
      {
        name: 'CSS',
        level: 85
      },
      {
        name: 'C#',
        level: 90
      }
    ],
    [
      {
        name: 'JavaScript',
        level: 90
      },
      {
        name: 'Angular JS',
        level: 95
      },
      {
        name: 'SQL Server',
        level: 85
      }
    ]
  ];
}

export interface Skill{
 name: string,
 level: number
}

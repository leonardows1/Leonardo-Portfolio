import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Leonardo's Portfolio";
  theme: theme = theme.dark;
}

export enum theme{
  'dark',
  'light'
}

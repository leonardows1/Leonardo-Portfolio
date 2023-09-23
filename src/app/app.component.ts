import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public listNumbers: number[] = [];

  constructor(){}

  ngOnInit(): void {
  }
  title = "Leonardo's Portfolio";
  theme: theme = theme.dark;
}

export enum theme{
  'dark',
  'light'
}

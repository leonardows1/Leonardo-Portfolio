import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuCollapsed = true;
  collapseMenu(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}

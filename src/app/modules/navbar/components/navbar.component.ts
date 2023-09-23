import { Component, ElementRef, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private el: ElementRef
  ) { }

  isMenuCollapsed: boolean = true;
  isNavbarVisible: boolean = false;
  navLinks: NavLink[] = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'qualification', text: 'Quality' },
    { id: 'skill', text: 'Skills' },
    { id: 'portfolio', text: 'Portfolio' },
    { id: 'contact', text: 'Contact' }
  ]

  ngOnInit(): void {
  }

  collapseMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  scrollToElement(elementId: string): void {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log(element)
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    // Comprueba si la posición de desplazamiento es mayor que 200 píxeles
    if (scrollPosition > 200) {
      this.isNavbarVisible = true;
    } else {
      this.isNavbarVisible = false;
    }
  }

}

export interface NavLink{
  id: string,
  text: string
}

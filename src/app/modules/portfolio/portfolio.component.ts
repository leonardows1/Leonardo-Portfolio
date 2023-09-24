import { Component, signal } from '@angular/core';
import { CardContent } from 'src/app/interfaces/cardContent';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor() { }

  cards = signal<CardContent[]>([]);
  productstoreImage: string = 'https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg';
  productsApiImage: string = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613232219081/PVoQHWkJ6.png';
  projects = signal<Project[]>([
    {
      name: 'Products API',
      images: [this.productsApiImage],
      description: '',
      url: 'https://apileo.somee.com/swagger/index.html'
    },
    {
      name: 'ProductStore',
      images: [this.productstoreImage],
      description: '',
      url: 'https://productstore-27de3.web.app/'
    },
    {
      name: 'Products API',
      images: [this.productsApiImage],
      description: '',
      url: 'https://apileo.somee.com/swagger/index.html'
    },
    {
      name: 'ProductStore',
      images: [this.productstoreImage],
      description: '',
      url: 'https://productstore-27de3.web.app/'
    },
    {
      name: 'Products API',
      images: [this.productsApiImage],
      description: '',
      url: 'https://apileo.somee.com/swagger/index.html'
    },
    {
      name: 'ProductStore',
      images: [this.productstoreImage],
      description: '',
      url: 'https://productstore-27de3.web.app/'
    }
  ]);
  mybreakpoint: number = 0;

ngOnInit() {
this.mybreakpoint = (window.innerWidth <= 600) ? 1 : 6;
}
handleSize(event: any) {
this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : 6;
}
}

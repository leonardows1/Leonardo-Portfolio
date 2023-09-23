import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './modules/about/about.module';
import { ContactModule } from './modules/contact/contact.module';
import { CopyrightModule } from './modules/copyright/copyright.module';
import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { NavbarModule } from './modules/navbar/navbar.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { QualificationModule } from './modules/qualification/qualification.module';
import { ServiceModule } from './modules/service/service.module';
import { SkillModule } from './modules/skill/skill.module';
import { NgbCollapse, NgbCollapseModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageItemModule } from './widgets/image-item/image-item.module';
import { TitleModule } from './widgets/title/title.module';
import { VideoModalModule } from './widgets/video-modal/video-modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    CopyrightModule,
    FooterModule,
    HeaderModule,
    NavbarModule,
    PortfolioModule,
    QualificationModule,
    ServiceModule,
    SkillModule,
    ImageItemModule,
    TitleModule,
    VideoModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

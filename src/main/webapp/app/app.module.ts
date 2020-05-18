import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CiberhealthApplicationSharedModule } from 'app/shared/shared.module';
import { CiberhealthApplicationCoreModule } from 'app/core/core.module';
import { CiberhealthApplicationAppRoutingModule } from './app-routing.module';
import { CiberhealthApplicationHomeModule } from './home/home.module';
import { CiberhealthApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CiberhealthApplicationSharedModule,
    CiberhealthApplicationCoreModule,
    CiberhealthApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CiberhealthApplicationEntityModule,
    CiberhealthApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CiberhealthApplicationAppModule {}

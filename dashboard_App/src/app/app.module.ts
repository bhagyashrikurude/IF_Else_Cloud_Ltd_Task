import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './Components/side-navigation/side-navigation.component';
import { TopSectionComponent } from './Components/top-section/top-section.component';
import { BottomTblDataComponent } from './Components/bottom-tbl-data/bottom-tbl-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    TopSectionComponent,
    BottomTblDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

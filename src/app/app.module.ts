import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FeaturesComponent } from './features/features.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeContentComponent,
    FooterComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

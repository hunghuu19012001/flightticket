import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './homepage/toolbar/toolbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { BannerComponent } from './homepage/banner/banner.component';
import { MainComponent } from './homepage/main/main.component';
import {MatSelectModule} from '@angular/material/select';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContentBottomComponent } from './homepage/content-bottom/content-bottom.component';
import { SliderComponent } from './homepage/slider/slider.component';
import { IntroduceComponent } from './homepage/introduce/introduce.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './homepage/footer/footer.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BannerComponent,
    MainComponent,
    ContentBottomComponent,
    SliderComponent,
    IntroduceComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    SlickCarouselModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HomeComponent } from './home/home.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WhyComponent } from './why/why.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { WaterComponent } from './water/water.component';
import { FireComponent } from './fire/fire.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqsComponent,
    ContactComponent,
    SitemapComponent,
    PrivacyComponent,
    WhyComponent,
    InsuranceComponent,
    WaterComponent,
    FireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

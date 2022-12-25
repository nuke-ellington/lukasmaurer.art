import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxModule } from '@siemens/ix-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
      AppComponent,
      WorkComponent,
      AboutComponent,
      SocialComponent,
      ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IxModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

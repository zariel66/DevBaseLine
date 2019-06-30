import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TemplateModule } from './template/template.module';
import {ButtonsModule,BsDatepickerModule} from 'ngx-bootstrap';
import { LoginService } from './login/login.service';
import { CustomHttpClient} from './util/custom-http-client';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [LoginService,
    CustomHttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

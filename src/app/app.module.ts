import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from '../app/carousel/test/test.component';
import { UsernameComponent } from './twoComponent/username/username.component';
import { UsernameCopyComponent } from './twoComponent/username-copy/username-copy.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UsernameComponent,
    UsernameCopyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

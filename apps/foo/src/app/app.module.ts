import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MylibraryModule } from '@test-workspace/mylibrary';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MylibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

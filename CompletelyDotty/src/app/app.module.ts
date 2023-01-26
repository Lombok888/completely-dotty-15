import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { MainPaneComponent } from './main-pane/main-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPaneComponent
  ],
  imports: [
    BrowserModule,
    ShareButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

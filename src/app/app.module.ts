import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerTriggerDirective } from './color-picker/color-trigger.directive';
import { ColorDirective } from './color-picker/color.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ColorPickerTriggerDirective,
    ColorDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    A11yModule,
    BidiModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}

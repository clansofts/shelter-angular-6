import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@appCore/core.module';
import { BackendModule } from '@appBackend/backend.module';
import { FrontendModule } from '@appFrontend/frontend.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlErrorComponent } from './404/url-error.component';
import { SharedModule } from '@appShared/shared.module';
import { FiltersComponent } from '@appFrontend/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlErrorComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    BackendModule,
    FrontendModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [FiltersComponent],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

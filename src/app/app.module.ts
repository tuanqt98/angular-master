import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

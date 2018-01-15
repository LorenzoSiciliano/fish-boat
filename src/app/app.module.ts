import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FishesComponent } from './fishes/fishes.component';
import { FishService } from './fish.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FishesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FishService],
  bootstrap: [AppComponent]
})
export class AppModule { }

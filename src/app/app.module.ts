import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FishesComponent } from './fishes/fishes.component';
import { FishService } from './fish.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './/app-routing.module';
import { FishDetailComponent } from './fish-detail/fish-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FishesComponent,
    FishDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [FishService],
  bootstrap: [AppComponent]
})
export class AppModule { }

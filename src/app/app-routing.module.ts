import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FishesComponent } from './fishes/fishes.component';
import { FishDetailComponent }  from './fish-detail/fish-detail.component';

const routes = [
  { path: '', redirectTo: '/fishes', pathMatch: 'full' },
  { path: 'detail/:id', component: FishDetailComponent },
  { path: 'fishes', component: FishesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

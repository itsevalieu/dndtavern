import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulletinComponent } from './modules/pages/bulletin/bulletin.component';
import { BarkeepComponent } from './modules/pages/barkeep/barkeep.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BulletinComponent },
  { path: 'bar', component: BarkeepComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

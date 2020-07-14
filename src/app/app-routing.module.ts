import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulletinComponent } from './modules/pages/bulletin/bulletin.component';
import { BarComponent } from './modules/pages/bar/bar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BulletinComponent },
  { path: 'bar', component: BarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

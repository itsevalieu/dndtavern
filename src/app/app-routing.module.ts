import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulletinComponent } from './modules/pages/bulletin/bulletin.component';
import { BarComponent } from './modules/pages/bar/bar.component';
import { LoginComponent } from './modules/components/forms/login/login.component';
import { CreateItemComponent } from './modules/components/forms/create-item/create-item.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BulletinComponent },
  { path: 'bar', component: BarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-item', component: CreateItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

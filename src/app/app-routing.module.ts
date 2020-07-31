import { QrShowerComponent } from './components/qr-shower/qr-shower.component';
import { ImageShowerComponent } from './components/image-shower/image-shower.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'home/showimage/:id', component: ImageShowerComponent },
  { path: 'home/showimage/qr/:id', component: QrShowerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

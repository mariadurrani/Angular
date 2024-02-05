import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerViewComponent } from './owner-view/owner-view.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'blog/:id', component: BlogPageComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'owner', component: OwnerViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MarketComponent } from './pages/market/market.component';
import { PostAdsComponent } from './pages/post-ads/post-ads.component';
import { ViewComponent } from './pages/view/view.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'market',             component: MarketComponent },
    { path: 'post-ads',             component: PostAdsComponent },
    { path: 'view/:uid',             component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

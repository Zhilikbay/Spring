import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';
import { AlbumsPhotosComponent } from './albums-photos/albums-photos.component';

export const routes: Routes = [
    { path: 'home-component', component: HomeComponent },
    { path: 'about-component', component: AboutComponent },
    { path: 'albums-component', component: AlbumsComponent },
    { path: 'albums-component/:id', component: AlbumsDetailComponent },
    { path: 'albums-component/:id/photos', component: AlbumsPhotosComponent },
    { path: '', redirectTo: 'home-component', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }
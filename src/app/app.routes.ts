import { Routes } from '@angular/router';
import { MessengerComponent } from './messenger/messenger.component';

export const routes: Routes = [{
    path: "messenger",
    // component: MessengerComponent
    loadComponent: () => import('./messenger/messenger.component').then(c => c.MessengerComponent)
},{
    path: "",
    pathMatch: "full",
    loadComponent: () => import ('./home/home.component').then(c => c.HomeComponent)
},{
    path:"projet",
    loadComponent: () => import('./project/project.component').then(c => c.ProjectComponent)
}];

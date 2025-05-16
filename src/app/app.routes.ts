import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        loadComponent: ()=>{
            return import('./home/home.component').then((m)=>m.HomeComponent);
        },
    },
    {
        path:'about',
        loadComponent: ()=>{
            return import('./about/about.component').then((m)=>m.AboutComponent);
        }
    },
    {
        path:'contact',
        loadComponent: ()=>{
            return import('./contact/contact.component').then((m)=>m.ContactComponent);
        }
    },
    {
        path:'blog',
        loadComponent: ()=>{
            return import('./blog/blog.component').then((m)=>m.BlogComponent);
        }
    },
    
];

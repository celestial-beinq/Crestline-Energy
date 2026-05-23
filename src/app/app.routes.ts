import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Services } from './Pages/services/services';
import { Projects } from './Pages/projects/projects';
import { Contact } from './Pages/contact/contact';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'services', component: Services},
    {path: 'projects', component: Projects},
    {path: 'contact', component: Contact},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
];

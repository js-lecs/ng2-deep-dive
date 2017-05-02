import { UnsavedGuard } from './shared/guards/unsaved.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [LoginGuard],
        canDeactivate: [UnsavedGuard]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];


export const Routing = RouterModule.forRoot(APP_ROUTES);

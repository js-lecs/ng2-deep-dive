import { DataDrivenComponent } from './pages/forms/data-driven/data-driven.component';
import { TemplateDrivenComponent } from './pages/forms/template-driven/template-driven.component';
import { LoginGuard } from './shared/guards/login.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { TaskAddComponent } from './pages/task-add/task-add.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { Routes, RouterModule } from '@angular/router';


const PAGE_ROUTES: Routes = [
    {
        path: 'task-list',
        component: TaskListComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'task-add',
        component: TaskAddComponent
    },
    {
        path: 'template',
        component: TemplateDrivenComponent
    },
     {
        path: 'data',
        component: DataDrivenComponent
    }
];

const APP_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: PAGE_ROUTES
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];


export const Routing = RouterModule.forRoot(APP_ROUTES);

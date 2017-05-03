import { DoublePipe } from './shared/pipes/double.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { LoginGuard } from './shared/guards/login.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskAddComponent } from './pages/task-add/task-add.component';
import { Routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TemplateDrivenComponent } from './pages/forms/template-driven/template-driven.component';
import { DataDrivenComponent } from './pages/forms/data-driven/data-driven.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskAddComponent,
    LoginComponent,
    LayoutComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
     FilterPipe, DoublePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

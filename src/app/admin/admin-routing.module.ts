import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MovieManagementComponent } from './movie-management/movie-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMovieComponent } from './dashboard-movie/dashboard-movie.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      // /admin
      { path: '', component: DashboardComponent },
      // /admin/user
      { path: 'user', component: UserManagementComponent },
      // /admin/movie
      { path: 'movie', component: DashboardMovieComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

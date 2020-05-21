import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { MovieManagementComponent } from "./movie-management/movie-management.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { FormsModule } from "@angular/forms";
<<<<<<< HEAD
import { MyFilterPipe } from "./dashboard/my-filter.pipe";
import { DashboardMovieComponent } from "./dashboard-movie/dashboard-movie.component";
import { SearchDSPhimPipe } from "./dashboard-movie/search-dsphim.pipe";
=======
import { MyFilterPipe } from './dashboard/my-filter.pipe';
import { DashboardMovieComponent } from './dashboard-movie/dashboard-movie.component';


>>>>>>> 4864f36ed29054605df6d34f3ee640a3c2e3566b

@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    MovieManagementComponent,
    DashboardComponent,
    MyFilterPipe,
<<<<<<< HEAD
    SearchDSPhimPipe,
    DashboardMovieComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
  exports: [MyFilterPipe, SearchDSPhimPipe]
=======
    DashboardMovieComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule,],
  exports: [
    MyFilterPipe
  ]
>>>>>>> 4864f36ed29054605df6d34f3ee640a3c2e3566b
})
export class AdminModule { }

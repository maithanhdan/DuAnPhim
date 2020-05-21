import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { MovieManagementComponent } from "./movie-management/movie-management.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { FormsModule } from "@angular/forms";
import { MyFilterPipe } from './dashboard/my-filter.pipe';
import { SearchDSPhimPipe } from './dashboard/search-dsphim.pipe';



@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    MovieManagementComponent,
    DashboardComponent,
    MyFilterPipe,
    SearchDSPhimPipe
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule,],
  exports: [
    // ...
    MyFilterPipe,SearchDSPhimPipe
]
})
export class AdminModule {}

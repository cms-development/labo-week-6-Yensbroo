import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentListComponent } from "./student/student-list/student-list.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { InstructorListComponent } from "./instructor/instructor-list/instructor-list.component";
import { CourseListComponent } from "./course/course-list/course-list.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "students", component: StudentListComponent },
  { path: "instructors", component: InstructorListComponent },
  { path: "courses", component: CourseListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

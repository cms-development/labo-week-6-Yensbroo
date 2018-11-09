import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentListComponent } from "./student/student-list/student-list.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { InstructorListComponent } from "./instructor/instructor-list/instructor-list.component";
import { CourseListComponent } from "./course/course-list/course-list.component";
import { StudentDetailComponent } from "./student/student-detail/student-detail.component";
import { AddStudentComponent } from "./student/add-student/add-student.component";
import { LoginComponent } from "./authentication/login/login.component";
import { InstructorDetailComponent } from "./instructor/instructor-detail/instructor-detail.component";
import { AddInstructorComponent } from "./instructor/add-instructor/add-instructor.component";
import { CourseDetailComponent } from "./course/course-detail/course-detail.component";
import { AddCourseComponent } from "./course/add-course/add-course.component";
import { EditStudentComponent } from "./student/edit-student/edit-student.component";
import { EditCourseComponent } from "./course/edit-course/edit-course.component";
import { EditInstructorComponent } from "./instructor/edit-instructor/edit-instructor.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "students", component: StudentListComponent },
  { path: "student/:id", component: StudentDetailComponent },
  { path: "add/student", component: AddStudentComponent },
  { path: "edit/student/:id", component: EditStudentComponent },
  { path: "instructors", component: InstructorListComponent },
  { path: "instructor/:id", component: InstructorDetailComponent },
  { path: "add/instructor", component: AddInstructorComponent },
  { path: "edit/instructor/:id", component: EditInstructorComponent },
  { path: "courses", component: CourseListComponent },
  { path: "course/:id", component: CourseDetailComponent },
  { path: "add/course", component: AddCourseComponent },
  { path: "edit/course/:id", component: EditCourseComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

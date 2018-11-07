import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { EditStudentComponent } from "./edit-student/edit-student.component";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [StudentListComponent, StudentDetailComponent, AddStudentComponent, EditStudentComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule]
})
export class StudentModule {}

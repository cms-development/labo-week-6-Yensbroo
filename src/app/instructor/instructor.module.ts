import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InstructorListComponent } from "./instructor-list/instructor-list.component";
import { InstructorDetailComponent } from "./instructor-detail/instructor-detail.component";
import { AddInstructorComponent } from "./add-instructor/add-instructor.component";
import { EditInstructorComponent } from "./edit-instructor/edit-instructor.component";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [InstructorListComponent, InstructorDetailComponent, AddInstructorComponent, EditInstructorComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule]
})
export class InstructorModule {}

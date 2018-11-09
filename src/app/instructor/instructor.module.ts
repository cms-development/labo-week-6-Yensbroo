import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InstructorListComponent } from "./instructor-list/instructor-list.component";
import { InstructorDetailComponent } from "./instructor-detail/instructor-detail.component";
import { AddInstructorComponent } from "./add-instructor/add-instructor.component";
import { EditInstructorComponent } from "./edit-instructor/edit-instructor.component";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [InstructorListComponent, InstructorDetailComponent, AddInstructorComponent, EditInstructorComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, FormsModule, PipesModule]
})
export class InstructorModule {}

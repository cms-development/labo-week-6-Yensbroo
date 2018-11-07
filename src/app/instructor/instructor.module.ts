import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { EditInstructorComponent } from './edit-instructor/edit-instructor.component';

@NgModule({
  declarations: [CourseListComponent, InstructorListComponent, InstructorDetailComponent, AddInstructorComponent, EditInstructorComponent],
  imports: [
    CommonModule
  ]
})
export class InstructorModule { }

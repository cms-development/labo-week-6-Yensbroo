import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [CourseListComponent, CourseDetailComponent, AddCourseComponent, EditCourseComponent],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }

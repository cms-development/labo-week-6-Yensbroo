import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CourseModule } from "./course/course.module";
import { InstructorModule } from "./instructor/instructor.module";
import { StudentModule } from "./student/student.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CourseModule, InstructorModule, StudentModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

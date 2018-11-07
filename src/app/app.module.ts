import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CourseModule } from "./course/course.module";
import { InstructorModule } from "./instructor/instructor.module";
import { StudentModule } from "./student/student.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    InstructorModule,
    StudentModule,
    DashboardModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

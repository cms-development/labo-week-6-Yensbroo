import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { faTrash, faPenSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.scss"]
})
export class CourseListComponent implements OnInit {
  faTrash = faTrash;
  faPenSquare = faPenSquare;
  courses: any;
  authenticated = false;
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    if (localStorage.token) {
      this.authenticated = true;
    }
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().then(res => {
      this.courses = res.data.data;
    });
  }

  deleteCourse(id) {
    const filteredCourses = this.courses.filter(course => {
      return course.id !== id;
    });
    this.courses = filteredCourses;
    this.courseService.deleteCourse(id);
  }
}

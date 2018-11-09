import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.scss"]
})
export class CourseDetailComponent implements OnInit {
  id = this.route.snapshot.paramMap.get("id");
  course: any;
  currentInstructor: [];
  currentStudents: [];
  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getCourse();
  }

  getCourse() {
    this.courseService.getCourse(this.id).then(res => {
      this.course = res.data.data;
      const included = res.data.included;
      if (included !== undefined) {
        this.currentInstructor = this.filterIncludes("instructor--instructor", included);
        this.currentStudents = this.filterIncludes("student--student", included);
      }
    });
  }

  filterIncludes(type, arr) {
    if (type === "instructor--instructor") {
      const filteredInstructor = arr.find(item => {
        return item.type === type;
      });
      return filteredInstructor;
    } else if (type === "student--student") {
      const filteredStudents = arr.filter(item => {
        if (item !== undefined) {
          return item.type === type;
        } else {
          return [];
        }
      });

      return filteredStudents;
    }
  }

  deleteCourse() {
    this.courseService.deleteCourse(this.id).then(() => {
      this.router.navigate(["/courses"]);
    });
  }
}

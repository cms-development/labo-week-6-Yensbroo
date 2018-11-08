import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentService } from "src/app/services/student.service";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-edit-student",
  templateUrl: "./edit-student.component.html",
  styleUrls: ["./edit-student.component.scss"]
})
export class EditStudentComponent implements OnInit {
  student: any;
  courses: any;
  currentCourses: any;
  faTimes = faTimes;
  selectedCourse;
  id = this.route.snapshot.paramMap.get("id");
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.getStudent();
    this.getCourses();
  }

  getStudent() {
    this.studentService.getStudent(this.id).then(res => {
      this.student = res.data.data;
      this.currentCourses = res.data.included;
    });
  }

  getCourses() {
    this.courseService.getCourses().then(res => {
      this.courses = res.data.data;
    });
  }

  editStudent() {
    const data = {
      data: {
        type: "student--student",
        id: this.id,
        attributes: {
          name: `${this.student.attributes.field_first_name} ${this.student.attributes.name}`,
          field_first_name: this.student.attributes.field_first_name
        },
        relationships: {
          field_courses: {
            data: this.currentCourses
          }
        }
      }
    };
    this.studentService.editStudent(this.id, data).then(res => {
      this.router.navigate([`/student/${res.data.data.id}`]);
    });
  }

  addCourseToArray() {
    this.currentCourses.push(this.selectedCourse);
  }

  removeCourseFromArray(id) {
    const filteredCourses = this.courses.filter(course => {
      return course.id !== id;
    });

    this.currentCourses = filteredCourses;
  }
}

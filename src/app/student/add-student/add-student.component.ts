import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/services/student.service";
import { CourseService } from "src/app/services/course.service";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.scss"]
})
export class AddStudentComponent implements OnInit {
  firstName;
  lastName;
  faTimes = faTimes;
  courses: any;
  addedCourses: Array<any> = [];
  courseList: Array<any> = [];
  selectedCourse;
  constructor(private studentService: StudentService, private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.getCourses();
  }

  addStudent() {
    const data = {
      data: {
        type: "student--student",
        attributes: {
          name: `${this.firstName} ${this.lastName}`,
          field_first_name: this.firstName
        },
        relationships: {
          field_courses: {
            data: this.addedCourses
          }
        }
      }
    };
    this.studentService.addStudent(data).then(res => {
      this.router.navigate([`/student/${res.data.data.id}`]);
    });
  }

  getCourses() {
    this.courseService.getCourses().then(res => {
      this.courses = res.data.data;
    });
  }

  addCourseToArray() {
    const newCourse = {
      id: this.selectedCourse.uuid,
      name: this.selectedCourse.name
    };
    const addedCourse = {
      type: "course--course",
      id: this.selectedCourse.uuid
    };

    this.courseList.push(newCourse);
    this.addedCourses.push(addedCourse);
  }

  removeCourseFromArray(id) {
    const filteredCourseList = this.courseList.filter(course => {
      return course.id !== id;
    });
    const filteredAddedCourses = this.addedCourses.filter(course => {
      return course.id !== id;
    });
    this.addedCourses = filteredAddedCourses;
    this.courseList = filteredCourseList;
  }
}

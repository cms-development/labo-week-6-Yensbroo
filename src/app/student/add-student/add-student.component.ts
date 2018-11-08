import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/services/student.service";
import { CourseService } from "src/app/services/course.service";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.scss"]
})
export class AddStudentComponent implements OnInit {
  faTimes = faTimes;
  courses: any;
  addedCourses: Array<any> = [];
  courseList: Array<any> = [];
  selectedCourse;
  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCourses();
  }

  addStudent() {
    const data = {
      data: {
        type: "student--student",
        attributes: {
          name: "Jorgen Pluymers",
          field_first_name: "Jorgen"
        },
        relationships: {
          field_courses: {
            data: this.addedCourses
          }
        }
      }
    };
    this.studentService.addStudent(data).then(res => {
      console.log(res);
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

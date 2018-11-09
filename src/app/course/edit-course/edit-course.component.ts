import { Component, OnInit } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CourseService } from "src/app/services/course.service";
import { StudentService } from "src/app/services/student.service";
import { ActivatedRoute, Router } from "@angular/router";
import { InstructorService } from "src/app/services/instructor.service";
@Component({
  selector: "app-edit-course",
  templateUrl: "./edit-course.component.html",
  styleUrls: ["./edit-course.component.scss"]
})
export class EditCourseComponent implements OnInit {
  faTimes = faTimes;
  course: any;
  students: any;
  instructors: any;
  currentInstructor: any;
  currentStudents: any;
  id = this.route.snapshot.paramMap.get("id");
  selectedInstructor: any;
  selectedStudent;
  constructor(
    private courseService: CourseService,
    private studentService: StudentService,
    private instructorService: InstructorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCourse();
    this.getStudents();
    this.getInstructors();
  }

  getCourse() {
    this.courseService.getCourse(this.id).then(res => {
      console.log(res.data);
      this.course = res.data.data;
      this.currentInstructor = res.data.included.filter(data => {
        return data.type === "instructor--instructor";
      });
      this.selectedInstructor = this.currentInstructor[0].attributes.uuid;
      this.currentStudents = res.data.included.filter(data => {
        return data.type === "student--student";
      });
    });
  }

  editCourse() {
    const data = {
      data: {
        type: "course--course",
        id: this.id,
        attributes: {
          name: this.course.attributes.name,
          field_academic_institution: this.course.attributes.field_academic_institution
        },
        relationships: {
          field_instructor: {
            data: {
              type: "instructor--instructor",
              id: this.selectedInstructor
            }
          },
          field_students: {
            data: this.currentStudents
          }
        }
      }
    };
    this.courseService.editCourse(this.id, data).then(res => {
      this.router.navigate([`/course/${res.data.data.id}`]);
    });
  }

  getStudents() {
    this.studentService.getStudents().then(res => {
      this.students = res.data.data;
    });
  }

  getInstructors() {
    this.instructorService.getInstructors().then(res => {
      this.instructors = res.data.data;
    });
  }

  addStudentToArray() {
    this.currentStudents.push(this.selectedStudent);
  }

  removeStudentFromArray(id) {
    const filteredStudents = this.students.filter(student => {
      return student.id !== id;
    });
    this.currentStudents = filteredStudents;
  }
}

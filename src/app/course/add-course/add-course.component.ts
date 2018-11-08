import { Component, OnInit } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { InstructorService } from "src/app/services/instructor.service";
import { CourseService } from "src/app/services/course.service";
import { StudentService } from "src/app/services/student.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.scss"]
})
export class AddCourseComponent implements OnInit {
  faTimes = faTimes;
  institute;
  name;
  instructors: any;
  students: any;
  addedStudents: Array<any> = [];
  studentList: Array<any> = [];
  selectedStudent;
  selectedInstructor;
  constructor(
    private instructorService: InstructorService,
    private courseService: CourseService,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getInstructors();
    this.getStudents();
  }

  getInstructors() {
    this.instructorService.getInstructors().then(res => {
      this.instructors = res.data.data;
    });
  }

  getStudents() {
    this.studentService.getStudents().then(res => {
      this.students = res.data.data;
    });
  }

  addCourse() {
    const data = {
      data: {
        type: "course--course",
        attributes: {
          name: this.name,
          field_academic_institution: this.institute
        },
        relationships: {
          field_students: {
            data: this.addedStudents
          },
          field_instructor: {
            data: {
              type: "instructor--instructor",
              id: this.selectedInstructor.id
            }
          }
        }
      }
    };
    this.courseService.addCourse(data).then(res => {
      this.router.navigate([`/course/${res.data.data.id}`]);
    });
  }

  addStudentToArray() {
    const newStudent = {
      id: this.selectedStudent.uuid,
      name: this.selectedStudent.name
    };

    const addedStudent = {
      type: "student--student",
      id: this.selectedStudent.uuid
    };

    this.addedStudents.push(addedStudent);
    this.studentList.push(newStudent);
  }

  removeStudentFromArray(id) {
    const filteredStudentList = this.studentList.filter(student => {
      return student.id !== id;
    });

    const filteredAddedStudent = this.addedStudents.filter(student => {
      return student.id !== id;
    });

    this.studentList = filteredStudentList;
    this.addedStudents = filteredAddedStudent;
  }
}

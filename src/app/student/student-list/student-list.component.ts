import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/services/student.service";
import { faTrash, faPenSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  constructor(private studentService: StudentService) {}
  students: any;
  faTrash = faTrash;
  faPenSquare = faPenSquare;
  authenticated = false;
  ngOnInit() {
    if (localStorage.token) {
      this.authenticated = true;
    }
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().then(res => {
      this.students = res.data.data;
    });
  }

  deleteStudent(id) {
    const filteredStudents = this.students.filter(student => {
      return student.id !== id;
    });
    this.students = filteredStudents;
    this.studentService.deleteStudent(id);
  }
}

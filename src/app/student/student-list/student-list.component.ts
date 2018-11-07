import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/services/student.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  constructor(private studentService: StudentService) {}
  students: any;
  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().then(res => {
      this.students = res.data.data;
    });
  }

  deleteStudent(id) {
    this.studentService.deleteStudent(id);
  }
}

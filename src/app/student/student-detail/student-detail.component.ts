import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/services/student.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-student-detail",
  templateUrl: "./student-detail.component.html",
  styleUrls: ["./student-detail.component.scss"]
})
export class StudentDetailComponent implements OnInit {
  student: any;
  courseList: any;
  authenticated = false;
  id = this.route.snapshot.paramMap.get("id");
  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if (localStorage.token) {
      this.authenticated = true;
    }
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudent(this.id).then(res => {
      this.student = res.data.data;
      this.courseList = res.data.included;
    });
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.id).then(() => {
      this.router.navigate(["/students"]);
    });
  }
}

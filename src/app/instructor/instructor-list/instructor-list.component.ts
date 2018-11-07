import { Component, OnInit } from "@angular/core";
import { InstructorService } from "src/app/services/instructor.service";
import { faTrash, faPenSquare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-instructor-list",
  templateUrl: "./instructor-list.component.html",
  styleUrls: ["./instructor-list.component.scss"]
})
export class InstructorListComponent implements OnInit {
  instructors: any;
  faTrash = faTrash;
  faPenSquare = faPenSquare;
  constructor(private instructorService: InstructorService) {}

  ngOnInit() {
    this.getInstructors();
  }

  getInstructors() {
    this.instructorService.getInstructors().then(res => {
      this.instructors = res.data.data;
    });
  }
}

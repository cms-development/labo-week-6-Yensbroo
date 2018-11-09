import { Component, OnInit } from "@angular/core";
import { academicRank, academicTitle } from "../academics";
import { InstructorService } from "src/app/services/instructor.service";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-add-instructor",
  templateUrl: "./add-instructor.component.html",
  styleUrls: ["./add-instructor.component.scss"]
})
export class AddInstructorComponent implements OnInit {
  firstName;
  lastName;
  faTimes = faTimes;
  ranks = academicRank;
  titles = academicTitle;
  addedTitles: Array<any> = [];
  titleList: Array<any> = [];
  selectedRank;
  selectedTitle;
  constructor(private instructorService: InstructorService) {}

  ngOnInit() {}

  addInstructor() {
    const data = {
      data: {
        type: "instructor--instructor",
        attributes: {
          name: `${this.firstName} ${this.lastName}`,
          field_academic_rank: this.selectedRank,
          field_first_name: this.firstName,
          field_academic_title: this.addedTitles
        }
      }
    };
    this.instructorService.addInstructor(data).then();
  }
  addTitleToArray() {
    this.titleList.push(this.selectedTitle);
    this.addedTitles.push(this.selectedTitle.id);
    console.log(this.addedTitles);
  }

  removeTitleFromArray(id) {
    const filteredTitleList = this.titleList.filter(title => {
      return title.id !== id;
    });

    const filteredAddedTitles = this.addedTitles.filter(title => {
      return title !== id;
    });

    this.addedTitles = filteredAddedTitles;
    this.titleList = filteredTitleList;
  }
}

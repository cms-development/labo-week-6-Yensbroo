import { Component, OnInit } from "@angular/core";
import { InstructorService } from "src/app/services/instructor.service";
import { ActivatedRoute } from "@angular/router";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { academicTitle, academicRank } from "../academics";

@Component({
  selector: "app-edit-instructor",
  templateUrl: "./edit-instructor.component.html",
  styleUrls: ["./edit-instructor.component.scss"]
})
export class EditInstructorComponent implements OnInit {
  faTimes = faTimes;
  instructor: any;
  lastName;
  titles = academicTitle;
  currentTitles = [];
  currentTitlesId = [];
  ranks = academicRank;
  selectedTitle;
  id = this.route.snapshot.paramMap.get("id");
  constructor(private instructorService: InstructorService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getInstructor();
  }

  getInstructor() {
    this.instructorService.getInstructor(this.id).then(res => {
      this.instructor = res.data.data;
      const splitName = res.data.data.attributes.name.split(" ");
      this.lastName = splitName[1];
      this.currentTitlesId = res.data.data.attributes.field_academic_title;
      this.filterTitles(res.data.data.attributes.field_academic_title);
    });
  }

  editInstructor() {
    const data = {
      data: {
        type: "instructor--instructor",
        id: this.instructor.id,
        attributes: {
          name: `${this.instructor.attributes.field_first_name} ${this.lastName}`,
          field_academic_rank: this.instructor.attributes.field_academic_rank,
          field_first_name: this.instructor.attributes.field_first_name,
          field_academic_title: this.currentTitlesId
        }
      }
    };
    this.instructorService.editInstructor(this.id, data).then(res => {
      console.log(res.data);
    });
  }

  changeName(newName) {
    this.lastName = newName;
  }

  filterTitles(current) {
    const self = this;
    current.map(item => {
      self.titles.map(title => {
        if (item === title.id) {
          this.currentTitles.push({ id: title.id, name: title.name });
        }
      });
    });
  }

  addTitleToArray() {
    this.currentTitlesId.push(this.selectedTitle.id);
    this.currentTitles.push({ id: this.selectedTitle.id, name: this.selectedTitle.name });
  }

  removeTitleFromArray(id) {
    const filteredTitles = this.currentTitles.filter(title => {
      return title.id !== id;
    });

    this.currentTitles = filteredTitles;
  }
}

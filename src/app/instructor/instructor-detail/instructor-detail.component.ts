import { Component, OnInit } from "@angular/core";
import { InstructorService } from "src/app/services/instructor.service";
import { ActivatedRoute } from "@angular/router";
import { academicRank, academicTitle } from "../academics";

@Component({
  selector: "app-instructor-detail",
  templateUrl: "./instructor-detail.component.html",
  styleUrls: ["./instructor-detail.component.scss"]
})
export class InstructorDetailComponent implements OnInit {
  id = this.route.snapshot.paramMap.get("id");
  titles = academicTitle;
  ranks = academicRank;
  currentTitles: Array<any> = [];
  currentRank: any;
  instructor: any;
  constructor(private instructorService: InstructorService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getInstructor();
  }

  getInstructor() {
    this.instructorService.getInstructor(this.id).then(res => {
      this.instructor = res.data.data;
      const titles = res.data.data.attributes.field_academic_title;
      if (titles !== null) {
        this.filterTitles(titles);
      }
      this.getAcademicRank(res.data.data.attributes.field_academic_rank);
    });
  }

  getAcademicRank(id) {
    const filteredName = this.ranks.find(title => {
      return title.id === id;
    });

    this.currentRank = filteredName.name;
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
}

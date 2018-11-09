import { Injectable } from "@angular/core";
import axios from "axios";
import { AxiosInstance } from "axios";
import { env } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  apiURL = `${env.baseURL}${env.api}${env.endpoint.course}`;
  axiosClient: AxiosInstance;
  constructor() {
    this.axiosClient = axios.create();
  }

  getCourses() {
    return this.axiosClient.get(this.apiURL);
  }

  getCourse(id) {
    return this.axiosClient.get(`${this.apiURL}/${id}?include=field_instructor,field_students`);
  }

  addCourse(data) {
    return this.axiosClient.post(this.apiURL, data);
  }

  editCourse(id, data) {
    return this.axiosClient.patch(`${this.apiURL}/${id}`, data);
  }

  deleteCourse(id) {
    return this.axiosClient.delete(`${this.apiURL}/${id}`);
  }
}

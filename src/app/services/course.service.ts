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
    this.axiosClient.get(this.apiURL);
  }

  getCourse(id) {
    this.axiosClient.get(`${this.apiURL}/${id}`);
  }
}

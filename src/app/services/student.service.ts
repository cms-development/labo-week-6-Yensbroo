import { Injectable } from "@angular/core";
import axios from "axios";
import { AxiosInstance } from "axios";
import { Observable } from "rxjs";
import { env } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  apiURL = `${env.baseURL}${env.api}${env.endpoint.student}`;
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create();
  }

  getStudents() {
    return this.axiosClient.get(this.apiURL);
  }

  getStudent(id) {
    return this.axiosClient.get(`${this.apiURL}/${id}?include=field_courses`);
  }

  addStudent(data) {
    return this.axiosClient.post(this.apiURL, data);
  }

  editStudent(id, data) {
    return this.axiosClient.patch(`${this.apiURL}/${id}`, data);
  }

  deleteStudent(id) {
    return this.axiosClient.delete(`${this.apiURL}/${id}`);
  }
}

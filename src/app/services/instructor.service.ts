import { Injectable } from "@angular/core";
import axios from "axios";
import { AxiosInstance } from "axios";
import { env } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class InstructorService {
  apiURL = `${env.baseURL}${env.api}${env.endpoint.instructor}`;
  private axiosClient: AxiosInstance;
  constructor() {
    this.axiosClient = axios.create();
  }

  getInstructors() {
    return this.axiosClient.get(this.apiURL);
  }

  getInstructor(id) {
    return this.axiosClient.get(`${this.apiURL}/${id}`);
  }

  addInstructor(data) {
    return this.axiosClient.post(this.apiURL, data);
  }

  editInstructor(id, data) {
    return this.axiosClient.patch(`${this.apiURL}/${id}`, data);
  }

  deleteInstructor(id) {
    return this.axiosClient.delete(`${this.apiURL}/${id}`);
  }
}

import { Injectable } from "@angular/core";
import axios from "axios";
import { AxiosInstance } from "axios";
import { env } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  apiURL = `${env.baseURL}${env.endpoint.auth}`;
  private axiosClient: AxiosInstance;
  constructor() {
    this.axiosClient = axios.create();
  }

  login(data) {
    return this.axiosClient.post(this.apiURL, data);
  }
}

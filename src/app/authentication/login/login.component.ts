import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { LocalstorageService } from "src/app/services/localstorage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(
    private userService: UserService,
    private router: Router,
    private localstorageService: LocalstorageService
  ) {}

  ngOnInit() {
    if (localStorage.token) {
      this.router.navigate(["/"]);
    }
  }

  submit() {
    let formData = new FormData();
    const data = {
      username: this.username,
      password: this.password,
      client_id: "6739242b-df57-44fd-a8e7-0ca08f244648",
      client_secret: "secret",
      grant_type: "password"
    };
    for (let key in data) {
      formData.append(key, data[key]);
    }
    this.userService.login(formData).then(res => {
      this.localstorageService.setItem("token", res.data.access_token);
      this.router.navigate(["/"]);
    });
  }
}

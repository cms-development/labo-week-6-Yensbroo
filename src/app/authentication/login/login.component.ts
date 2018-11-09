import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

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
      console.log(res);
      localStorage.setItem("token", "Bearer " + res.data.access_token);
      this.router.navigate(["/"]);
    });
  }
}

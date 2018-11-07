import { Component } from "@angular/core";
import setAuthToken from "src/utils/set-token";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  authenticated: Boolean = false;
  constructor() {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      this.authenticated = true;
    }
  }
  title = "yensbroo";
}

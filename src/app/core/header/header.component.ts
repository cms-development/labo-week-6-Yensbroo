import { Component, OnInit, Input, SimpleChanges, SimpleChange } from "@angular/core";
import { LocalstorageService } from "src/app/services/localstorage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() authenticated: Boolean;
  private _authenticated = false;
  constructor(private localstorageService: LocalstorageService) {
    this.localstorageService.watchStorage().subscribe(data => {
      this._authenticated = data;
    });
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    const authenticated: SimpleChange = changes.authenticated;
    this._authenticated = authenticated.currentValue;
  }

  logout() {
    this.localstorageService.removeItem("token");
  }
}

import { IUser } from "./shared/models/user";
import { Component, OnInit } from "@angular/core";
import { FakeDataService } from "./services/fake-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // users: IUser[];

  constructor(private service: FakeDataService) {}
  ngOnInit() {
    // this.service.getData().subscribe(res => {
    //   this.users = res;
    // });
  }
}

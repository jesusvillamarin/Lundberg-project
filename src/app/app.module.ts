import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FakeDataService } from "./services/fake-data.service";
import { MatToolbarModule } from "@angular/material/toolbar";


import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FakeDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

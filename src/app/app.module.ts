import { environment } from './../environments/environment.prod';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";

//    Ngrx Modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { FakeDataService } from "./services/fake-data.service";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers, metaReducers } from "./shared/store";
import { effects } from './shared/store/effects/index';

const CONF_STORE = [
  StoreModule.forRoot(reducers, {metaReducers}),
  EffectsModule.forRoot(effects),
  StoreDevtoolsModule.instrument(
    {
      name: 'Users API FAKE',
      logOnly: environment.production,
      maxAge: 10
    }),
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    ...CONF_STORE
  ],
  providers: [FakeDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

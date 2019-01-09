## Lundberg Project
You can use the [editor on GitHub](https://github.com/jesusvillamarin/Lundberg-project/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

### Uso de las siguientes librerias 
1. Angular Material
2. Angular Flex Layout
3. ngrx/store & ngrx/effects

### Install Dependencies
1. npm install --save @angular/material @angular/cdk
2. npm install --save @angular/animations
3. npm install @angular/flex-layout
4. npm install @ngrx/store
5. npm install @ngrx/effects
6. npm install @ngrx/router-store
7. npm install @ngrx/store-devtools 
8. npm install ngrx-store-freeze

### Add @ngrx to app.module.ts
```
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
.
.
.
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    .
    .
    .
    StoreModule,
    EffectsModule,
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    })
  ],

```



#### Modulo routing
> ng generate module app-routing --flat --module=app


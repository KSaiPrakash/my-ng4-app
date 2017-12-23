import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {InterceptorModule} from './interceptor.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'user', children:
      [
        { path: '', pathMatch: 'full', redirectTo: 'list' },
        {
          path: 'list', component: UserListComponent, children: [
            { path: 'detail/:name', component: UserComponent }
          ]
        },

      ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    OuterComponent,
    InnerComponent,
    HomeComponent,
    AboutComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

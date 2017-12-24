import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my first app';
  name: string;
  age: number;
  found: boolean;


public user: UserModel;


  /* standing data goes here*/
public genders = [
  { value: 'F', display: 'Female' },
  { value: 'M', display: 'Male' }
];
public roles = [
  { value: 'admin', display: 'Administrator' },
  { value: 'guest', display: 'Guest' },
  { value: 'custom', display: 'Custom' }
];

public topics = [
  { value: 'game', display: 'Gaming' },
  { value: 'tech', display: 'Technology' },
  { value: 'life', display: 'Lifestyle' },
];
public toggles = [
  { value: 'toggled', display: 'Toggled' },
  { value: 'untoggled', display: 'UnToggled' },
];
/* end standing data */

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    // initialize user model here
    this.user = {
      name: '',
      gender: this.genders[0].value, // default to Female
      role: null,
      isActive: false,
      toggle: this.toggles[1].value, // default to untoggled
      topics: [this.topics[1].value] // default to Technology
     };
  }

  onNameKeyUP($event) {
    this.name = $event.target.value;
    this.found = false;
  }
  getProfile () {
    this.http.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data: any[]) => {
        if (data.length) {
          this.age = data[0].age;
          this.found = true;
        }
      }
    );
  }
  postProfile () {
    this.http.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`, {
      name: 'mark',
      age: 41
    })
    .subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  onSubmit(args) {
    console.log(args);
  }

  updateProfile(bodystring) {

    bodystring.role = bodystring.role ? (bodystring.role) : 'Admin'; // setting default to admin if null
    bodystring.age = bodystring.age ? (bodystring.age) : 31; // setting default to 31 if undefined

    console.log('bodystring  ' , bodystring);
    this.http.put(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`, bodystring)
    .subscribe(res => {
      console.log(res);
    });
  }
}

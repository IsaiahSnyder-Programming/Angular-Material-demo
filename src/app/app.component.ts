import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = true;

  dummyList = [];
  listIndex = 1;
  listObjects = [
    { id: 1, name: 'thing 1'},
    { id: 2, name: 'thing 2'},
    { id: 3, name: 'thing 3'}
  ];

  colors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Green" },
    { id: 3, name: "Blue" }
  ];

  // drawList() {
  //   // console.log("listDraw working");

  //   for(let i = 0; i < this.listObjects.length; i++) {
  //     let item = this.listObjects[i];
  //     setTimeout(() => {
  //       //@ts-ignore
  //       this.dummyList.push(item);
  //     }, 500);
  //   }
  // }

  //@ts-ignore
  onChange($event) {
    console.log($event);
  }
}

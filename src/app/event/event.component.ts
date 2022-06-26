import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  name = 'Peter';

  updateName() {
    this.name = 'John';
  }


  constructor() { }

  ngOnInit(): void {

  }

}

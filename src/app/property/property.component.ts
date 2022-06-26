import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

 animal = {
        name: 'Lion',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_-D6nY5dtP3pcv9uSy16SYcLoumxt198rhUDBXFuXQ&s',
      }
      
  constructor() { }

  ngOnInit(): void {
  }

}

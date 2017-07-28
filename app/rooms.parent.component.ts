import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'room-parent',
  template: `
    <p>ROOM.</p>
    {{results | json}}
    <br/>
    <ul>
      <li *ngFor="let model of results">
        Room Name : {{model.RoomName}}
      </li>
    </ul>
    `
})

export class RoomParentComponent implements OnInit {
   results;
 
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://joshduxbury.co.uk/Projects/mtg/services/rooms.php').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
    });
  }
}

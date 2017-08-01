import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Room }    from './Room';

@Component({
  selector: 'create-room',
  template: `
        {{diagnostic}}
        <button (click)="filter.hidden = !filter.hidden">Create Room</button>
        <div #filter>
        <div class="container">
        <h1>Room Form</h1>
            <form (ngSubmit)="onSubmit()" #createRoomForm="ngForm">
            <div class="form-group">
                <label for="RoomName">Room Name</label>
                <input type="text" class="form-control" id="RoomName" 
                       required
                       [(ngModel)]='model.RoomName' name="RoomName">
            </div>
        
            <div class="form-group">
                <label for="Username">Username</label>
                <input type="text" class="form-control" id="Username">
            </div>
        
            <button type="submit" class="btn btn-success">Submit</button>
        
            </form>
        </div>
        </div>
    `
})

export class CreateRoomComponent{
  constructor(private http: HttpClient) {}

  model = new Room(null,'RoomName');

  submitted = false;

  onSubmit() {
    const url = "http://joshduxbury.co.uk/Projects/mtg/services/addrooms.php";
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('roomname', this.model.RoomName);
    var body = urlSearchParams.toString();
      this.http.post(url, body).subscribe(    
      data => {alert(data)},
      err => {
        alert('Something went wrong!');
      });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}



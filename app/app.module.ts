import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoomParentComponent } from './rooms.parent.component';
import { CreateRoomComponent } from './createroom.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomParentComponent,
    CreateRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

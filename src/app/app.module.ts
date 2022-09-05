import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import {FormsModule} from "@angular/forms";
import { RoomlistComponent } from './roomlist/roomlist.component';
import { RoomaddComponent } from './roomadd/roomadd.component';
import { RoomgrouplistComponent } from './roomgrouplist/roomgrouplist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    RoomlistComponent,
    RoomaddComponent,
    RoomgrouplistComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

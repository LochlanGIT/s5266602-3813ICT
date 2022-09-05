import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {RoomaddComponent} from "./roomadd/roomadd.component";
import {RoomlistComponent} from "./roomlist/roomlist.component";
import {RoomgrouplistComponent} from "./roomgrouplist/roomgrouplist.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'roomlist/:groupname/:username', component: RoomlistComponent },
  { path: 'roomadd', component: RoomaddComponent },
  { path: 'roomgrouplist/:username', component: RoomgrouplistComponent},
  { path: 'chat/', component: ChatComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {RoomaddComponent} from "./roomadd/roomadd.component";
import {RoomlistComponent} from "./roomlist/roomlist.component";
import {RoomgrouplistComponent} from "./roomgrouplist/roomgrouplist.component";
import {KnownusersComponent} from "./knownusers/knownusers.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'roomgrouplist/:groupname/roomlist/:username', component: RoomlistComponent },
  { path: 'roomadd', component: RoomaddComponent },
  { path: 'roomgrouplist/:username', component: RoomgrouplistComponent},
  { path: 'roomgrouplist/:groupname/roomlist/:channelname/chat/:username', component: ChatComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'roomgrouplist/:username/knownusers', component: KnownusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

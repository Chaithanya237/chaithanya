import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
 // selector:'.app-servers',
selector: 'app-servers', 
 // template:`
  //<app-server></app-server>
  //<app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewserver=false;
  serverCreationStatus='No server was created!';
  serverName='Testserver';
  ServerCreated=false;
  servers = ['testserver', 'testserver 2'];

  constructor(){
  setTimeout(() =>{
    this.allowNewserver=true;
  }, 2000);
}
  ngOnInit(){
  }
onCreateServer(){
  this.ServerCreated=true;
  this.servers.push(this.serverName);
  this.serverCreationStatus='server was created Name is ' + this.serverName;

}
onUpdateServerName(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;

  }
}

  
    
  



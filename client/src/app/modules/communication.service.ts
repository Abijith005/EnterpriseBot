import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private _socket: Socket;

  constructor() {
    this._socket = io(environments.baseUrl);
  }

  online(userId: string) {
    console.log('joined');
    this._socket.emit('join', userId);
  }

  addPlayer(teamId: string,name:string,field:string) {
    console.log('player adding',name);
    this._socket.emit('updateData', {teamId,name,field});
  }

  changeCoach(teamId:string,name:string,field:string) {
    console.log('updateData',name);
    this._socket.emit('updateData',{teamId,name,field});
  }

  changeCaptain(teamId:string,name:string,field:string) {
    console.log('updateData');
    this._socket.emit('updateData',{teamId,name,field});
  }

  offline() {
    console.log('offline');
    this._socket.emit('offline');
  }

  receiveNotification(): Observable<any> {
    return new Observable<{ message: string }>((observer) => {
      this._socket.on('dataUpdated', (data) => {
        observer.next(data);
      });

      return () => {
      };
    });
  }

 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IgenreralResponse, IteamData } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _http: HttpClient) {}

  addTeam(data: IteamData) {
    return this._http.post<IgenreralResponse>(
      '/v1/service/admin/addTeam',
      data
    );
  }

  getTeams() {
    return this._http.get<{ teams: IteamData[] & IgenreralResponse }>(
      '/v1/service/admin/getTeams'
    );
  }

  addPlayers(name: string, id: string) {
    return this._http.patch<IgenreralResponse>(
      `/v1/service/admin/addPlayer/${id}`,
      name
    );
  }

  changeCaptain(name:string,id:string){
    return this._http.patch<IgenreralResponse>(`/v1/service/admin/changeCaptain/${id}`,
    name)
  }

  changeCoach(name:string,id:string){
    return this._http.patch<IgenreralResponse>(`/v1/service/admin/changeCoach/${id}`,
    name)
  }
}

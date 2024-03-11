import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IgenreralResponse,
  IteamData,
  IteamSubscriptionData,
} from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  getTeams() {
    return this._http.get<{ teams: IteamData[] & IgenreralResponse }>(
      `/v1/service/user/getTeams`
    );
  }

  subscribeTeam(data: IteamSubscriptionData, id: string) {
    return this._http.post<IgenreralResponse>(`/v1/service/user/subscribeTeam`, {
      data,
      teamId: id,
    });
  }
}

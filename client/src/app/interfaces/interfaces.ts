export interface IuserLogin {
  email: string;
  password: string;
  role: string;
}

export interface IgenreralResponse {
  success: boolean;
  message: string;
}

export interface IuserRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface IteamData {
  _id?:string
  name: string;
  captain: string;
  coach: string;
  players?: string[];
  subscribed?:boolean
}


export interface IteamSubscriptionData{
  captain:boolean,
  coach:boolean,
  players:boolean
}

export interface IteamDataUpdate {
  teamId: string;
  field: string;
  name: string;
  message:string
}
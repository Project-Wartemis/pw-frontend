import { Lobby } from './base';

export interface Message {
  type: string;
}

export interface ActionMessage extends Message {
  action: object;
}

export interface ErrorMessage extends Message {
  message: string;
}

export interface HistoryMessage extends Message {
  messages: Array<StateMessage>;
}

export interface InviteMessage extends Message {
  client: number;
  room: number;
  name: string;
}

export interface LobbyMessage extends Message {
  lobby: Lobby;
}

export interface RegisterMessage extends Message {
  clientType: string;
  name: string;
}

export interface RoomMessage extends Message {
  name: string;
  engine: number;
}

export interface StateMessage extends Message {
  turn: number;
  players: Array<number>;
  state: object;
}
export enum Role {
  Civilian = 'Civilian',
  Witness = 'Witness',
  Bodyguard = 'Bodyguard',
  Doctor = 'Doctor',
  Sheriff = 'Sheriff',
  Hooker = 'Hooker',
  Mafia = 'Mafia',
  Godfather = 'Godfather',
  Maniac = 'Maniac',
  Jester = 'Jester',
}


export type Player = {
  name: string;
  role: Role | null;
  target: string | null;
};

export type GameSettings = {
  // Add other options here as you define them
};


export type Game = {
  name: string;
  players: Player[];
  settings: GameSettings;
};

export type RoundResult = {
  deadPlayerIds: string[];
  busyPlayerIds: string[];
  messages: string[];
};
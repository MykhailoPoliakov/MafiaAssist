import type { Game, Player, RoundResult } from './types';

// adds a player (name is unuque)
export function addPlayer(game: Game, name: string): Game {
  const playerName = name.trim();
  if (!playerName) return game;
  if (game.players.some(player => player.name.toLowerCase() === playerName.toLowerCase())) {
    return game;
  }

  const player: Player = {
    name: playerName,
    role: null,
    target: null,
  };

  return {
    ...game,
    players: [...game.players, player],
  };
}



// deletes the player and cleans all links to it in targets
export function delPlayer(game: Game, name: string): Game {
  const playerName = name.trim().toLowerCase();
  if (!playerName) return game;

  return {
    ...game,
    players: game.players
      .filter(player => player.name.toLowerCase() !== playerName)
      .map(player => player.target?.toLowerCase() === playerName
        ? { ...player, targetId: null }
        : player),
  };
}



export function getResult(game: Game) {
    
}

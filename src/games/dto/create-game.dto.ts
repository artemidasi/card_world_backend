import { GameMode } from '../schema/game.schema';

export class CreateGameDto {
  readonly name: string;
  readonly mode: GameMode[];
}

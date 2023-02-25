import { GameMode } from '../schema/game.schema';

export class UpdateGameDto {
  readonly name: string;
  readonly mode: GameMode[];
}

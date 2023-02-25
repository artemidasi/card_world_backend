import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GameDocument = HydratedDocument<Game>;

export type GameMode = 'rating' | 'regular' | 'draft' | 'sealed';

@Schema()
export class Game {
  @Prop()
  name: string;

  @Prop()
  modes: GameMode[];
}

export const GameSchema = SchemaFactory.createForClass(Game);

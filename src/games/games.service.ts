import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from './schema/game.schema';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class GamesService {
  constructor(@InjectModel(Game.name) private gameModel: Model<GameDocument>) {}

  async findAll(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }

  async create(productDto: CreateGameDto): Promise<Game> {
    const newProduct = new this.gameModel(productDto);

    return newProduct.save();
  }
}

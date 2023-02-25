import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://artemidas:M7LmngbpaCIiJylA@cluster0.ozw7o.mongodb.net?retryWrites=true&w=majority',
      {
        dbName: 'MainDatabase',
      },
    ),
    GamesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

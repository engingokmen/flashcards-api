import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { CardsModule } from './cards/cards.module';
import { Card } from './cards/card.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const DB_NAME = config.get<string>('DB_NAME');
        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: 5432,
          username: DB_NAME,
          password: config.get<string>('P_PASS'),
          database: DB_NAME,
          entities: [User, Card],
          synchronize: true,
        };
      },
    }),
    UsersModule,
    CardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

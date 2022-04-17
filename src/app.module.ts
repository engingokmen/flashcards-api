import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { SetsModule } from './sets/sets.module';
import { Set } from './sets/set.entity';
import { TermsModule } from './terms/terms.module';
import { Term } from './terms/term.entity';
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
          password: config.get<string>('POSTGRES_PASSWORD'),
          database: DB_NAME,
          entities: [User, Set, Term],
          synchronize: true,
        };
      },
    }),
    UsersModule,
    SetsModule,
    TermsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

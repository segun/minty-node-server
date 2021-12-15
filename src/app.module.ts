import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AuthGuard } from './guards/roles.guard';
import { Sample } from './models/sample.model.';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    TypeOrmModule.forFeature([
      Sample
      // put all models that should be managed by TypeORM here
    ]),
  ],
  controllers: [], // controllers
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },    
  ], // services
})
export class AppModule {}

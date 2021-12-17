import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { BannersController } from './controllers/banners.controllers';
import { AuthGuard } from './guards/roles.guard';
import { Banners } from './models/banners.model';
import { PartnersModule } from './partners/partners.module';
import { BannersService } from './services/banners.service';

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
      Banners
      // put all models that should be managed by TypeORM here
    ]),
    PartnersModule
  ],
  controllers: [BannersController], // controllers
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    BannersService,
  ], // services
})
export class AppModule {}

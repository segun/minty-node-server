import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nfts } from './nft.entity';
import { PartnerService } from './partner.service';
import { PartnersController } from './partners.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Nfts
    ]),
  ],
  controllers: [PartnersController],
  providers: [PartnerService]
})
export class PartnersModule {}

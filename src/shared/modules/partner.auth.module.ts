import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PartnerGuard } from './../../guards/partner.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [PartnerGuard],
})
export class PartnerAuthModule {}
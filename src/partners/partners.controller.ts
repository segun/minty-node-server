import { Controller, Post, ValidationPipe, Body, Patch, UploadedFile, UseInterceptors, Logger, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PartnerService } from 'src/partners/partner.service';
import { ResponseUtils, Response } from 'src/utils/response.utlils';
import { GetBannedNFTDTO } from './dtos';

@ApiTags('partners')
@Controller('partners')
export class PartnersController {
    
    constructor(private partnerService: PartnerService) {
        
    }

    @Post('/check_banned_status')
    async getNFT(@Body(ValidationPipe) getBannedNFTDto: GetBannedNFTDTO): Promise<Response> {
        return ResponseUtils.getSuccessResponse(
            await this.partnerService.getNftBannedStatus(getBannedNFTDto)
        );
    }
}

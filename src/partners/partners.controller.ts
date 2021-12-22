import { Controller, Post, ValidationPipe, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { PartnerService } from 'src/partners/partner.service';
import { ResponseUtils, Response } from 'src/utils/response.utlils';
import { GetBannedNFTDTO } from './dtos';

@ApiTags('partners')
@Controller('partners')
@UseGuards(AuthGuard('api-key'))
export class PartnersController {
    
    constructor(private partnerService: PartnerService) {
        
    }
    
    @Post('/check_nft_banned_status')
    async getNFT(@Body(ValidationPipe) getBannedNFTDto: GetBannedNFTDTO): Promise<Response> {
        return ResponseUtils.getSuccessResponse(
            await this.partnerService.getNftBannedStatus(getBannedNFTDto)
        );
    }

    @Post('/get_nft_details')
    async getNftDetails(@Body(ValidationPipe) getBannedNFTDto: GetBannedNFTDTO): Promise<Response> {
        return ResponseUtils.getSuccessResponse(
            await this.partnerService.getNftDetails(getBannedNFTDto)
        );
    }
}
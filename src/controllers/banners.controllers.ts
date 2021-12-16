import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BannersService } from "src/services/banners.service";
import { Response, ResponseUtils } from "src/utils/response.utlils";

@ApiTags('banners')
@Controller("banners")
export class BannersController {
    constructor(private bannersService: BannersService) {
    }

    @Get()
    async getBanners(): Promise<Response> { 
        return ResponseUtils.getSuccessResponse(
            await this.bannersService.getBanners()
        );
    }
}
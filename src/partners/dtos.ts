import { IsInt, IsString, } from "class-validator";

export class GetBannedNFTDTO {
    @IsString()
    collection_address: string;

    @IsInt()
    token_id: number;
}
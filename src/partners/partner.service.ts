import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetBannedNFTDTO } from 'src/partners/dtos';
import { Nfts } from 'src/partners/nft.entity';
import { NftRepository } from './nft.repository';

@Injectable()
export class PartnerService {

    constructor(@InjectRepository(Nfts) private nftRepository: NftRepository) {
    }

    async getNftBannedStatus(getBannedNFTDto: GetBannedNFTDTO): Promise<Nfts> {
        return new Promise(async (resolve, reject) => {
            try 
            {
                const nft =  await this.nftRepository.findOne({where: { collection_address: getBannedNFTDto.collection_address, token_id: getBannedNFTDto.token_id }});
                resolve(nft);
            } catch (error) {
                reject(error);
            }
        });
    }
}
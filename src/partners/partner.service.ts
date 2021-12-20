import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetBannedNFTDTO } from 'src/partners/dtos';
import { Nfts } from 'src/partners/nft.entity';
import { createQueryBuilder, getRepository } from 'typeorm';
import { NftRepository } from './nft.repository';

@Injectable()
export class PartnerService {

    constructor(@InjectRepository(Nfts) private nftRepository: NftRepository) {
    }

    async getNftBannedStatus(getBannedNFTDto: GetBannedNFTDTO): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try 
            {
                const nftBanned =  await getRepository(Nfts).createQueryBuilder('Nfts').select('Nfts.banned').where("collection_address = :collection_address AND token_id = :token_id", { collection_address: getBannedNFTDto.collection_address, token_id: getBannedNFTDto.token_id}).getOne();
                resolve(nftBanned);
            } catch (error) {
                reject(error);
            }
        });
    }

    async getNftDetails(getBannedNFTDto: GetBannedNFTDTO): Promise<Nfts> {
        return new Promise(async (resolve, reject) => {
            try 
            {
                const nft =  await this.nftRepository.findOne({where: { collection_address: getBannedNFTDto.collection_address, token_id: getBannedNFTDto.token_id }});
                delete nft.id;
                delete nft.visits;
                resolve(nft);
            } catch (error) {
                reject(error);
            }
        });
    }
}
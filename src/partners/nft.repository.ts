import { EntityRepository, Repository } from "typeorm";
import { Nfts } from "./nft.entity";

@EntityRepository(Nfts)
export class NftRepository extends Repository<Nfts>{

}
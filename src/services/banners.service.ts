import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banners } from 'src/models/banners.model';
import { Repository } from 'typeorm';

@Injectable()
export class BannersService {
  private readonly logger = new Logger(BannersService.name);

  @InjectRepository(Banners)
  bannersRepository: Repository<Banners>;

  constructor() {}

  async getBanners(): Promise<Banners[]> {
    return new Promise(async (resolve, reject) => {
      try {
          const banners = this.bannersRepository.createQueryBuilder("banners").getMany();
          resolve(banners);
      } catch (error) {
          reject(error);
      }
    });
  }
}

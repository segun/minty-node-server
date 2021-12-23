import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Nfts extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    campaign_type: string;
    @Column()
    categories: string;
    @Column()
    nft_type: string;
    @Column()
    price: string;
    @Column()
    collection_address: string;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    image: string;
    @Column()
    thumbnail_url: string;
    @Column()
    external_url: string;
    @Column()
    owner_address: string;
    @Column()
    creator_address: string;
    @Column()
    token_id: number;
    @Column()
    current_bidder: string;
    @Column()
    content_type: string;
    @Column()
    end_date_offset: string;
    @Column()
    auction_end_date: string;
    @Column()
    date_created: string;
    @Column()
    update_date: string;
    @Column()
    banned: boolean;
    @Column()
    published: boolean;
    @Column()
    visits: number;
    @Column()
    list_transaction_hash: string;
    @Column()
    campaign_settings_id: string;
    @Column()
    display_order: string;
    @Column()
    pending: boolean;
    @Column()
    bid_buy_tx_id: string;
    @Column()
    claim_tx_id: string;
    @Column()
    sell_auction_tx_id: string;
    @Column()
    sell_fixed_tx_id: string;
    @Column()
    card_image: string;
    @Column()
    last_transaction_hash: string;
    @Column()
    burn_tx_id: string;
    @Column()
    numbers_asset_id: string;
}


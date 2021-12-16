import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("banners")
export class Banners {  
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name: "collection_address"})
    collectionAddress: string;
    @Column()
    name: string;
    @Column({default: false})
    display: boolean;
    @Column({name: "image_url"})
    imageUrl: string;
    @Column({name: "mobile_image_url"})
    mobileImageUrl: string;
    @Column({name: "date_created"})
    dateCreated: Date;
}
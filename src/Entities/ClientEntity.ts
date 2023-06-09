/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"client_data"})
export class Client_Details {
  @PrimaryGeneratedColumn()
  FCS002_APPLICATION_CLIENT_ID: number;
    
  @Column()
  FCS001_EMAIL_TEMPLATE_ID: string;

  @Column()
  FCS001_MAIL_TEMPLATE_UUID: string;

  @Column()
  FCS001_MAIL_TEMPLATE_BODY: string;

  @Column()
  FCS003_EMAIL_PROVIDER_NAME: string;

  @Column()
  FCS001_CREATE_S: string;

  @Column()
  FCS001_LAST_UPDT_S: string;

  @Column()
  FCS001_CREATE_USER_C: string;

  @Column()
  FCS001_LAST_UPDT_USER: string;
}

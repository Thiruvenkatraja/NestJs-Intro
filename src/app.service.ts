/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./Users/CreateUser.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Client_Details } from "./Entities/ClientEntity";
import { Repository } from "typeorm";
import { clientDataDto } from "./Users/ClientData.dto";
import { User } from "./Entities/userEntity.type";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Client_Details)
    private ClientRepository: Repository<Client_Details>
  ) {}
  fakeUsers = [
    { username: "venkat", age: 24, email: "venkat@gmail.com" },
    { username: "Raja", age: 24, email: "raja@gmail.com" },
    { username: "surya", age: 24, email: "surya@gmail.com" },
    { username: "muthu", age: 24, email: "muthu@gmail.com" },
    { username: "bharath", age: 24, email: "bharath@gmail.com" },
  ];
  fetchClientData() {
    return this.ClientRepository.find();
  }
  fetchClientDataById(id: number) {
    return this.ClientRepository.findOneById(id);
  }
  createClientdata(clientDatas: clientDataDto) {
    const client_Datas = this.ClientRepository.create({
      ...clientDatas,
    });
    
    if (!client_Datas)
      throw new HttpException("Data Missing", HttpStatus.BAD_REQUEST);
    return this.ClientRepository.save(client_Datas);
  }
  fetchUsers() {
    return this.fakeUsers;
  }
  createUsers(userData: CreateUserDto) {
    this.fakeUsers.push(userData);
    return this.fakeUsers;
  }
  fetchUserById(id: number) {
    return {
      id: id,
      username: "bharath",
      age: 24,
      email: "bharath@gmail.com",
    };
  }
}

import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { Response, Request } from "express";
import { CreateUserDto } from "./Users/CreateUser.dto";
import { clientDataDto } from "./Users/ClientData.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers() {
    return this.appService.fetchUsers();
  }

  @Post("register")
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserData: CreateUserDto) {
    console.log(createUserData);
    this.appService.createUsers(createUserData);
    if (createUserData) {
      return createUserData;
    }
  }

  @Post("create")
  createUsers(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    res.send("created");
  }

  @Get("user/:id")
  getUserId(@Param("id", ParseIntPipe) id: number) {
    const user = this.appService.fetchUserById(id);
    if (!user)
      throw new HttpException("user not found", HttpStatus.BAD_REQUEST);
    return user;
  }

  @Post("/client")
  async createClient(
    @Body() createClientData: clientDataDto,
    @Res() res: Response
  ) {
    const client = this.appService.createClientdata(createClientData);
    if (!client) throw new HttpException("Data Error", HttpStatus.BAD_REQUEST);
    return res.send("success");
  }

  @Get("/getclient")
  async getClient() {
    const client = await this.appService.fetchClientData();
    return client;
  }

  @Get("getclient/:id")
  async getClientbyId(@Param("id") id: number) {
    const client = await this.appService.fetchClientDataById(id);
    return client.FCS001_EMAIL_TEMPLATE_ID;
  }
}

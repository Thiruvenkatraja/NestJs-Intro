import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  fakeUsers = [
    { username: "venkat", age: 24, email: "venkat@gmail.com" },
    { username: "Raja", age: 24, email: "raja@gmail.com" },
    { username: "surya", age: 24, email: "surya@gmail.com" },
    { username: "muthu", age: 24, email: "muthu@gmail.com" },
    { username: "bharath", age: 24, email: "bharath@gmail.com" },
  ];

  fetchUsers(){
    return this.fakeUsers;
  }
}

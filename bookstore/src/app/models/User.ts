export class User {
  id: number;
  userName: string;
  role: string
  token: string;

  constructor(userResponse: any) {
    this.id = userResponse.id;
    this.userName = userResponse.userName;
    this.role = userResponse.role;
    this.token = userResponse.token;
  }

}

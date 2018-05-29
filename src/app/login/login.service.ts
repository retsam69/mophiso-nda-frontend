import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  constructor(private http: Http, @Inject('API_URL') private url: string) {}

  async doLogin(username: string, password: string) {
    const rs: any = await this.http.post(`${this.url}/login/auth`, {
      username: username,
      password: password,
    }).toPromise();

    return rs.json();
  }
}

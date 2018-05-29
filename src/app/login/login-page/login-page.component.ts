import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  isError: boolean = false;
  errorMessage: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() { }

  async doLogin() {
    try {

      const rs: any = await this.loginService.doLogin(this.username, this.password);
      // console.log(rs);
      if (rs.ok) {
        // localStorage.setItem('token', rs.token); // cookie
        sessionStorage.setItem('token', rs.token); // session
        this.router.navigate(['./nda/dashboard']);

      } else {
        this.isError = true;
        this.errorMessage = rs.error;
      }
    } catch (error) {
        this.isError = true;
        this.errorMessage = 'Server error';
    }
  }

}


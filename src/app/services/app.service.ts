import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gatekeeper } from 'gatekeeper-client-sdk';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public user: any = null;
  url = "http://127.0.0.1:8000";

  constructor(private router: Router, private toastr: ToastrService, private http: HttpClient) { }

  // async loginByAuth({email, password}) {
  //     try {
  //         const token = await Gatekeeper.loginByAuth(email, password);
  //         localStorage.setItem('token', token);
  //         await this.getProfile();
  //         this.router.navigate(['/']);
  //         this.toastr.success('Login success');
  //     } catch (error) {
  //         this.toastr.error(error.message);
  //     }
  // }

  async loginByAuth({ email, password }) {
    let login = {
      username: email,
      password: password
    };
    try {
      this.http.post(this.url + "/accounts/login/", login).subscribe((data: any) => {

        console.log(data);
      });
      this.http.post(this.url + "/api-token-auth/", login).subscribe((data: any) => {
        this.saveToken(data.token);
        console.log(data);
      });

      setTimeout(() => {
        // this.getProfil();
        this.router.navigate(['/']);
        this.toastr.success('Login success');
      }, 2000)
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  async getProfile() {
    try {
      this.user = this.http.get(this.url + "/users/profil");
      console.log(this.user)
    } catch (error) {
      this.logout();
      throw error;
    }
  }

  async registerByAuth({ email, password }) {
    try {
      const token = await Gatekeeper.registerByAuth(email, password);
      localStorage.setItem('token', token);
      await this.getProfile();
      this.router.navigate(['/']);
      this.toastr.success('Register success');
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async loginByGoogle() {
    try {
      const token = await Gatekeeper.loginByGoogle();
      localStorage.setItem('token', token);
      await this.getProfile();
      this.router.navigate(['/']);
      this.toastr.success('Login success');
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async registerByGoogle() {
    try {
      const token = await Gatekeeper.registerByGoogle();
      localStorage.setItem('token', token);
      await this.getProfile();
      this.router.navigate(['/']);
      this.toastr.success('Register success');
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async loginByFacebook() {
    try {
      const token = await Gatekeeper.loginByFacebook();
      localStorage.setItem('token', token);
      await this.getProfile();
      this.router.navigate(['/']);
      this.toastr.success('Login success');
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async registerByFacebook() {
    try {
      const token = await Gatekeeper.registerByFacebook();
      localStorage.setItem('token', token);
      await this.getProfile();
      this.router.navigate(['/']);
      this.toastr.success('Register success');
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  // async getProfile() {
  //     try {
  //         this.user = await Gatekeeper.getProfile();
  //     } catch (error) {
  //         this.logout();
  //         throw error;
  //     }
  // }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('gatekeeper_token');
    this.user = null;
    this.router.navigate(['/login']);
  }
}

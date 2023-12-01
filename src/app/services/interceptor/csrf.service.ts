import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  constructor(private router: Router, private http: HttpClient) { }

  saveCsrf(csrf: string): void{
    localStorage.setItem('csrf', csrf)
    this.router.navigate(['admin'])
  }

  isLogged(): boolean {
    const csrf = localStorage.getItem('csrf')
    return !! csrf
  }

  clearCsrf():void{
    localStorage.removeItem('csrf')
    this.router.navigate(['/'])
  }

  getCsrfToken(): string | null{
    return localStorage.getItem('csrf')
  }


}

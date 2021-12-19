import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = `${environment.rootURL}`;

  constructor(
    private _httpClient: HttpClient
  ) { }
}

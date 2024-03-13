import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  domainUrl = "https://localhost:7132/api"
  user:string="Israel";
  constructor() { }
}

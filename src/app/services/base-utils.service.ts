import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUtilsService {

  getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max+1);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}

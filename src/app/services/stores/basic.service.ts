import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  private shareState = new BehaviorSubject("你好");
  getShareState = this.shareState.asObservable();

  constructor() { 
    
  }

  changeShareState(newText:string) {
    this.shareState.next(newText) 
  }
}

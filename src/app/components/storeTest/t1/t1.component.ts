import { Component } from '@angular/core';
import { BasicService } from '../../../services/stores/basic.service'

@Component({
  selector: 'app-t1',
  standalone: true,
  imports: [],
  templateUrl: './t1.component.html',
  styleUrl: './t1.component.scss'
})
export class T1Component {
  message=""
  constructor(private basicServiceStore: BasicService) {
    this.basicServiceStore.getShareState.subscribe(msg => this.message = msg)
  }

  changeShareState(newMsg:string) {
    this.basicServiceStore.changeShareState(newMsg)
  }

}

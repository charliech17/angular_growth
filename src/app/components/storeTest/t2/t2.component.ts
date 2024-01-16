import { Component } from '@angular/core';
import { BasicService } from '../../../services/stores/basic.service'

@Component({
  selector: 'app-t2',
  standalone: true,
  imports: [],
  templateUrl: './t2.component.html',
  styleUrl: './t2.component.scss'
})
export class T2Component {
  message = ""

  constructor(private basicServiceStore: BasicService) {
    this.basicServiceStore.getShareState.subscribe(msg => this.message = msg)
  }
}

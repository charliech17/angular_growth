import { Component } from '@angular/core';

@Component({
  selector: 'app-vcc',
  standalone: true,
  imports: [],
  templateUrl: './vcc.component.html',
  styleUrl: './vcc.component.scss'
})
export class VccComponent {
  count = 0;

  ngAfterViewInit() {
    console.log('vccinit')
  }

  addCount()  {
    this.count += 1;
  }
}

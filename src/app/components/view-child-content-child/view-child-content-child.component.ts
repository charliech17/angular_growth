import { Component, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-view-child-content-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child-content-child.component.html',
  styleUrl: './view-child-content-child.component.scss'
})
export class ViewChildContentChildComponent {
  isToggleBg = false;
  @ViewChild('vc') vc!: ElementRef;
  @ContentChild('cc') cc!: ElementRef;

  ngAfterViewInit() {
    this.vc.nativeElement.textContent = '我是viewChild，我被更改了!!'
    this.cc.nativeElement.textContent = '我是ContentChild，我被更改了!!'
  }
}

import { Component } from '@angular/core';
import { Adservice } from './service/getAd.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  providers: [Adservice],
  imports: [CommonModule],
  templateUrl: './dynamic-component.component.html',
  styleUrl: './dynamic-component.component.scss'
})
export class DynamicComponentComponent {
  private adList = this.adService.getAds();
  private currentAdIndex = 0;

  constructor(private adService: Adservice) {}

  displayNextAd() {
    if(this.currentAdIndex < this.adList.length-1) {
      this.currentAdIndex += 1;
    } else {
      this.currentAdIndex = 0;
    }
  }

  get currentAd() {
    return this.adList[this.currentAdIndex];
  }
}

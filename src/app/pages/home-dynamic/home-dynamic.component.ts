import { Component } from '@angular/core';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BaseUtilsService } from '../../services/base-utils.service'

@Component({
  selector: 'app-home-dynamic',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home-dynamic.component.html',
  styleUrl: './home-dynamic.component.scss',
  providers:[
    BaseUtilsService
  ]
})
export class HomeDynamicComponent {
  urlParams= "";
  params:string[] = [];
  snapParams:string[]=[];
  navigateParam="";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private baseUtils: BaseUtilsService
    ) {}

  ngOnInit() {
    const {snapshot,paramMap} = this.route
    const snapKeys = snapshot.paramMap.keys
    snapKeys.forEach((key)=> {
      const val = snapshot.paramMap.get(key)!
      this.snapParams.push(val)
    })

    paramMap.subscribe((pmObj)=> {
      const allKeys = pmObj.keys
      for(const key of allKeys) {
        const val = pmObj.get(key)!
        this.params.push(val)
      }
    })

    this.getNextRouteURL()
  }

  trackByParams(index: number, item: string) {
    return item[index];
  }

  trackBySnap(index: number, item: string) {
    return item[index];
  }

  getNextRouteURL() {
    const allSelect = {
      engs: "abcdefghijklmnopqrstuvwxyz",
      nums: "1234567890"
    }
    const {getRandomInt} = this.baseUtils
    const {engAmt,numAmt} = {
      engAmt:getRandomInt(3,6),
      numAmt:getRandomInt(3,6),
    }
    const recordTimes:[string,number,number][] = [['engs',engAmt,26],['nums',numAmt,10]]
    let finalParams = ""

    while(recordTimes.length>0) {
      const randomIdx = getRandomInt(0,recordTimes.length-1)
      const randomChoose = recordTimes[randomIdx]
      // @ts-ignore
      finalParams +=  allSelect[randomChoose[0]][getRandomInt(0,randomChoose[2])]
      
      randomChoose[1] -= 1
      if(randomChoose[1] == 0) {
        recordTimes.splice(randomIdx,1)
      }
    }

    this.navigateParam = finalParams
  }

  updateRandomParam() {
    this.router.navigateByUrl(`/home/${this.navigateParam}`)
  }
}

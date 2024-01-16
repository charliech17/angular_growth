import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Component } from '@angular/core';
import { AComponent } from "../../../components/a.components"
import { BComponent } from "../../../components/b.components"
import { RootTestComponent } from "../../components/root-test/root-test.component"
import { ChildComponent } from '../../components/child/child.component'
import { TestSelectorComponent } from '../../components/test-selector/test-selector.component'

import { HighlightDirective } from "../../directives/highlight.directive"

import { FlowerService } from '../../services/flower-service.service'
import { AnimalService } from '../../services/animal.service'
import { BaseUtilsService } from '../../services/base-utils.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, AComponent, BComponent, 
    HighlightDirective, RootTestComponent, 
    ChildComponent,RouterModule, TestSelectorComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    FlowerService
  ],
  viewProviders: [
    {provide: AnimalService, useValue: { emoji: '🦔' }}
  ]
})
export class HomeComponent {
  isBgRed = false;
  highlightColor = '';
  dynamicClass = {
    'bg-red': false,
    'color-white': false,
  };
  titleBg = '';
  private titleBgList = [
    'bg-orange','bg-cyan','bg-pink','bg-purple','bg-dark-red'
  ];

  constructor(public baseUtil: BaseUtilsService) {}

  ngOnInit() {
    const selectBgIndex = this.baseUtil.getRandomInt(0,this.titleBgList.length-1)
    this.titleBg = this.titleBgList[selectBgIndex]
  }

  toggleBg() {
    this.dynamicClass['bg-red'] = !this.dynamicClass['bg-red'] 
    this.isBgRed = !this.isBgRed
  }

  toggleColor() {
    this.dynamicClass['color-white'] = !this.dynamicClass['color-white'] 
  }
}

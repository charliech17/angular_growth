import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Component } from '@angular/core';
import { AComponent } from "../../../components/a.components"
import { BComponent } from "../../../components/b.components"
import { RootTestComponent } from "../../components/root-test/root-test.component"
import { ChildComponent } from '../../components/child/child.component'
import { TestSelectorComponent } from '../../components/test-selector/test-selector.component'
import { T1Component } from '../../components/storeTest/t1/t1.component'
import { T2Component } from '../../components/storeTest/t2/t2.component'
import { ContentProjectionComponent, ConditionDirective } from '../../components/content-projection/content-projection.component'
import { ViewChildContentChildComponent } from '../../components/view-child-content-child/view-child-content-child.component'
import { VccComponent } from '../../components/vcc/vcc.component'
import { DynamicComponentComponent } from '../../components/teach/component/dynamic-component/dynamic-component.component';

import { HighlightDirective } from "../../directives/highlight.directive"

import { FlowerService } from '../../services/flower-service.service'
import { AnimalService } from '../../services/animal.service'
import { BaseUtilsService } from '../../services/base-utils.service'
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Client } from '@stomp/stompjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, AComponent, BComponent, 
    HighlightDirective, RootTestComponent, 
    ChildComponent,RouterModule, TestSelectorComponent,
    T1Component,T2Component, ContentProjectionComponent,
    ViewChildContentChildComponent, VccComponent, ConditionDirective, DynamicComponentComponent,
    ReactiveFormsModule
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
  wsSendControl = new FormControl("", {nonNullable: true})
  stompClient: null | Client = null

  constructor(public baseUtil: BaseUtilsService, private http: HttpClient) {}

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

  callApi() {
    const user = {
      name: 'John',
      age: 30,
      email: 'john@example.com'
    };
    this.http.post("http://localhost:8080/api/user", user).subscribe(
      (res) => {
        console.log('res', res);
      }
    );
  }

  startWs() {
    const client = new Client({
      brokerURL: 'ws://localhost:8080/gs-guide-websocket', // 後端設定gs-guide-websocket
      onConnect: () => {
        client.subscribe('/topic/greetings', message =>
          console.log(`Received: ${message.body}`)
        );
      },
      onStompError:(err) => {
        console.log("onStompError: " + err)
      },
      onWebSocketError: (err) => {
        console.log("onWebSocketError: " + err)
      }
    });
    this.stompClient = client;
    client.activate();
  }

  sendWsMessage() {
    const client = this.stompClient;
    if(!client) {
      throw new Error('尚未有stompClient');
    }

    client.publish({ 
      destination: "/app/hello", 
      body: JSON.stringify({
        id: 11111111,
        content: this.wsSendControl.value
      }) 
    });
  }
}

import { Component, Host, Optional, SkipSelf } from '@angular/core';
import { ChildComponent } from '../child/child.component'
import { FlowerService } from '../../services/flower-service.service'
import { AnimalService } from '../../services/animal.service'

@Component({
  selector: 'app-root-test',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './root-test.component.html',
  styleUrl: './root-test.component.scss',
  providers: [
    { provide: FlowerService, useValue: { moji: '🌻' } }
  ],
  viewProviders: [
    {provide: AnimalService, useValue: { emoji: '🐶' }}
  ]
})
export class RootTestComponent {
  constructor(
    @Host() public flowerService: FlowerService,
    @SkipSelf() @Host() public animalService: AnimalService
  ) {}
}

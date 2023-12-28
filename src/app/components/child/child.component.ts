import { Component, Optional } from '@angular/core';
import { FlowerService } from '../../services/flower-service.service'
import { AnimalService } from '../../services/animal.service'

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  constructor(
    public flowerService: FlowerService,
    public animalService: AnimalService
  ) {}
}

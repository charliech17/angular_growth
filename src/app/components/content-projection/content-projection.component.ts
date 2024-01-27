import { CommonModule } from '@angular/common';
import { Component, ContentChild, TemplateRef,Directive } from '@angular/core';

@Directive({
  selector: '[appConditionDirective]',
  standalone: true 
})
export class ConditionDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {
  @ContentChild(ConditionDirective) conChild!: ConditionDirective;
  expanded = true;
  contentId = 'myID';

  ngAfterViewInit() {
  }
}
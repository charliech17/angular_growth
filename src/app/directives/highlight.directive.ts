import { Directive,ElementRef,HostListener,Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  
  constructor(private el:ElementRef) {}
  
  @Input() appHighlight = '';
  
  @HostListener("mouseenter") highlightTxt() {
    this.highlight(this.appHighlight)
  }

  @HostListener("mouseleave") unHighlightTxt() {
    this.highlight("")
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}

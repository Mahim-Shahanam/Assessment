//import { Directive } from '@angular/core';
import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appMyTooltip]'
})
export class MyTooltipDirective {
  @Input('myTooltip') tooltipText: string = '';

  private tooltipElement: HTMLElement | null = null;
  constructor() { }

}

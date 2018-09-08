import { Directive, ElementRef } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';

@Directive({
  selector: '[artColor]',
})
export class ColorDirective implements FocusableOption {
  constructor(private elementRef: ElementRef) {}

  focus() {
    this.elementRef.nativeElement.focus();
  }
}

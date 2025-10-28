import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective {

  @Input() appAutoFocus: boolean = true;
  private el = inject(ElementRef);

  ngAfterViewInit() {
    if (this.appAutoFocus) {
      this.el.nativeElement.style.border = '2px solid blue';
      this.el.nativeElement.focus();
    }
  }
}

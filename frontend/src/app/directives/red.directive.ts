import { Directive, ElementRef } from '@angular/core';

// diretiva de atributo é capaz de mexer tanto no comportamento quanto no estilo
@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "red"
   }
     
}

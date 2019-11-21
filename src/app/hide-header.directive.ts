import {Directive, ElementRef, Input, OnInit, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHideHeader]',
  host: {
    '(ionScroll)': 'OnContentScroll($event)'
}
})
export class HideHeaderDirective implements OnInit{
  // tslint:disable-next-line:no-input-rename
  @Input('header') header: any;
   private headerHeight: number;

  constructor(private element: ElementRef, private render: Renderer2) {
  }
 ngOnInit(): void {
    this.header = this.header.el;
    this.headerHeight = this.header.clientHeight;
    this.render.setStyle(this.header, 'transition', 'margin-top 700ms');
 }

  OnContentScroll(event) {
      if (event.detail.scrollTop > 80) {
          this.render.setStyle(this.header, 'margin-top',  '-70px');
      } else {
          this.render.setStyle(this.header, 'margin-top', '0px');
      }

  }


}

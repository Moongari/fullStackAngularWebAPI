import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({

  selector: '[appBorderDepense]'
})
export class BorderDepenseDirective {

  private initialColor:string ='white';
  private initialBackGroundColor:string ='#ffcc66';
  private defaultColor:string ='Black';
  private defaultHeight:number=50;
  
  constructor(private el:ElementRef) 
    {
      this.setHeight(this.defaultHeight);
      this.setColor(this.initialColor);
      this.setBackGroundName(this.initialBackGroundColor);
    
    }
    @Input('appBorderDepense') TextColorName: string | undefined;

    @HostListener('mouseenter') OnMouseEnter(): void{
      this.setHeight(100);
      this.setColor(this.TextColorName || this.defaultColor);
      this.setBackGroundName('#0099cc');
    }
    @HostListener('mouseleave') OnMouseLeave():void{

      this.setColor(this.initialColor);
      this.setBackGroundName(this.initialBackGroundColor);
      this.setHeight(this.defaultHeight);
    }





    setBackGroundName(name:string){
     
      this.el.nativeElement.style.backgroundColor= name;
    }

    setHeight(height:number){
      this.el.nativeElement.style.height=height +'px';
    }


    setColor(color:string){
      this.el.nativeElement.style.color =color;
    }
      

}

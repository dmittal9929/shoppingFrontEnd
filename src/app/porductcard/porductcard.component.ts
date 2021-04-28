import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-porductcard',
  templateUrl: './porductcard.component.html',
  styleUrls: ['./porductcard.component.css']
})
export class PorductcardComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  }
  AddToCart(){
    console.log("inside");
    var d1 = this.elementRef.nativeElement.querySelector('.bottom');
    d1.classList.add("clicked")
  }
  RemoveFromCart(){
    var d1 = this.elementRef.nativeElement.querySelector('.bottom');
    d1.classList.remove("clicked")
  }
}

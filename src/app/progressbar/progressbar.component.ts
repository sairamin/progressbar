import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit, AfterViewInit {

  @Input() data: any;
  value = '35%';

  constructor() {
   }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  setMyStyles() {
    const percent =  ((this.data.value / this.data.max) * 100) + '%';
    const styles: any = {
      'left': 'calc(' + percent + ' - 10px)'
    };
    return styles;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  public time = Date.now();
  public IntervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.IntervalId = setInterval( ()=> {
      this.time = Date.now()
    }, 100);
  }
ngOnDestroy(): void {
  clearInterval(this.IntervalId); 
}
}

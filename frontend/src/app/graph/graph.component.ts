import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Point, FunctionPoint, PlotMessage } from '../webworker-provider/message.interface';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor() {
  }
  private surfacePoints: FunctionPoint[];
  @ViewChild('plotter')
  public set Iframe(element: ElementRef) {
    this.iframeElement = element.nativeElement;
    console.log([this.iframeElement, this.iframeElement.contentWindow]);
    this.pushData();
  }
  private iframeElement: HTMLIFrameElement;

  @Input()
  public set SurfacePoints(data: FunctionPoint[]) {
    console.log('data recevied');
    this.surfacePoints = data;
    this.pushData();
  }
  @Input()
  public LinePoints: FunctionPoint[];

  private pushData() {
    try {
      const pushStuff = () => this.iframeElement.contentWindow.postMessage(<PlotMessage>{
        lineData: this.LinePoints,
        surfaceData: this.surfacePoints
      }, '*');

      if (this.iframeElement !== undefined) {
        if (this.iframeElement.contentWindow !== undefined && this.iframeElement.contentWindow !== null) {
          pushStuff();
          console.log('stuff pushed lineP:' + this.LinePoints.length + ' surfP:' + this.surfacePoints.length);
        }
      } else {
        console.log('iframe not loaded');
      }
    } catch (err) {
      console.log(err);
    }
  }
  ngOnInit() {
    window.addEventListener('message', messageData => {
      if (messageData.data === 'givemestuff') {
        console.log('>>> givemestuff');
        this.pushData();
        console.log('<<< take it!');
      }
    });
  }


}

import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  @Input('ChartLabels')  doughnutChartLabels: Label[];
  @Input('ChartData')  doughnutChartData: number [];
  @Input('ChartType')  doughnutChartType: ChartType;
  @Input('ley') Leyenda: string;


  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-receitas',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './receitas.component.html',
  styleUrl: './receitas.component.css',
  providers:[
    provideEcharts(),
  ]
})
export class ReceitasComponent {
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Janeiro', 'Fevereiro', 'Março'],
      axisLabel: {
        rotate: 45,
        interval: 0
      }
    },
    yAxis:{
      type: 'value'
    },
    
    series: [
      {name: 'Vendas',
        data: [820, 932, 9010],
        type: 'line',
        label:{
          show: true,
          position:'top',
          formatter: '{c} mil'
        }
      },
    ],
  };
}

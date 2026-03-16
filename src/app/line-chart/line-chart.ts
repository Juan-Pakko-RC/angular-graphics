import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-line-chart',
  imports: [],
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.css',
})
export class LineChart implements OnInit {

  public chart!: Chart;

  ngOnInit(): void {
    const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(57, 249, 249)',
      tension: 0.1
    }]
  };

    this.chart = new Chart('line-chart', {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
}

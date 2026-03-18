import { Routes } from '@angular/router';
import { BarChart } from './bar-chart/bar-chart';
import { LineChart } from './line-chart/line-chart';
import { PieChart } from './pie-chart/pie-chart';
import { Forms } from './forms/forms';

export const routes: Routes = [

    {path: '',redirectTo: 'bar-chart', pathMatch: 'full'},
    {path: 'bar-chart', component: BarChart},
    {path: 'line-chart', component: LineChart},
    {path: 'pie-chart', component: PieChart},
    {path: 'forms', component: Forms},
    {path: '**', redirectTo: 'bar-chart'}

];

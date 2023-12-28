import { Component, Input } from '@angular/core';

@Component({
  selector: 'jwf-count-numbers',
  templateUrl: './count-numbers.component.html',
  styleUrls: ['./count-numbers.component.css']
})
export class CountNumbersComponent {
@Input() nowLength : number | null  = 0
@Input() totalLenght: number | null = 6

}

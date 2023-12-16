import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jwf-year-filter',
  templateUrl: './year-filter.component.html',
  styleUrls: ['./year-filter.component.css']
})
export class YearFilterComponent {
  @Input() yearOptions: { value: number; label: string }[] = [];
  @Output() yearSelected = new EventEmitter<number>();

  selectedYear: number  = 1;

  selectYear(year: number): void {
    this.selectedYear = year;
    this.yearSelected.emit(year);
  }
}

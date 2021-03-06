import { Component } from '@angular/core';

@Component({
  selector: 'mob-tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  styleUrls: ['tab-group-basic-example.scss'],

})
export class TabGroupBasicExampleComponent {
  selectedIndexId = 0;

  onChangeIndex(id) {
    this.selectedIndexId = id;
  }
  switchTab(jumpBy: number) {
    const upperBound = 2;
    const lowerBound = 0;
    let temp = this.selectedIndexId;
    temp += jumpBy;
    temp = temp >= lowerBound ? temp : 0;
    temp = temp <= upperBound ? temp : upperBound;
    this.selectedIndexId = temp;
  }
}

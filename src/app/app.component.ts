import { Component } from '@angular/core';
import './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities: City[] = [];
  selectedCity: City = <City>{};

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  setDropdown() {
    this.selectedCity = { name: 'London', code: 'LDN' };

    setTimeout(() => {
      if(document.querySelector('#current')?.textContent === 'Current value: London') {
        alert("Component is OK!");
      } else {
        alert("ERROR! Component should be changed to London option");
      }
    }, 2000);
  }

  resetDropdown() {
    this.selectedCity = <City>{};

    setTimeout(() => {
      if(document.querySelector('#current')?.textContent === 'Current value: New York') {
        alert("Component is OK!");
      } else {
        alert("ERROR! Component should be changed to New Work option");
      }
    }, 2000);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  start = 'Interne 5, Abteilung II, Zimmer 230, Bett 2';
  destination = 'Interne 4, Abteilung IV, Zimmer 10, Bett 6';

  patientName = "Max Musterman";
  patientGD = "01.01.1980";
}

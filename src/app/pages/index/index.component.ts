import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  rutaEjemplo: Array<string>;

  constructor() {
    // this.rutaEjemplo = new Array<string>();
    // this.rutaEjemplo.push('./');
    // this.rutaEjemplo.push('ejemplo');

    this.rutaEjemplo = ['./', 'ejemplo'];
  }

  ngOnInit(): void { }

}

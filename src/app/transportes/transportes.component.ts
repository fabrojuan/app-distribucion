import { Component, OnInit } from '@angular/core';
import {TransportesService, Heroe } from "../services/transportes/transportes.service";

@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.css']
})
export class TransportesComponent implements OnInit {
  titulo: string = 'Transportes';
  transportes: Heroe[] = [];
  
  constructor(private _transportesService: TransportesService) { }

  ngOnInit(): void {
    this.transportes = this._transportesService.getTransportes();
  }

}

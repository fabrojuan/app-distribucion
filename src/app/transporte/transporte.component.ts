import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TransportesService } from "../services/transportes/transportes.service";

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent implements OnInit {
  titulo: string = 'Transporte 1';
  transporte: any = {};

  constructor(private activatedRouter: ActivatedRoute,
             private _transportesService: TransportesService) { 
    activatedRouter.params.subscribe(params => {
      console.log(params  );
      this.transporte = _transportesService.getTransporte(params['id']);
    });
  }

  ngOnInit(): void {
  }

}

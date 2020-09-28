import { Injectable } from '@angular/core';

@Injectable()
export class TransportesService {
    private transportes: Heroe[] = [
        {
            id: 1,
            transporte: "Transporte 1",
            maxBultos: 50,
            maxPeso: 1000,
            maxClientes: 50
        },
        {
            id: 2,
            transporte: "Transporte 2",
            maxBultos: 70,
            maxPeso: 1500,
            maxClientes: 50
        },
        {
            id: 3,
            transporte: "Transporte 3",
            maxBultos: 55,
            maxPeso: 1010,
            maxClientes: 50
        },
        {
            id: 4,
            transporte: "Transporte 4",
            maxBultos: 70,
            maxPeso: 1800,
            maxClientes: 50
        },
        {
            id: 5,
            transporte: "Transporte 5",
            maxBultos: 40,
            maxPeso: 900,
            maxClientes: 50
        },
        {
            id: 6,
            transporte: "Transporte 1",
            maxBultos: 50,
            maxPeso: 1000,
            maxClientes: 50
        },
        {
            id: 7,
            transporte: "Transporte 2",
            maxBultos: 70,
            maxPeso: 1500,
            maxClientes: 50
        },
        {
            id: 8,
            transporte: "Transporte 3",
            maxBultos: 55,
            maxPeso: 1010,
            maxClientes: 50
        },
        {
            id: 9,
            transporte: "Transporte 4",
            maxBultos: 70,
            maxPeso: 1800,
            maxClientes: 50
        },
        {
            id: 10,
            transporte: "Transporte 5",
            maxBultos: 40,
            maxPeso: 900,
            maxClientes: 50
        },
        {
            id: 11,
            transporte: "Transporte 1",
            maxBultos: 50,
            maxPeso: 1000,
            maxClientes: 50
        },
        {
            id: 12,
            transporte: "Transporte 2",
            maxBultos: 70,
            maxPeso: 1500,
            maxClientes: 50
        },
        {
            id: 13,
            transporte: "Transporte 3",
            maxBultos: 55,
            maxPeso: 1010,
            maxClientes: 50
        },
        {
            id: 14,
            transporte: "Transporte 4",
            maxBultos: 70,
            maxPeso: 1800,
            maxClientes: 50
        },
        {
            id: 15,
            transporte: "Transporte 5",
            maxBultos: 40,
            maxPeso: 900,
            maxClientes: 50
        }
    ];

    getTransportes(): Heroe[] {
        return this.transportes;
    }

    getTransporte(id:number) {
        return this.transportes.find(p => p.id == id);
    }
}

export interface Heroe {
    id: number;
    transporte: string;
    maxBultos: number;
    maxPeso: number;
    maxClientes: number;
}
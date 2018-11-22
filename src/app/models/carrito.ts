import { comida } from './comida';

export interface Carrito {
    comida: comida[];
    monto: number;
    date: String;
}

import { comida } from './comida';

export interface Roles {
    subscriber?: boolean;
    admin?: boolean;
 }

// tslint:disable-next-line:class-name
export interface user {
    uid: string;
    name?: string;
    email?: string;
    photoURL: string;
    role: Roles;
    carrito: comida[];
    totalPagar: number;
}

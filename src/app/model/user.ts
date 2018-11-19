import { Carrito } from './carrito';

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
    carrito: Carrito;
    ordenes: Carrito[];
}

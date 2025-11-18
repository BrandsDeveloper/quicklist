import { Injectable } from '@angular/core';
import { ListaCompras } from '../interface/lista-compras';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  lista: ListaCompras[] = [];

  constructor() { }

  addLista(lista : ListaCompras) : void {
    this.lista.unshift({...lista});
    localStorage.setItem('lista', JSON.stringify(this.lista))
  }

  updateLista(id: string, itens: string[]) : void {
    this.lista.find( item => item.id === id)!.itens = itens;
    localStorage.setItem('lista', JSON.stringify(this.lista))
  }

}

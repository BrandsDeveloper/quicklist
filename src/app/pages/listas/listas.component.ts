import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { HugeiconsIconComponent } from '@hugeicons/angular'
import { ShoppingBasket01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'
import { ItemListComponent } from '../../components/item-list/item-list.component';
import { ComprasService } from '../../services/compras.service';
import { ListaCompras } from '../../interface/lista-compras';
import { FormListComponent } from "../../components/form-list/form-list.component";
import { CommonModule } from '@angular/common';
import { BaseComponent } from "../../layout/base/base.component";

@Component({
  selector: 'app-listas',
  imports: [ButtonComponent, HugeiconsIconComponent, ItemListComponent, FormListComponent, CommonModule, BaseComponent],
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.scss'
})
export class ListasComponent implements OnInit{
  ShoppingBasket = ShoppingBasket01Icon;
  Cancel01Icon = Cancel01Icon;

  lista: ListaCompras[] = [];
  modal: boolean = false;

  constructor(private ListaCompras: ComprasService) {}

  ngOnInit(): void {
    // this.lista = this.ListaCompras.lista;
    this.lista = JSON.parse(localStorage.getItem('lista') || '[]');
  }
 
  openModal(){
    this.modal = this.modal ? false : true;
    console.log(this.modal);
  }
  
}

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCompras } from '../../interface/lista-compras';
import { ComprasService } from '../../services/compras.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.scss'
})
export class FormListComponent {

  constructor( private comprasService: ComprasService, private router: Router ){}

  lista: ListaCompras ={
    id: '',
    nome: '',
    itens: [],
  } 

  submit(){
    this.lista.id = uuidv4();
    console.log(this.lista);
    this.comprasService.addLista(this.lista)

    this.router.navigate(['/lista', this.lista.id])
  }

}

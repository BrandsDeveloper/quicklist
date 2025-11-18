import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../layout/base/base.component";
import { HugeiconsIconComponent } from '@hugeicons/angular'
import { ArrowLeft02Icon, Delete02Icon, Tick01Icon } from '@hugeicons/core-free-icons'
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ListaCompras } from '../../interface/lista-compras';
import { ComprasService } from '../../services/compras.service';
import { ButtonComponent } from "../../components/button/button.component";
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from "../../components/notification/notification.component";

@Component({
  selector: 'app-lista',
  imports: [BaseComponent, HugeiconsIconComponent, RouterLink, ButtonComponent, FormsModule, CommonModule, NotificationComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit{

  ArrowLeft02Icon = ArrowLeft02Icon;
  Delete02Icon = Delete02Icon;
  Tick01Icon = Tick01Icon;

  id: string | null = null;
  lista: ListaCompras | undefined;
  itens!: string;

  notifications: boolean[] = [];

  constructor(private route: ActivatedRoute, private compras: ComprasService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const id = params.get('id');
      this.lista =  this.compras.lista.find( item => item.id === id)

      this.notifications = new Array(this.lista?.itens.length).fill(false);
      
    });
  }

  timeouts: any[] = [];

  removeItem(index: number, immediate: boolean = true) {
    if (!this.lista) return;

    // Exibe notificação
    this.notifications[index] = true;

    // Função de remoção real
    const executarRemocao = () => {
      this.lista!.itens.splice(index, 1);
      this.notifications.splice(index, 1);
      this.compras.updateLista(this.lista!.id, this.lista!.itens);

      // Remove timeout associado
      this.timeouts.splice(index, 1);
    };

    if (immediate) {
      // Se existir timeout pendente, cancela
      if (this.timeouts[index]) {
        clearTimeout(this.timeouts[index]);
      }

      // Inicia timeout de remoção automática
      this.timeouts[index] = setTimeout(() => {
        executarRemocao();
      }, 1000);
    } else {
      // FORÇAR remoção imediata ao clicar no X
      if (this.timeouts[index]) {
        clearTimeout(this.timeouts[index]);
      }
      executarRemocao();
    }
  }

  addItem(){
    if(!this.lista) return;

    console.log(this.lista);

    this.lista.itens.push(this.itens);
    this.compras.updateLista(this.lista.id, this.lista.itens);
    this.itens = '';
  }



}

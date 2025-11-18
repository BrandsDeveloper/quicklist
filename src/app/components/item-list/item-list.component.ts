import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-list',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

  @Input() nome: string = 'Nome do Item';
  @Input() id: string = '';

}

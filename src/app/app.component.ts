import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComprasService } from './services/compras.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private compras: ComprasService){}
  
  ngOnInit(): void {
    const listas = localStorage.getItem('lista');
    this.compras.lista = listas ? JSON.parse(listas) : [];
  }

  title = 'lista-compras';
}

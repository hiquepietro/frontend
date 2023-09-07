import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../../service/cadastro.service';

@Component({
  selector: 'app-tela-de-cadastro',
  templateUrl: './tela-de-cadastro.component.html',
  styleUrls: ['./tela-de-cadastro.component.scss']
})
export class TelaDeCadastroComponent implements OnInit {
  CadastroService: CadastroService;

  constructor() {

    this.CadastroService = new CadastroService();

  }

  ngOnInit(): void {

}







}



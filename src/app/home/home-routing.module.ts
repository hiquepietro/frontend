import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TelaDeCadastroComponent } from "./components/tela-de-cadastro/tela-de-cadastro.component";

const routes = [
  {
    path: 'cadastro', Comment: TelaDeCadastroComponent

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

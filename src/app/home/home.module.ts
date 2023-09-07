import { CommonModule } from "@angular/common";
import { TelaDeCadastroComponent } from "./components/tela-de-cadastro/tela-de-cadastro.component";
import { TelaDeLoginComponent } from "./components/tela-de-login/tela-de-login.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "../shared/app-material/app-material.module";
import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    TelaDeCadastroComponent,
    TelaDeLoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

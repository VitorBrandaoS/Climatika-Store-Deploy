import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { StatusVenda } from '../model/StatusVenda';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit {

  usuario: Usuario = new Usuario

  constructor(
    private usuarioService: UsuarioService,
<<<<<<< HEAD
    public auth: AuthService,
=======
    private auth: AuthService,
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.findUserById()
<<<<<<< HEAD
    this.auth.findByIdVenda()
=======
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
  }

  findUserById(){
    this.usuarioService.getByIdUsuario(environment.id).subscribe((resp: Usuario) =>{
      this.usuario = resp
    })
<<<<<<< HEAD
  }

  limpar(){
    this.carrinhoService.limparLista(environment.id).subscribe((resp: StatusVenda) => {
      this.auth.statusVenda = resp
    })
  }

  

=======

  }

  /*
  findByCategoriaFilha(nome: string){  
    this.produtoService.getByCategoriaFilha(nome).subscribe((resp: Produto[]) =>{
      this.listaProduto = resp climatika-store-ecommerce
    })
}
*/

  removerProduto(idProduto: number){
    this.carrinhoService.removerItem(idProduto, environment.id).subscribe((resp: StatusVenda) => {
      this.auth.statusVenda = resp
    })
  }
/*
  limparLista(){
    let lista
    this.auth.findByIdVenda(this.auth.usuario.userStatusVenda.id)
    this.auth.statusVenda.listaProduto.forEach(element => {
      console.log("Elemento de código " + element.codigo + ", removido!")
      this.removerProduto(element.codigo)
    })
    console.log(lista)
  }
*/
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
}

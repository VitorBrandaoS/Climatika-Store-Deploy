import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

import { UsuarioLogin } from '../model/UsuarioLogin';
import { ProdutoService } from './produto.service';
import { Produto } from '../model/Produto';
import { StatusVenda } from '../model/StatusVenda';
import { CarrinhoService } from './carrinho.service';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class AuthService {
=======
export class AuthService{
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf

  listaProduto: Produto[]
  valor: string
  usuario: Usuario = new Usuario()
  statusVenda: StatusVenda = new StatusVenda()
  valorTotal: number = 0

  constructor(
    private http: HttpClient,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }


<<<<<<< HEAD
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
=======
  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
    return this.http.post<UsuarioLogin>('https://climatika-store-ecommerce.herokuapp.com/climatika/usuario/login', usuarioLogin)

  }

<<<<<<< HEAD
  cadastrar(usuario: Usuario): Observable<Usuario> {
=======
  cadastrar(usuario: Usuario): Observable<Usuario>{
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
    return this.http.post<Usuario>('https://climatika-store-ecommerce.herokuapp.com/climatika/usuario/cadastrar', usuario)

  }

  nomeUsuario() {
    let nome = environment.nomeCompleto

    return nome
  }

  logado() {
    let ok = false
<<<<<<< HEAD
    if (environment.token != '') {
=======
    if(environment.token != ''){
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
      ok = true
    }
    return ok
  }
  // comum
  // admin
  logadoAdmin() {
    let ok = false
<<<<<<< HEAD
    if (environment.token != '' && environment.tipoUsuario == 'adm') {
=======
    if(environment.token != '' && environment.tipoUsuario == 'adm'){
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
      ok = true
    }
    return ok
  }

<<<<<<< HEAD
  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
=======
  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
      this.listaProduto = resp
    })
  }

<<<<<<< HEAD
  findByCategoriaMae(nome: string) {
    this.produtoService.getByCategoriaMae(nome).subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })

  }

  findByCategoriaFilha(nome: string) {
    this.produtoService.getByCategoriaFilha(nome).subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

  findByNomeProduto() {
    if (this.valor == "") {
      this.getAllProdutos()
    } else {
=======
  findByCategoriaMae(nome: string){
        this.produtoService.getByCategoriaMae(nome).subscribe((resp: Produto[] ) =>{
        this.listaProduto = resp
      })
    
  }
  
  findByCategoriaFilha(nome: string){  
      this.produtoService.getByCategoriaFilha(nome).subscribe((resp: Produto[]) =>{
        this.listaProduto = resp
      })
  }

  findByNomeProduto(){
    if (this.valor == "") {
      this.getAllProdutos()
    }else{
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
      this.produtoService.getByNomeProduto(this.valor).subscribe((resp: Produto[]) => {
        this.listaProduto = resp
      })
    }
<<<<<<< HEAD

  }

  telaCadastro() {
    let ok = true
    let url_atual = window.location.href;
    if (url_atual == "http://localhost:4200/cadastrar" || url_atual == "http://localhost:4200/entrar") {
      ok = false
=======
      
  }
  
  telaCadastro(){
    let ok = true
    let url_atual = window.location.href;
    if (url_atual == "https://climatika-store.netlify.app/cadastrar" || url_atual == "https://climatika-store.netlify.app/entrar") {
       ok = false
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
    }
    return ok
  }

<<<<<<< HEAD
  findByIdVenda() {
    this.carrinhoService.getByIdVenda(environment.id).subscribe((resp: StatusVenda) => {
      this.statusVenda = resp
    })
  }

  findByIdUsuario() {
    this.usuarioService.getByIdUsuario(environment.id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })

  }

  total() {
    console.log("Calculando total!")
    this.carrinhoService.calculoTotal(environment.id).subscribe((resp: number) => {
      this.valorTotal = resp
      return this.valorTotal
    })
  }
/*
  calculoTotal() {

=======
  findByIdVenda(){    
      this.carrinhoService.getByIdVenda(environment.id).subscribe((resp: StatusVenda) => {
        this.statusVenda = resp
        return this.statusVenda
      })   
  }

  findByIdUsuario(){    
    this.usuarioService.getByIdUsuario(environment.id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
 
}

  calculoTotal(){ 
    console.log("Inicio do calculo")
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
    this.findByIdVenda()
    let total = 0
    if (this.statusVenda.listaProduto.length == 0) {
      this.valorTotal = 0
<<<<<<< HEAD
    } else {
      console.log("Inicio do calculo")
      this.statusVenda.listaProduto.forEach((element) => {
        //let valor = element.preco
        //let quant = element.quant
        //total = total + (valor * quant)
        total = total + element.preco
        this.valorTotal = total
        return this.valorTotal
      });
    }
    console.log("Término do calculo")
  }
*/
  removerProduto(idProduto: number) {
    this.carrinhoService.removerItem(idProduto, environment.id).subscribe((resp: StatusVenda) => {
      this.statusVenda = resp
      this.total()
    })
    
=======
    }else{
      this.statusVenda.listaProduto.forEach((element) => {
        let valor = element.preco
        let quant = element.quant
        total = total + (valor * quant)
        this.valorTotal = total
        return this.valorTotal
      });
    }    
    console.log("Término do calculo")
  }
  
  removerProduto(idProduto: number){
    this.carrinhoService.removerItem(idProduto, environment.id).subscribe((resp: StatusVenda) => {
      this.statusVenda = resp
      this.calculoTotal()
    })
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
  }

}

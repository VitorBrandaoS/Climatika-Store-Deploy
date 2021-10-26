import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
import { Produto } from 'src/app/model/Produto';
import { AuthService } from 'src/app/service/auth.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]
  constructor(
    private produtoService: ProdutoService,
<<<<<<< HEAD
    public auth: AuthService,
    private router: Router
  ){ }

  ngOnInit(){
   if(this.auth.logadoAdmin() == false){
      alert('Você não tem permissão para acessar esta página!')
      this.router.navigate(['/inicio'])
    }
=======
    public auth: AuthService
  ){ }

  ngOnInit(){
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
    window.scroll(0,0)
    this.auth.getAllProdutos()
  
    }
  
  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProduto = resp 
    })
  }

}


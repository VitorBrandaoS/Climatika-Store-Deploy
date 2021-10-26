import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
<<<<<<< HEAD
import { AuthService } from 'src/app/service/auth.service';
=======
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-deletando-produto',
  templateUrl: './deletando-produto.component.html',
  styleUrls: ['./deletando-produto.component.css']
})
export class DeletandoProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  codigoProduto: number
  constructor(
    private router: Router,
    private route: ActivatedRoute,
<<<<<<< HEAD
    private produtoService: ProdutoService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if(this.auth.logadoAdmin() == false){
      alert('Você não tem permissão para acessar esta página!')
      this.router.navigate(['/inicio'])
    }
=======
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
    this.codigoProduto = this.route.snapshot.params["id"]
    this.findByIdProduto(this.codigoProduto)
  }
  apagar(){
<<<<<<< HEAD
=======

>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
    this.produtoService.deletarProduto(this.codigoProduto).subscribe(() =>{
      alert("Produto apagado com sucesso!")
      this.router.navigate(["/editar-produto"])
    })
  }
  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp 
    })
  }

}

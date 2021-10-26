import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
<<<<<<< HEAD
import { AuthService } from 'src/app/service/auth.service';
=======
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-atualizando-produto',
  templateUrl: './atualizando-produto.component.html',
  styleUrls: ['./atualizando-produto.component.css']
})
export class AtualizandoProdutoComponent implements OnInit {
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
  atualizar(){
    this.produto.codigo = this.codigoProduto

    this.produtoService.atualizarProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      alert("Produto atualizado com sucesso!")
      this.router.navigate(["/editar-produto"])
    })
  }
  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp 
    })
  }
<<<<<<< HEAD

  identificador(){
    let categ = ""
    if (this.produto.categoriaMae == "Cozinha") {
      categ = "Cozinha"
    }else if(this.produto.categoriaMae == "Banheiro"){
      categ = "Banheiro"
    }else if(this.produto.categoriaMae == "Jardim"){
      categ = "Jardim"
    }else if(this.produto.categoriaMae == "Moda e Beleza"){
      categ = "Moda e Beleza"
    }else if(this.produto.categoriaMae == "Higiene Pessoal"){
      categ = "Higiene Pessoal"
    }else if(this.produto.categoriaMae == "Pet"){
      categ = "Pet"
    }
    return categ
  }

=======
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
}

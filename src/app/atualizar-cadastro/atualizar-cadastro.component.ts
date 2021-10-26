import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-atualizar-cadastro',
  templateUrl: './atualizar-cadastro.component.html',
  styleUrls: ['./atualizar-cadastro.component.css']
})
export class AtualizarCadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
<<<<<<< HEAD
  usuarioBanco: Usuario = new Usuario
  confirmarSenha: string
  confirmarEmail: string
=======
  confirmarSenha: string

>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

<<<<<<< HEAD
  ngOnInit() {
    this.findByIdUser(environment.id)
    this.findByIdUserBanco(environment.id)
=======
  ngOnInit(){
    this.findByIdUser(environment.id)
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }
<<<<<<< HEAD
  confirmEmail(event: any) {
    this.confirmarEmail = event.target.value
  }

  atualizarUser() {
    this.usuario.id = environment.id
    this.usuarioService.atualizarUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      alert("Usuario atualizado com sucesso!")
      this.router.navigate(["/entrar"])
    })

  }

  atualizarSenha() {
    if (this.usuario.senha != this.confirmarSenha) {
      alert("As senhas estão incorretas.")
    } else {
      this.usuario.id = environment.id
      this.usuarioService.atualizarSenha(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        alert("Senha atualizada com sucesso!")
=======

  atualizarUser(){
    if (this.usuario.senha != this.confirmarSenha) {
      alert("As senhas estão incorretas.")
    }else{
      this.usuario.id = environment.id
      this.usuarioService.atualizarUsuario(this.usuario).subscribe((resp: Usuario) =>{
        this.usuario = resp
        alert("Usuario atualizado com sucesso!")
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
        this.router.navigate(["/entrar"])
      })
    }
  }

<<<<<<< HEAD
  atualizarEmail() {

    if (this.usuario.email != this.confirmarEmail) {
      alert("Os Emails estão incorretos.")
    } else {
      if (this.usuario.email == this.usuarioBanco.email) {
        alert("Este Email é o mesmo que você já está usando! Por favor tente outro endereço de email.")
      } else {
        this.usuario.id = environment.id
        this.usuarioService.atualizarEmail(this.usuario).subscribe((resp: Usuario) => {
          this.usuario = resp
          alert("Email atualizado com sucesso!")
          this.router.navigate(["/entrar"])
        }, erro => {
          if (erro.status == 400) {
            alert('Verifique se está digitado corretamente! Ou este Email já está sendo usado!')
          }
        })
      }
    }
  }

  findByIdUser(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  findByIdUserBanco(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuarioBanco = resp
    })
  }

=======
  findByIdUser(id: number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) =>{
      this.usuario = resp 
    })
  }
  
>>>>>>> f7172561d0fb34240090d812a7647c7199745ecf
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';

@Component
({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit
{
  cadastro: FormGroup;

  constructor(public validacao:  ValidarCamposService, private fb: FormBuilder) { }

  ngOnInit(): void
  {
    this.cadastro = this.fb.group
    ({
        titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
        urlFoto: ['', [Validators.minLength(10)]],
        dtLancamento: ['', [Validators.required]],
        descricao: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(256)]],
        nota: [0,[Validators.required, Validators.min(0), Validators.max(10)]],
        urlIMDb: ['', [Validators.minLength(10)]],
        genero: ['', [Validators.required]]
    });
  }

  salvar(): void
  {
    this.cadastro.markAllAsTouched();

    if(this.cadastro.invalid)
    {
      return;
    }

    alert('Sucesso! /n' + JSON.stringify(this.cadastro.value, null, 4));
  }

  reiniciarForm(): void
  {
    this.cadastro.reset();
  }

  get f()
  {
    return this.cadastro.controls;
  }
}

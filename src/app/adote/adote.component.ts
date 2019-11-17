import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Adote } from './adote';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-adote',
  templateUrl: './adote.component.html',
  styleUrls: ['./adote.component.css']
})
export class AdoteComponent implements OnInit {
  form: FormGroup;
  public sucesso: boolean=false;
  public erro: boolean=false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      mensagem: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(480)]]
    })
  }
  enviar() {
    this.sucesso=false;
    this.erro=false;
    if (this.form.valid) {
      const adote = this.form.getRawValue() as Adote;
      debugger;
      console.log(adote);

      this.enviarEmail(adote).subscribe(x => {
        console.log(x);
        this.sucesso=true;
        this.form.reset();
      }, err => {
        console.log(err);
        this.erro=true;
      });
    }
  }
  enviarEmail(adote: Adote) {

    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json'),
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const url = 'https://formspree.io/xayylgek';

    const formData: FormData = new FormData();
    formData.append('email', adote.email);
    formData.append('nome', adote.nome);
    formData.append('mensagem', adote.mensagem);

    return this.http.post(url, formData, { headers });
  }

}

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'imc_calculadora';

    nombre:string = "";
    edad:number = 0;
    sexo:string = "";
    estatura:number = 0;
    peso:number = 0;
    imc:number = 0;
    resultado: string = ""
    readonlyInput: boolean = true;

    calcularIMC() {
        this.imc = this.peso / (this.estatura * this.estatura);
        this.imc = Math.round(this.imc * 100) / 100;

        if (this.imc < 19){
          this.resultado = 'Bajo peso';
        } else if (this.imc >= 19 && this.imc < 25){
          this.resultado = 'Peso normal';
        }else if (this.imc >= 25 && this.imc < 30){
          this.resultado = 'Sobrepeso';
        }else if (this.imc >= 30 && this.imc < 40){
          this.resultado
        }

      }

     

  }

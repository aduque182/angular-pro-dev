import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { resolve, reject } from "q";

@Component({
  selector: "app-promesas",
  templateUrl: "./promesas.component.html",
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    
    this.contarTres()
      .then(() => console.log("Termino!"))
      .catch(error => console.error("Error en la promesa ", error));
  }

  ngOnInit() {}

  contarTres(){

    let promesa = new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          resolve();
          clearInterval(intervalo);
        }
      }, 1000);
    });

return promesa;
  }
}


import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  standalone: false,
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage  {
  
    constructor(private navCtrl: NavController) {}
  
    logout() {
      // Aquí puedes agregar lógica de cierre de sesión (por ejemplo, borrar tokens o limpiar datos)
      this.navCtrl.navigateRoot('/home'); // Redirige a la página de login (home)
    }
  
}

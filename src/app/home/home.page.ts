import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  messageVisible = false;
  username: string = '';
  password: string = '';
  isValid = false;
  showLoading = true; // Muestra el Spinner Init
  showLoginSpinner = false; // Muestra el segundo Spinner de login

  constructor(private alertController: AlertController, private navCtrl: NavController) {}

  ngOnInit() {
    // Muestra el Spinner Init por 3 segundos al cargar la app
    setTimeout(() => {
      this.showLoading = false;
    }, 3000);
  }

  showMessage() {
    this.messageVisible = true;
    setTimeout(() => {
      this.messageVisible = false;
    }, 5000);
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  validateFields() {
    this.username = this.username.toLowerCase().trim();
    this.password = this.password.trim();
    this.isValid = this.username !== '' && this.password !== '' && !this.username.includes(' ') && !this.password.includes(' ');
  }
  

  async showModal() {
    if (this.isValid) {
      this.showLoginSpinner = true; // Muestra el spinner de login
      setTimeout(() => {
        this.showLoginSpinner = false; // Oculta el spinner de login
        this.navCtrl.navigateForward('/principal'); // Redirige a la página principal
      }, 3000); // 3 segundos de duración del spinner
    }
  }
}
//author: Leonardo López Osornio
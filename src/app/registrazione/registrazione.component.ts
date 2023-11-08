import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrazioneService } from '../service/registrazione/registrazione.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {

  nome: string = ''; // Variabili per memorizzare i dati dai campi di input
  cognome: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router,private registrationService: RegistrazioneService) {}

  accedi() {
    this.router.navigate(['/login']);
  }


  registerUser() {
    // Raccogli i dati dai campi di input e inseriscili in un oggetto userData
    const userData = {
      nome: this.nome,
      cognome: this.cognome,
      email: this.email,
      password: this.password,
    };

    // Chiama il servizio per inviare i dati al backend
    this.registrationService.registerUser(userData).subscribe(
      (result: any) => {
        console.log(result.messaggio);
      },
      error => {
        console.log(error.error.messaggio)
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );
  }

}

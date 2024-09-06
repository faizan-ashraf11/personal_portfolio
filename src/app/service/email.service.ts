import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    public http: HttpClient,
  ) { }

  sendEmail(message: any , from_name: any , email_from: any): Promise<any> {
    const templateParams = {
      message : message,
      from_name : from_name,
      email_from : email_from
    }
    const serviceId = 'service_4ivjkjb';
    const templateId = 'template_v31bwgl';
    const publicKey  = 'nJwxc9WtNZ5J8Ju5g';

    return emailjs.send(serviceId , templateId , templateParams , publicKey)
  }
}

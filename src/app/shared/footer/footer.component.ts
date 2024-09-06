import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './../../service/email.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [  HttpClientModule , CommonModule ,FormsModule , ReactiveFormsModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

  contactForm: FormGroup = new FormGroup({});
  constructor(
    public emailService: EmailService,
    private fb: FormBuilder
  ){
    this.createForm();
  }

  createForm(){
    this.contactForm = this.fb.group({
      name: [null , [Validators.required]],
      message: [null , [Validators.required]],
      email: [null , [Validators.required]]
    })
  }

  sendEmail(){
    this.contactForm.markAllAsTouched();
    if(this.contactForm.invalid){
      alert('Please fill all input highlighted fields');
      return;
    }
    this.emailService.sendEmail(this.contactForm.controls['message']?.value , this.contactForm.controls['name']?.value , this.contactForm.controls['email']?.value).then((d: any)=>{
        alert('Email has sended successfully!');
    },(err: any)=>{
      alert('An error has occured while sending an email please try later!');
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , HomeComponent , FormsModule  , RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    public router: Router
  ){

  }

  ngOnInit(): void {

  }

  scrollDownAbout(): void {
    const top = window.innerWidth < 968? 1800 : 1500;
    window.scrollBy({
      top: top,
      behavior: 'smooth'
    });
  }

  scrollDownContactMe(): void {
    const top = window.innerWidth < 968? 2600 : 1800;
    window.scrollBy({
      top: top,
      behavior: 'smooth'
    });
  }

  scrollDownHome(): void {
    window.scrollBy({
      top: 50,
      behavior: 'smooth'
    });
  }
}

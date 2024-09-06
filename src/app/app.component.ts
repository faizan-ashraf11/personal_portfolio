import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , HomeComponent , FormsModule  , RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    public router: Router,
    private http: HttpClient,
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

  downloadFile(){
    const fileUrl = '../assets/CV Faizan.pdf';  // Path to your file in the assets folder

    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const downloadLink = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = 'CV Faizan.pdf';  // Name for the downloaded file
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(url);  // Clean up URL object
    }, (error) => {
      console.error('Download error:', error);
    });
  }
}

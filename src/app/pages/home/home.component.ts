import { Component, OnInit } from '@angular/core';
import { AnimatedBoxComponent } from '../../shared/animated-box/animated-box.component';
import { PortfolioCardComponent } from '../../shared/portfolio-card/portfolio-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { EmailService } from '../../service/email.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AnimatedBoxComponent , PortfolioCardComponent , FooterComponent , HttpClientModule , RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  myText: any = 'I specialize in creating dynamic, high-performance websites and applications with a focus on clean, responsive design and user experience. From front-end interfaces to back-end functionality, I build solutions that deliver results.';
  paraText: any = '';

  constructor(
    private emailService: EmailService
  ){

  }
  ngOnInit(): void {
    this.loadNextCharacter(0);
  }

  loadNextCharacter(index: number) {
    if (index < this.myText.length) {
      setTimeout(() => {
        this.paraText = this.paraText + this.myText[index];
        this.loadNextCharacter(index + 1);
      }, 30);
    }
  }
}

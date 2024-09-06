import { Component, OnInit } from '@angular/core';
import { PortfolioCardComponent } from '../../shared/portfolio-card/portfolio-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimatedBoxComponent } from '../../shared/animated-box/animated-box.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ PortfolioCardComponent , CommonModule , FormsModule , AnimatedBoxComponent , FooterComponent , HttpClientModule ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  myText: any = 'The frontend projects demonstrate a deep understanding of Angular robust framework to create responsive, dynamic, and user-friendly interfaces. The full-stack applications integrate Angular with powerful backend solutions using Node.js and Express.js, ensuring seamless data flow and efficient performance.';
  paraText: any = '';

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

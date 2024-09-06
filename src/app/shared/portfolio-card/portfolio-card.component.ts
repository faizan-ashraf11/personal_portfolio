import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [ CommonModule , FormsModule , ReactiveFormsModule ],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent implements OnInit{

  @Input() heading: any = '';
  @Input() desrciption: any = '';
  @Input() imageUrl: any = '';

  ngOnInit(): void {

  }
}

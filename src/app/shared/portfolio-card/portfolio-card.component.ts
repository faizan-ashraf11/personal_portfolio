import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(
    private matDialog: MatDialog
  ){

  }
  ngOnInit(): void {

  }


  viewDetail(cardId: any){
    this.matDialog.open(CardDetailComponent, {
      autoFocus: false,
      data: { projectName: 'UCP Odoo Portal' , fileName: 'Odoo UCP' , imagesArray: 13  },
      minWidth: window.innerWidth > 970 ? '950px' : window.innerWidth > 770? '750px' : window.innerWidth > 400 ? '400px' : '320px' ,
      maxWidth: window.innerWidth > 970 ? '950px' : window.innerWidth > 770? '750px' : window.innerWidth > 400 ? '400px' : '320px' ,
      maxHeight: window.innerWidth > 970 ? '500px' : window.innerWidth > 770? '500px' : window.innerWidth > 400 ? '300px' : '250px' ,
      minHeight: window.innerWidth > 970 ? '500px' : window.innerWidth > 770? '500px' : window.innerWidth > 400 ? '300px' : '250px' ,
      disableClose: false,
  }).afterClosed().subscribe((action: any) => {
    if (action) {

    }
  });
  }
}

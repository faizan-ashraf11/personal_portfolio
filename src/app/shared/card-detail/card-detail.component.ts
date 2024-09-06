import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent implements OnInit {

  imageAddress: any = '';
  baseAddress: any = '../../../assets/';
  fileName: any = '../../../assets/';
  maxLength = 0;
  index = 1;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<CardDetailComponent>
  ){
    this.maxLength = data?.imagesArray;
    this.fileName = data?.fileName;
    this.imageAddress = this.baseAddress + this.fileName + '/' + this.index.toString() + '.png';
  }
  ngOnInit(): void {

  }

  closeModal(){
    this.dialog.close({});
  }

  next(){
    this.index++;
    if(this.index == this.maxLength){
      this.index = 1;
    }
    this.imageAddress = this.baseAddress + this.fileName + '/' + this.index.toString() + '.png';
  }
  previous(){
    this.index--;
    if(this.index == 0){
      this.index = this.maxLength;
    }
    this.imageAddress = this.baseAddress + this.fileName + '/' + this.index.toString() + '.png';
  }
}

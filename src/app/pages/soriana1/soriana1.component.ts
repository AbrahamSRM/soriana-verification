import { Component, OnInit } from '@angular/core';
import { SorianaService } from 'src/app/services/soriana.service';

@Component({
  selector: 'app-soriana1',
  templateUrl: './soriana1.component.html',
  styleUrls: ['./soriana1.component.scss']
})
export class Soriana1Component implements OnInit {

  constructor(private readonly sorianaService: SorianaService) {}

  ngOnInit(): void {

  }

  public clickConfirmCorrectData(): void {
    console.log('asda')
    this.sorianaService.clientVerfificationDataIsCorrect().subscribe((data) => {
      console.log(data)
    });
  }
}

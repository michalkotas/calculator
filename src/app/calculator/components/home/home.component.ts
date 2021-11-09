import { Component, OnInit } from '@angular/core';
import { BridgeService } from 'bridge';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public pridgeService: BridgeService) {}

  ngOnInit(): void {}
}

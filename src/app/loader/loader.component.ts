import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public visible: boolean;
  constructor() {}

  ngOnInit() {
    this.visible = false;
  }

  toggleVisibility(): void {
    this.visible = !this.visible;
  }

}

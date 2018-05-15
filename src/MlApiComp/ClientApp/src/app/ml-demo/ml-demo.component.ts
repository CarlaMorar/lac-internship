import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ml-demo',
  templateUrl: './ml-demo.component.html',
  styleUrls: ['./ml-demo.component.scss']
})
export class MlDemoComponent implements OnInit {
  status: string;
  constructor() {
    this.status = "not selected";
  }

  ngOnInit() {
    onFileSelected($Event){
      this.status = "Selected";
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  envioFormulario(value){
    console.log(value);
  }
}

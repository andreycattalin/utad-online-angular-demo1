import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  templateUrl: './page-services.component.html',
  styleUrls: ['./page-services.component.css']
})
export class PageServicesComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    console.log("Hola mundo")
  }

  title = "Todos los servicios";
  desc = "Lorem Ipsum lo que sea"
  myServices = ["Electricista", "Albañil", "Fontanero", "Pintor"]


  addService(data: string) {
    this.myServices.push(data)
  }

}

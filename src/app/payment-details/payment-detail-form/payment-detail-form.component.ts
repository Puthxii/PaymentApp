import { Component, OnInit } from '@angular/core';
import {PaymentDetailService} from "../../shared/payment-detail.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(
    public service: PaymentDetailService
  ) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res =>{

      },
      error => {
        console.log(error)}
    );
  }

}

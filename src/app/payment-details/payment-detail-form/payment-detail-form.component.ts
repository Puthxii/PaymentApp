import { Component, OnInit } from '@angular/core';
import {PaymentDetailService} from "../../shared/payment-detail.service";
import {NgForm} from "@angular/forms";
import {PaymentDetail} from "../../shared/payment-detail.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(
    public service: PaymentDetailService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res =>{
        this.resetForm(form)
        this.toastrService.success('Submitted successfully', 'Payment Detail Register')
      },
      error => {
        console.log(error)}
    );
  }

  resetForm(form: NgForm) {
    form.form.reset()
    this.service.formData = new PaymentDetail();
  }

}

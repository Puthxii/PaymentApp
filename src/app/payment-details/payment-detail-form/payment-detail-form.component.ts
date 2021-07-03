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

  onSubmit(form: NgForm){
    if (this.service.formData.paymentDetailId === undefined){
      this.insertRecord(form)
    } else  {
      this.updateRecord(form)
    }
  }

  insertRecord(form: NgForm){
    this.service.postPaymentDetail().subscribe(
      res =>{
        this.resetForm(form)
        this.service.refreshList()
        this.toastrService.success('Submitted successfully', 'Payment Detail Register')
      },
      error => {
        console.log(error)}
    );
  }

  updateRecord(form: NgForm){
    this.service.putPaymentDetail().subscribe(
      res =>{
        this.resetForm(form)
        this.service.refreshList()
        this.toastrService.info('Updated successfully', 'Payment Detail Register')
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

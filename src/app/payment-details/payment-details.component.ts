import { Component, OnInit } from '@angular/core';
import {PaymentDetailService} from "../shared/payment-detail.service";
import {PaymentDetail} from "../shared/payment-detail.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(
    public service: PaymentDetailService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.service.refreshList()
  }

  populateForm(selectedRecord: PaymentDetail){
    this.service.formData = Object.assign({}, selectedRecord)
  }

  onDelete(id: number) {
    if ( confirm('Are you sure to delete this record?')){
      this.service.deletePaymentDetail(id)
        .subscribe(
          res =>{
            this.service.refreshList()
            this.toastrService.error('Deleted successfully','Payment Detail Register')
          },
          error => {
            console.log(error)
          }
        )
    }
  }
}

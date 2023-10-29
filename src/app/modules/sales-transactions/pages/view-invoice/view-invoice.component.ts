import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';
import { SalesTransactionService } from '../../services/sales-transaction.service';
import { InvoiceDetail } from '../../model/SalesTransaction';
@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {
  invoiceId: string;
  invoices: InvoiceDetail;
  contentLoaded = false;
  constructor(private route: ActivatedRoute, public saleTransactionService: SalesTransactionService) { }
  convertToPdf() {
    window.print(); return false;
    //WORKING EXAMPLE IS HERE
    let html1 = document.querySelector('.printformClass');
    html2canvas(document.querySelector(".printformClass")).then(canvas => {

      var pdf = new jsPDF('p', 'mm', 'a4');

      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      //pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
      pdf.addImage(imgData, 'JPEG', 10, 10, 180, 150);  // 180x150 mm @ (10,10)mm

      pdf.save('converteddoc.pdf');
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.invoiceId = routeParams.invoiceId;
      this.getInvoiceDetail();
    });
  }

  getSaletransaction() {
    const userId = localStorage.getItem('userId');
    this.saleTransactionService.getInvoiceDetail(userId, this.invoiceId);
  }

  async getInvoiceDetail() {
    const userId = localStorage.getItem('userId');
    this.invoices = await this.saleTransactionService.getInvoiceDetail(userId, this.invoiceId);
    console.log(this.invoices);
    this.contentLoaded = true;
  }
}

import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerListService } from "src/app/shared/services/customer-list.service";
import { Customer } from "src/app/shared/types/customer";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [CustomerListService, NgbModal]
})
export class HomeComponent implements OnInit {
  customers: Customer[] = [];
  selectedCustomerId = "";

  constructor(
    private modalService: NgbModal,
    private customerListService: CustomerListService
  ) {}

  ngOnInit() {
    this.customers = this.customerListService.customers;
  }

  openModal(content: unknown, customerId: string) {
    this.selectedCustomerId = customerId;
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  deleteCustomer() {
    // debugger;
    this.customerListService.deleteCustomer(this.selectedCustomerId);
    this.closeModal();
    this.ngOnInit();
  }
}

import { Injectable } from "@angular/core";
import { Customer } from "../types/customer";

@Injectable({
  providedIn: "root"
})
export class CustomerListService {
  customers: Customer[] = [
    {
      id: crypto.randomUUID(),
      name: "Test User",
      dob: new Date("01/01/1988"),
      email: "noreply@localhost"
    },
    {
      id: crypto.randomUUID(),
      name: "Test User",
      dob: new Date("01/01/1990"),
      email: "noreply@localhost"
    },
    {
      id: crypto.randomUUID(),
      name: "Test User",
      dob: new Date("01/01/1991"),
      email: "noreply@localhost"
    }
  ];

  constructor() {
    this.customers = this.customers.map(customer => {
      customer.dob = new Date(customer.dob);
      return customer;
    });
  }

  getOne(id: string) {
    return this.customers.find(customer => customer.id === id);
  }
  putOne(customer: Customer) {
    this.customers.push(customer);
  }
  getAll() {
    return this.customers;
  }
  deleteCustomer(id: string) {
    this.customers = this.customers.filter(customer => customer.id !== id);
  }
  patchOne(customer: Customer) {
    this.customers = this.customers.map(c => {
      if (c.id === customer.id) {
        return customer;
      }
      return c;
    });
  }
}

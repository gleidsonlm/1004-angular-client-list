import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-customer",
  templateUrl: "./edit-customer.component.html",
  styleUrls: ["./edit-customer.component.scss"]
})
export class EditCustomerComponent implements OnInit {
  customerForm!: FormGroup;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.customerForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      dob: new FormControl(new Date(), [Validators.required]), // date
      email: new FormControl("", [Validators.email, Validators.required])
    });
  }

  onSubmit() {
    console.log(this.customerForm.value);
  }
}

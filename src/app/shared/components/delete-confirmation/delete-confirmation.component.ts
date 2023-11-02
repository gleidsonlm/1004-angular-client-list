import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-delete-confirmation",
  templateUrl: "./delete-confirmation.component.html",
  styleUrls: ["./delete-confirmation.component.scss"]
})
export class DeleteConfirmationComponent {
  constructor(private modalService: NgbModal) {}

  open(content: unknown) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }
}

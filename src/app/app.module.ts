import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { DeleteConfirmationComponent } from "./shared/components/delete-confirmation/delete-confirmation.component";
import { EditCustomerComponent } from "./pages/edit-customer/edit-customer.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    NavBarComponent,
    DeleteConfirmationComponent,
    EditCustomerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

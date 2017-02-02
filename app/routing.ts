import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./notfound/notfound.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotFoundComponent }// ** = Wildcard Anything else -- order matters

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

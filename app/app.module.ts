import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

import {appRouting} from "./routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./notfound/notfound.component";


@NgModule({
  imports: [BrowserModule, appRouting],
  declarations: [AppComponent, HomeComponent, ContactComponent, AboutComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}

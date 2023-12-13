import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path : "" , redirectTo : "home",pathMatch:'full'},
  {path : "home" , component :HomeComponent},
  {path : "product" , component : ProductsComponent},
  {path : "contact" , component : ContactComponent},
  {path : "service" , component : ServiceComponent},
  {path:"**",component: NotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

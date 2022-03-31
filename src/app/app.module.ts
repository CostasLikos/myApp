import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MovieComponent } from './components/movie/movie.component';
import { AddDashBetweenPipe } from './sharedPipes/add-dash-between.pipe';
import { FulltimePipe } from './sharedPipes/fulltime.pipe';
import { ProductComponent } from './components/product/product.component';
import { GithubComponent } from './components/github/github.component';
import { NobelComponent } from './components/nobel/nobel.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RatingComponent } from './sharedComponents/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { NobelTableComponent } from './sharedComponents/nobel-table/nobel-table.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component'



@NgModule({
  declarations: [
    AppComponent, StudentComponent, TrainerComponent, EmployeeComponent, MovieComponent, AddDashBetweenPipe, FulltimePipe, ProductComponent, GithubComponent, NobelComponent, HomeComponent, ErrorComponent, RatingComponent, NobelTableComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

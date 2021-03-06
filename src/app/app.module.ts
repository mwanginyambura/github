import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Headers } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { GitService } from './github/git.service';
import { RoutingModule } from './routing/routing.module';
import { PriceDirective } from './price.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    PriceDirective,
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule
    
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
roleName: string | null;
constructor(private router:Router){

}
onExplore(){
    this.router.navigateByUrl('/login');
}
}
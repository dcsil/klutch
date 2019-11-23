import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisionService } from 'src/app/services/vision.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private visionService: VisionService) { }

  ngOnInit() {
    this.visionService.initializeDB();
  }

  login() {
    this.router.navigateByUrl(`welcome`);
  }

  register() {
    
  }

}

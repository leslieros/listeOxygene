import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-blog-engine',
  templateUrl: './blog-engine.component.html',
  styleUrls: ['./blog-engine.component.css']
})
export class BlogEngineComponent {
  constructor(public auth: AuthService) {
    //auth.handleAuthentication();
  }
}

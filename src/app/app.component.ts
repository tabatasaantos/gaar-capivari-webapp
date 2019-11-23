import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gaar-capivari-webapp';
  classe = "pd70";
  move = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    debugger;
    if (this.move == true) {
      this.classe = "pd70"
    } else {
    this.move = false;
    this.classe = "pd0"
  }
  }

  onNavigate() {
    this.move = true;
    this.classe = "pd70";
  }

}

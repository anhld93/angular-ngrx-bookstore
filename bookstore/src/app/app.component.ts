import {ApplicationRef, Component, NgZone} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _applicationRef: ApplicationRef, private _router: Router,
              zone: NgZone) {
    if(this.isMac()) {
      _router.events.subscribe(ev => {
        if(ev instanceof NavigationEnd) {
          setTimeout(() => {
            zone.run(() => _applicationRef.tick())
          }, 500)
        }
      })
    }

  }

  isMac() {
    if(navigator.userAgent.indexOf('Mac') > -1) {
      return true
    }
    return false
  }


  title = 'bookstore';
}

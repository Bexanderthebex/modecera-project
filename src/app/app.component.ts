import { Component, AfterViewChecked, ViewEncapsulation } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked{
  title = 'app';

  ngAfterViewChecked() {
    window.componentHandler.upgradeAllRegistered();
  }
}

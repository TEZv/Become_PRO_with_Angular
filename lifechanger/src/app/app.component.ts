import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DarkModeService } from './services/dark-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'lifechanger';

  private darkModeSubscription: Subscription = new Subscription();

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeSubscription = this.darkModeService.isDarkMode$.subscribe(
      (isDarkMode) => {
        if (isDarkMode) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
  }
}

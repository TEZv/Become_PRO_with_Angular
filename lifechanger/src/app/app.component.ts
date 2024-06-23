
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isDarkMode$: Observable<boolean> = this.darkModeService.isDarkMode$;
  private darkModeSubscription: Subscription = new Subscription();

  // State to determine if the current route is the blog route
  isBlogRoute: boolean = false;

  constructor(
    private router: Router,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    // Subscribe to dark mode state
    this.darkModeSubscription = this.darkModeService.isDarkMode$.subscribe(
      (isDarkMode) => {
        if (isDarkMode) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }
    );
    // Subscribe to router events to detect route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the blog route
        this.isBlogRoute = event.urlAfterRedirects.includes('/blog');
      }
    });
  }
  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
  }
}

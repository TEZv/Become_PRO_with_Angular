import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private darkModeService: DarkModeService) {}

  get isDarkMode$(): Observable<boolean> {
    return this.darkModeService.isDarkMode$;
  }

  onToggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}

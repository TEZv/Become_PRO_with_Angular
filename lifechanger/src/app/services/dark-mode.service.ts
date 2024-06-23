import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isDarkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  toggleDarkMode(): void {
    this.darkModeSubject.next(!this.darkModeSubject.value);
  }
}

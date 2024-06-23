import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormVisibilityService {
  private formVisibleSubject = new BehaviorSubject<boolean>(false);
  formVisible$ = this.formVisibleSubject.asObservable();

  showForm() {
    this.formVisibleSubject.next(true);
  }

  hideForm() {
    this.formVisibleSubject.next(false);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormVisibilityService } from '../../services/form-visibility.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {
  contactForm!: FormGroup;
  isFormVisible = false;

  constructor(private formBuilder: FormBuilder, private formVisibilityService: FormVisibilityService) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Zа-яА-Я]+$/), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Zа-яА-Я]+$/), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(150)]],
    });

    this.formVisibilityService.formVisible$.subscribe(visible => {
      this.isFormVisible = visible;
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  hideForm(): void {
    this.isFormVisible = false;
    this.contactForm.reset();
    this.formVisibilityService.hideForm();
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }

    // Handle the form submission, e.g., send the data to a server
    console.log('Form Submitted', this.contactForm.value);
    this.hideForm();
  }
}

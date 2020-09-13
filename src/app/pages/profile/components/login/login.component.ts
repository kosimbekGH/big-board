import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  regForm: FormGroup;
  hide = true;
  submitted: boolean;
  loginSubmitted: boolean;
  errorMessage: string;
  errorLoginMessage: string;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createRegForm();
    this.createLoginForm();
  }

  hideReg(): void {
    this.hide = !this.hide;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.regForm.valid) {
      this.profileService.register(this.regForm.value)
        .subscribe(res => {
          this.router.navigate(['/']);
        }, error => this.errorMessage = error);
    }
  }

  onSubmitLog(): void {
    this.loginSubmitted = true;
    if (this.loginForm.valid) {
      this.profileService.login(this.loginForm.value)
        .subscribe(res => {
          this.router.navigate(['/']);
        }, error => this.errorLoginMessage = error);
    }
  }

  get f(): any {
    return this.regForm.controls;
  }

  get flog(): any {
    return this.loginForm.controls;
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private createRegForm(): void {
    this.regForm = this.fb.group({
      id: Date.now(),
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      confidentiality: [false, Validators.required]
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdService } from '../../../../services/ad.service';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss']
})
export class NewAdComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adService: AdService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      id: new Date().getTime(),
      category: ['', Validators.required],
      title: ['', Validators.required],
      mark: ['', Validators.required],
      status: ['', Validators.required],
      price: ['', Validators.required],
      torg: false,
      obmen: false,
      description: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const user = JSON.parse(localStorage.getItem('UserData'));
      const adData = {
        ...this.form.value,
        userId: user.id,
        userName: user.name
      };

      this.adService.create(adData)
        .subscribe(console.log);
    }
  }
}

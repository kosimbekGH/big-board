import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdService } from '../../../../services/ad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from '../../../../services/file.service';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss']
})
export class NewAdComponent implements OnInit {

  form: FormGroup;
  fileLoader: boolean;

  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private adService: AdService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fileService: FileService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      id: Date.now(),
      category: ['', Validators.required],
      title: ['', Validators.required],
      mark: ['', Validators.required],
      status: ['', Validators.required],
      price: ['', Validators.required],
      torg: false,
      obmen: false,
      description: ['', Validators.required],
      city: ['', Validators.required],
      created: new Date(),
      image: '',
      adStatus: 0
    });

    if (this.id !== 'new') {
      this.adService.getOne(+this.id)
        .subscribe(res => this.form.patchValue(res));
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const user = JSON.parse(localStorage.getItem('UserData'));
      const adData = {
        ...this.form.value,
        userId: user.id,
        phoneNumber: user.phoneNumber,
        userName: user.name,
        created: new Date()
      };

      if (this.id === 'new') {
        this.adService.create(adData)
          .subscribe(() => this.router.navigate(['/personal-area']));
      } else {
        this.adService.update(adData)
          .subscribe(() => this.router.navigate(['/personal-area']));
      }
    }
  }

  onChange(e: any): void {
    this.fileLoader = true;
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    this.fileService.save(formData)
      .subscribe((res: any) => {
        if (res.success) {
          this.fileLoader = false;
          this.form.get('image').setValue(res.data.url);
        }
      });
  }
}

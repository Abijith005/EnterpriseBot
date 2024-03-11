import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { AdminService } from '../admin.service';
import { CommunicationService } from '../../communication.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-change-captain',
  templateUrl: './change-captain.component.html',
  styleUrls: ['./change-captain.component.css'],
})
export class ChangeCaptainComponent {
  isSubmitted: boolean = false;
  teamForm: FormGroup = new FormGroup({});

  private _ngUnsbscribe = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) private id: string,
    private _fb: FormBuilder,
    private _matdialogeRef: MatDialogRef<ChangeCaptainComponent>,
    private _adminServices: AdminService,
    private _communicationService:CommunicationService,
    private _ngToaster:NgToastService
  ) {}

  ngOnInit(): void {
    this.teamForm = this._fb.group({
      name: ['', [Validators.required]],
    });
  }

  get formControls() {
    return this.teamForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.teamForm.valid) {
      return;
    }

    const data = this.teamForm.getRawValue();

    this._adminServices
      .changeCaptain(data, this.id)
      .pipe(takeUntil(this._ngUnsbscribe))
      .subscribe((res) => {
        this._communicationService.changeCaptain(this.id,data.name,'captain')
        this._ngToaster.success({
          position: 'topCenter',
          duration: 2000,
          detail: res.message,
        });
        this._matdialogeRef.close();
      });
  }

  close() {
    this._matdialogeRef.close();
  }

  ngOnDestroy(): void {
    this._ngUnsbscribe.next();
    this._ngUnsbscribe.complete();
  }
}

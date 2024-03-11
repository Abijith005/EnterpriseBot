import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../admin.service';
import { Subject, takeUntil } from 'rxjs';
import { CommunicationService } from '../../communication.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-change-coach',
  templateUrl: './change-coach.component.html',
  styleUrls: ['./change-coach.component.css']
})
export class ChangeCoachComponent {
  isSubmitted: boolean = false;
  teamForm: FormGroup = new FormGroup({});

  private _ngUnsbscribe = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) private id: string,
    private _fb: FormBuilder,
    private _matdialogeRef: MatDialogRef<ChangeCoachComponent>,
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
      .changeCoach(data, this.id)
      .pipe(takeUntil(this._ngUnsbscribe))
      .subscribe((res) => {
        this._communicationService.changeCoach(this.id,data.name,'coach')
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

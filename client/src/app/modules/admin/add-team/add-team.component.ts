import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../admin.service';
import { Subject, takeUntil } from 'rxjs';
import { IteamData } from 'src/app/interfaces/interfaces';
import { CommunicationService } from '../../communication.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  isSubmitted: boolean = false;
  teamForm: FormGroup = new FormGroup({});

  private _ngUnsbscribe = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _matdialogeRef: MatDialogRef<AddTeamComponent>,
    private _adminServices: AdminService,
    private _ngToaster:NgToastService
  ) {}

  ngOnInit(): void {
    this.teamForm = this._fb.group({
      name: ['', [Validators.required]],
      captain: ['', [Validators.required]],
      coach: ['', [Validators.required]],
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

    const data: IteamData = this.teamForm.getRawValue();

    this._adminServices
      .addTeam(data)
      .pipe(takeUntil(this._ngUnsbscribe))
      .subscribe((res) => {
        this._ngToaster.success({
          position: 'topCenter',
          duration: 2000,
          detail: res.message,
        });
        this._matdialogeRef.close()
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

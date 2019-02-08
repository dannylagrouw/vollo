import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export abstract class ErrorAction implements Action {
  abstract type: string;
  abstract fout: HttpErrorResponse;
}

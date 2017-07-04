import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

type Payload = Object;
interface MetaData { };
export type SkillLibraryAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class SkillLibraryActions {

}

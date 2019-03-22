import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleAvailableService {

  constructor() { }
  ModuleName: String;
  map = new Map();

}

import { Ingredients } from '../routes';
import {PreparationStep} from './preparation-step';

export class CookableItem {
  constructor(
    name: Ingredients,
    steps?: PreparationStep[]
  ) {
    this.name = name;

    if (steps) {
      this._steps = steps;
    } else {
      this._steps = [new PreparationStep(`Cook ${this.name}`, 25)];
    }
  }

  public name: Ingredients;
  public get cookTime() {
    return this._steps.reduce((acc, step) => acc + step.time, 0);
  }



  _steps: PreparationStep[];

  public get steps() {
    return this._steps;
  }

}

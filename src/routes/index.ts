import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import type {FormLayoutResponsiveStep} from '@vaadin/form-layout';
import '@vaadin/form-layout';
import '@vaadin/text-field';
import '@vaadin/time-picker';
import '@vaadin/number-field';
import '@vaadin/button';
import {NumberFieldValueChangedEvent} from '@vaadin/number-field';
import {TimePickerValueChangedEvent} from '@vaadin/time-picker';

import {CookableItem} from '../classes/cookable-item';
import {PreparationStep} from '../classes/preparation-step';

export const enum Ingredients {
  Potatoes = 'Potatoes',
  YorkshirePuddings = 'Yorkshire Puddings',
  Carrots = 'Carrots',
  Broccoli = 'Broccoli',
  Stuffing = 'Stuffing',
  CauliflowerCheese = 'Cauliflower Cheese',
  Chicken = 'Chicken',
}

import '@vaadin/checkbox';
import '@vaadin/checkbox-group';
import {CheckboxGroupValueChangedEvent} from '@vaadin/checkbox-group';

const extras = [
  Ingredients.Potatoes,
  Ingredients.YorkshirePuddings,
  Ingredients.Carrots,
  Ingredients.Broccoli,
  Ingredients.Stuffing,
  Ingredients.CauliflowerCheese,
];

type StepWithTime = {
  step: PreparationStep;
  time: Date;
};

const CHICKEN_REST_TIME = 25;

@customElement('index-route')
export class IndexRoute extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: var(--lumo-space-m);
        padding-right: var(--lumo-space-m);
      }

      .steps {
        display: flex;
        flex-direction: column;
      }

      .instructions {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      vaadin-number-field > input {
        height: var(--lumo-size-l);
      }

      vaadin-time-picker > input {
        height: var(--lumo-size-l);
      }
    `;
  }

  @state()
  endTime = '14:00';

  @state()
  chickenCookTime = 60;

  @state()
  selectedExtraNames = [Ingredients.Potatoes, Ingredients.YorkshirePuddings];

  /**
   * The total cook time for the chicken, including rest time in minutes.
   */
  get totalCookTime() {
    return this.chickenCookTime + CHICKEN_REST_TIME;
  }

  private responsiveSteps: FormLayoutResponsiveStep[] = [
    // Use one column by default
    {minWidth: 0, columns: 1},
    // Use two columns for viewports wider than 600px
    {minWidth: '600px', columns: 2},
  ];

  get startTime() {
    const endTime = new Date();
    endTime.setHours(Number(this.endTime.split(':')[0]));
    endTime.setMinutes(Number(this.endTime.split(':')[1]));
    endTime.setSeconds(0);
    endTime.setMilliseconds(0);
    const startTime = new Date(
      endTime.getTime() - this.totalCookTime * 60 * 1000
    );
    return startTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  renderSteps(
    chickenCookTime: number,
    selectedExtras: Ingredients[],
    endTime: string
  ) {
    const YorkshirePuddings = new CookableItem(Ingredients.YorkshirePuddings);
    const Carrots = new CookableItem(Ingredients.Carrots);
    const Broccoli = new CookableItem(Ingredients.Broccoli);
    const Stuffing = new CookableItem(Ingredients.Stuffing);
    const CauliflowerCheese = new CookableItem(Ingredients.CauliflowerCheese);

    const Chicken = new CookableItem(Ingredients.Chicken, [
      new PreparationStep('Cook chicken', chickenCookTime),
      new PreparationStep('Rest chicken', CHICKEN_REST_TIME),
    ]);

    const Potatoes = new CookableItem(Ingredients.Potatoes, [
      new PreparationStep(
        'Put the oven tray for the potatoes in',
        chickenCookTime + CHICKEN_REST_TIME - 60
      ),
      new PreparationStep('Put the potatoes in', 35),
      new PreparationStep('Turn potatoes, and put back in', 25),
    ]);

    const allIngredients = [
      YorkshirePuddings,
      Carrots,
      Broccoli,
      Stuffing,
      CauliflowerCheese,
      Chicken,
      Potatoes,
    ];

    const selectedIngredients = [
      ...allIngredients.filter((ingredient) =>
        selectedExtras.includes(ingredient.name)
      ),
      Chicken,
    ];

    const allStepsWithTime: StepWithTime[] = [];

    for (const ingredient of selectedIngredients) {
      let lastStepFinish = getTimeAsDate(endTime);

      for (const step of ingredient.steps.reverse()) {
        const stepStartTime = new Date(
          lastStepFinish.getTime() - step.time * 60 * 1000
        );

        allStepsWithTime.push({step, time: stepStartTime});

        lastStepFinish = stepStartTime;
      }
    }

    const sortedSteps = allStepsWithTime.sort(
      (a, b) => a.time.getTime() - b.time.getTime()
    );

    const groupedSteps = sortedSteps.reduce((acc, step) => {
      const time = step.time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      if (!acc[time]) {
        acc[time] = [];
      }
      acc[time].push(step.step);
      return acc;
    }, {} as {[key: string]: PreparationStep[]});

    return html`
      <div class="steps">
        ${Object.keys(groupedSteps).map((time) => {
          return html`
            <div>
              <h4>${time}</h4>
              <ul>
                ${groupedSteps[time].map((step) => {
                  return html`<li>${step.name} - ${step.time} minutes</li>`;
                })}
              </ul>
            </div>
          `;
        })}
      </div>
    `;
  }

  render(): TemplateResult {
    return html`
      <vaadin-form-layout .responsiveSteps="${this.responsiveSteps}">
        <vaadin-checkbox-group
          colspan="2"
          label="Extras"
          .value="${this.selectedExtraNames}"
          @value-changed="${(event: CheckboxGroupValueChangedEvent) => {
            this.selectedExtraNames = event.detail.value as Ingredients[];
          }}"
          theme="vertical"
        >
          ${extras.map(
            (extra) => html`
              <vaadin-checkbox value="${extra}">${extra}</vaadin-checkbox>
            `
          )}
        </vaadin-checkbox-group>
        <vaadin-time-picker
          label="End Time"
          value=${this.endTime}
          .step="${60 * 15}"
          @value-changed=${(e: TimePickerValueChangedEvent) => {
            this.endTime = e.detail.value;
          }}
        ></vaadin-time-picker>
        <vaadin-number-field
          label="Chicken Cook Time"
          value=${this.chickenCookTime}
          @value-changed="${(e: NumberFieldValueChangedEvent) => {
            this.chickenCookTime = Number(e.detail.value);
          }}"
          min="0"
          max="240"
          step="5"
          has-controls
        ></vaadin-number-field>
      </vaadin-form-layout>

      <div class="instructions">
        <h3>Start Time: ${this.startTime}</h3>

        ${this.renderSteps(
          this.chickenCookTime,
          this.selectedExtraNames,
          this.endTime
        )}
        <div><h3>End Time: ${this.endTime}</h3></div>
      </div>
    `;
  }
}

function getTimeAsDate(time: string): Date {
  const timeAsDate = new Date();
  timeAsDate.setHours(Number(time.split(':')[0]));
  timeAsDate.setMinutes(Number(time.split(':')[1]));
  timeAsDate.setSeconds(0);
  timeAsDate.setMilliseconds(0);
  return timeAsDate;
}

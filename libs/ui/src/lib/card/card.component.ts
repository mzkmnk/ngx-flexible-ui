import {Component} from "@angular/core";

@Component({
  selector: 'm-card',
  standalone: true,
  template: `
    <div class="flex flex-col py-4 px-6 gap-4 border border-slate-300 rounded-lg w-auto h-auto">
      <ng-content select="m-card-header"></ng-content>

      <ng-content select="m-card-content"></ng-content>

      <ng-content select="m-card-footer"></ng-content>
    </div>
  `,
})
export class CardComponent {
}
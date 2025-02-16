import {Component} from "@angular/core";

@Component({
  selector: 'm-card-content',
  standalone: true,
  template: `
    <div class="flex flex-col gap-2">
      <ng-content></ng-content>
    </div>
  `
})
export class CardContentComponent {
}
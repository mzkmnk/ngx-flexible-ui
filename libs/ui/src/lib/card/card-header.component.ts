import {Component} from "@angular/core";

@Component({
  selector: 'm-card-header',
  standalone: true,
  template: `
    <div class="flex flex-col">
      <ng-content select="m-card-title"></ng-content>
      <ng-content select="m-card-subtitle"></ng-content>
    </div>
  `
})
export class CardHeaderComponent {
}

@Component({
  selector: 'm-card-title',
  standalone: true,
  template: `
    <h3 class="text-lg font-semibold">
      <ng-content></ng-content>
    </h3>
  `
})
export class CardTitleComponent {
}

@Component({
  selector: 'm-card-subtitle',
  standalone: true,
  template: `
    <p class="text-sm text-slate-500">
      <ng-content></ng-content>
    </p>
  `
})
export class CardSubtitleComponent {
}
import {Component} from "@angular/core";

@Component({
  selector:'m-card',
  standalone:true,
  template:`
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
}
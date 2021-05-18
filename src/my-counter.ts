import { Component, Input } from "@angular/core";

@Component({
  selector: "my-counter",
  template: `<button (click)="dec($event)">
      -
    </button>
    <span>{{ count }}</span>
    <button (click)="inc($event)">
      +
    </button>`,
  styles: [
    `
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `,
  ],
})
export class CounterComponent {
  @Input() count: number = 5;

  dec() {
    this.count--;
  }

  inc() {
    this.count++;
  }
}

import { packd_export_3 } from 'https://srv.divriots.com/packd/@angular/core,@angular/platform-browser,@angular/platform-browser-dynamic,tslib,zone.js/dist/zone';const { __decorate,__metadata } = packd_export_3;;
import { packd_export_0 } from 'https://srv.divriots.com/packd/@angular/core,@angular/platform-browser,@angular/platform-browser-dynamic,tslib,zone.js/dist/zone';const { Component,Input } = packd_export_0;;
let CounterComponent = class CounterComponent {
    constructor() {
        this.count = 5;
    }
    dec() {
        this.count--;
    }
    inc() {
        this.count++;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], CounterComponent.prototype, "count", void 0);
CounterComponent = __decorate([
    Component({
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
], CounterComponent);
export { CounterComponent };
//# sourceMappingURL=my-counter.js.map
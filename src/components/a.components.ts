import { Component } from "@angular/core"

@Component({
    selector: 'app-a',
    template: `<p>a-1 component</p><p>a-2 component</p>`,
    styles: [':host {display:flex;} :host(.active){color: blue;}'],
    standalone: true,
})

export class AComponent {
    title = 'first_angular';
}

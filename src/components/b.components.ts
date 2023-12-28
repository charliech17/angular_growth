import { Component } from "@angular/core"

@Component({
    selector: 'app-b',
    template: `
        <p>b-1 component</p>
        <p>b-2 component</p>
        <h5>h5 in b component</h5>
    `,
    styles: [`
        :host-context{
            background:green;
        } 
        :host-context(.hihi) h5{ 
            color: orange
        } 
        p{
            color: brown; 
            :host-context(.hihi) &{color: purple};
        }
    `],
    standalone: true,
})

export class BComponent {
    title = 'first_angular';
}

import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    template: `
        <div class="job-ad">
            <h4>{{ headline }}</h4>
            {{ body }}
        </div>
    `,
    styles:`
        .job-ad{
            background-color: green;
            border-radius: 8px;
            padding: 16px;
            border: 1px solid black;
        }
    `,
})
export class HeroJobAdComponent {
    @Input() headline!: string;
    @Input() body!: string;
}
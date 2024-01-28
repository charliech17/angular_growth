import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    template: `
        <div class="hero-profile">
            <h3>Featured Hero Profile</h3>
            <h4>{{ name }}</h4>
            <p>{{ bio }}</p>
            <strong>Hire this hero today!</strong>
        </div>
    `,
    styles:`
        .hero-profile {
            background-color: blue;
            color:  white;
            padding: 16px;
            border: 1px solid black;
            border-radius: 8px;
        }
    `,
})
export class HeroProfileComponent {
    @Input() name!: string;
    @Input() bio!: string;
}
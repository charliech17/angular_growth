import { Injectable } from "@angular/core";
import { HeroProfileComponent } from "../components/HeroProfileComponent.component";
import { HeroJobAdComponent } from "../components/HeroJobAdComponent.component";

@Injectable()
export class Adservice {
    getAds() {
        return [
            {
                component: HeroProfileComponent,
                inputs: { name: 'Dr. IQ', bio: 'Smart as they come' },
            },
            {
                component: HeroProfileComponent,
                inputs: { name: 'Bombasto', bio: 'Brave as they come' },
            },
            {
                component: HeroJobAdComponent,
                inputs: {
                    headline: 'Hiring for several positions',
                    body: 'Submit your resume today!',
                },
            },
            {
                component: HeroJobAdComponent,
                inputs: {
                    headline: 'Openings in all departments',
                    body: 'Apply today',
                },
            },
        ]
    }
}
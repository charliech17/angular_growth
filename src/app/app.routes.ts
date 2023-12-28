import { Routes } from '@angular/router';
import { HomeDynamicComponent } from "./pages/home-dynamic/home-dynamic.component"
import { HomeComponent } from "./pages/home/home.component"
import { NotFoundComponent } from "./pages/not-found/not-found.component"

export const routes: Routes = [
    {path:"",component: HomeComponent},
    {path:"home/:dynamicRoute",component: HomeDynamicComponent},
    {path:"home",component: HomeComponent},
    {path:"**",component: NotFoundComponent},
];

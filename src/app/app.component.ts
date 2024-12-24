import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConfigrationComponent } from './components/configration/configration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { StructuralDirectiveComponent } from "./components/structural-directive/structural-directive.component";
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProj';
}

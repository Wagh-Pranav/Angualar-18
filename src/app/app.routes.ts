import { Routes } from '@angular/router';
import { ConfigrationComponent } from './components/configration/configration.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IfElseComponent } from './components/Control Flow/if-else/if-else.component';
import { ForLoopComponent } from './components/Control Flow/for-loop/for-loop.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { Reactive } from '@angular/core/primitives/signals';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';

export const routes: Routes = [
    { path: 'Configration-component', component: ConfigrationComponent },
    { path: 'Data-Binding', component: DataBindingComponent },
    { path: 'Structural-Directive', component: StructuralDirectiveComponent },
    { path: 'Attribute-Directive', component: AttributeDirectiveComponent },
    { path: 'Navbar-project', component: NavbarComponent },
    { path: 'If-Else', component: IfElseComponent },
    { path: 'For-Loop', component: ForLoopComponent },
    { path: 'Template-Form', component: TemplateFormComponent },
    { path: 'Reactive', component: ReactiveComponent },
    { path: 'Get-API', component: GetApiComponent },
    { path: 'Post-API', component: PostApiComponent }

];

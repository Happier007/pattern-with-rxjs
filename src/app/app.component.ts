import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from './main';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, UsersListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'pattern-with-rxjs';
}

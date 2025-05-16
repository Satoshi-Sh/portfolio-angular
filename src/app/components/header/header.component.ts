import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
  <header>
    <nav>
        <span routerLink="/">{{ title() }}</span>
        <ul>
            <li routerLink="/blog">Blog</li>
            <li routerLink="/contact">Contact</li>
        </ul>
    </nav>
</header>`,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   title= signal("Home")
}

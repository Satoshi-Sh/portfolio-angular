import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithubSquare,faKaggle,faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface Item {
  "icon": IconDefinition,
  "alt": string,
  "url": string
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  contacts :Item[] = [
    {"icon":faGithubSquare,"alt": "GitHub icon", "url":"https://github.com/Satoshi-Sh/"},
    {"icon":faKaggle,"alt": "Kaggle icon", "url":"https://www.kaggle.com/satoshiss"},
    {"icon":faLinkedin,"alt": "LinkedIn icon", "url":"https://www.linkedin.com/in/satoshi-89bb58a8/"},
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
})
export class StackComponent {
  getImages(): [string, string][] {
    return [
      ['../../assets/stack/html-logo.svg', 'HTML5 logo'],
      ['../../assets/stack/css-logo.svg', 'CSS logo'],
      ['../../assets/stack/js-logo.svg', 'JS logo'],
      ['../../assets/stack/angular-logo.svg', 'Angular logo'],
      ['../../assets/stack/react-logo.svg', 'React logo'],
      ['../../assets/stack/bootstrap-logo.svg', 'Bootstrap logo'],
      ['../../assets/stack/tailwind-logo.svg', 'Tailwind logo'],
      ['../../assets/stack/sass-logo.svg', 'SASS logo'],
      ['../../assets/stack/git-logo.svg', 'Git logo'],
      ['../../assets/stack/vscode-logo.svg', 'VSCode logo'],
      ['../../assets/stack/github-logo.svg', 'Github logo'],
      ['../../assets/stack/seo-logo.svg', 'SEO logo'],
    ];
  }
}

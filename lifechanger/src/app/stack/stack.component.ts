import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
})
export class StackComponent {
  getImages(): [string, string][] {
    return [
      ['../../assets/stack/html.svg', 'HTML5 logo'],
      ['../../assets/stack/css.svg', 'CSS logo'],
      ['../../assets/stack/js.svg', 'JS logo'],
      ['../../assets/stack/react.svg', 'React logo'],
      ['../../assets/stack/redux.svg', 'Redux logo'],
      ['../../assets/stack/bootstrap.svg', 'Bootstrap logo'],
      ['../../assets/stack/tailwind.svg', 'Tailwind logo'],
      ['../../assets/stack/sass.svg', 'SASS logo'],
      ['../../assets/stack/git.svg', 'Git logo'],
      ['../../assets/stack/greensock.svg', 'Greensock logo'],
      ['../../assets/stack/vscode.svg', 'Vscode logo'],
      ['../../assets/stack/github.svg', 'Github logo'],
    ];
  }
}

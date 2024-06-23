import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service'; // Import the DarkModeService
import { ProjectCardsInfo } from '../../models/project-card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input() projectCardsInfo!: ProjectCardsInfo;

  // State for dark mode
  isDarkMode: boolean = false;

  // Define your SVG sources as strings
  githubSvgSource!: string;
  linkSvgSource!: string;

  // Define your SVG templates
  private svgTemplateGithub = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" fill="FILL_COLOR_GITHUB"></path>
</svg>
  `;

  private svgTemplateLink = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <path
      d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
      stroke="FILL_COLOR_LINK"
      stroke-width="1.5"
      stroke-linecap="round"
    ></path>
    <path
      d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
      stroke="FILL_COLOR_LINK"
      stroke-width="1.5"
      stroke-linecap="round"
    ></path>
  </g>
</svg>
`;

  constructor(private darkModeService: DarkModeService) {} // Inject DarkModeService

  ngOnInit(): void {
    // Subscribe to the dark mode state
    this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      this.updateSVGColors(); // Update SVG colors based on dark mode state
    });
  }

  getImageSource(): string {
    if (this.isDarkMode) {
      return this.projectCardsInfo.image.darkModePath;
    }
    return this.projectCardsInfo.image.path;
  }

  // Update SVG colors based on dark mode state
  updateSVGColors(): void {
    const githubFillColor = this.isDarkMode ? '#982fee' : '#000';
    const githubSvgContent = this.svgTemplateGithub.replace(
      'FILL_COLOR_GITHUB',
      githubFillColor
    );
    this.githubSvgSource = `data:image/svg+xml;charset=UTF-8;base64,${btoa(
      githubSvgContent
    )}`;

    const linkFillColor = this.isDarkMode ? '#982fee' : '#000';
    const linkSvgContent = this.svgTemplateLink.replace(
      /FILL_COLOR_LINK/g, 
      linkFillColor
    );
    this.linkSvgSource = `data:image/svg+xml;charset=UTF-8;base64,${btoa(
      linkSvgContent
    )}`;
  }
}
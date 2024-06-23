import { Component, Input, OnInit } from '@angular/core';
import { BlogCardsInfo } from '../../models/blog-card';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent implements OnInit {
  @Input() blogCardsInfo!: BlogCardsInfo;

  // State for dark mode
  isDarkMode: boolean = false;

  // Define your SVG sources as strings
  linkSvgSource!: string;

  // Define your SVG templates

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
      return this.blogCardsInfo.image.darkModePath;
    }
    return this.blogCardsInfo.image.path;
  }

  // Update SVG colors based on dark mode state
  updateSVGColors(): void {

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

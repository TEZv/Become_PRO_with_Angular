import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormVisibilityService } from '../services/form-visibility.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnChanges, OnInit {
  @Input() isDarkMode: boolean = false;
  @Input() isBlogRoute: boolean = false;

  isFormVisible = false;

  constructor(private formVisibilityService: FormVisibilityService) {}

  ngOnInit(): void {
    this.formVisibilityService.formVisible$.subscribe((visible) => {
      this.isFormVisible = visible;
    });
  }

  showForm(): void {
    this.formVisibilityService.showForm();
  }

  // Define a default link target attribute
  linkTarget: string = '_blank';

  // Method to update the link target attribute
  updateLinkTarget(target: string): void {
    this.linkTarget = target;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isDarkMode']) {
      this.updateSVGSource();
    }
    if (changes['isBlogRoute']) {
      // Update the link target based on the route
      this.updateLinkTarget(this.isBlogRoute ? '_self' : '_blank');
    }
  }

  private svgTemplateGithub: string = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" fill="FILL_COLOR_GITHUB"></path>
    </svg>
  `;

  private svgTemplateTelegram: string = `
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0,0,256,256"
    style="fill:#000000;">
    <g fill="FILL_COLOR_TELEGRAM" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c12.703,0 23,10.297 23,23c0,12.703 -10.297,23 -23,23c-12.703,0 -23,-10.297 -23,-23c0,-12.703 10.297,-23 23,-23zM32.934,34.375c0.423,-1.298 2.405,-14.234 2.65,-16.783c0.074,-0.772 -0.17,-1.285 -0.648,-1.514c-0.578,-0.278 -1.434,-0.139 -2.427,0.219c-1.362,0.491 -18.774,7.884 -19.78,8.312c-0.954,0.405 -1.856,0.847 -1.856,1.487c0,0.45 0.267,0.703 1.003,0.966c0.766,0.273 2.695,0.858 3.834,1.172c1.097,0.303 2.346,0.04 3.046,-0.395c0.742,-0.461 9.305,-6.191 9.92,-6.693c0.614,-0.502 1.104,0.141 0.602,0.644c-0.502,0.502 -6.38,6.207 -7.155,6.997c-0.941,0.959 -0.273,1.953 0.358,2.351c0.721,0.454 5.906,3.932 6.687,4.49c0.781,0.558 1.573,0.811 2.298,0.811c0.725,0 1.107,-0.955 1.468,-2.064z"></path></g></g>
  </svg>
  `;

  private svgTemplateLinkedIn: string = `
  <svg
  class="nav-svg"
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  viewBox="0 0 30 30"
  fill="none"
>
  <g clip-path="url(#clip0_10_208)">
    <path
      d="M15 0.600098C7.04701 0.600098 0.600006 7.0471 0.600006 15.0001C0.600006 22.9531 7.04701 29.4001 15 29.4001C22.953 29.4001 29.4 22.9531 29.4 15.0001C29.4 7.0471 22.953 0.600098 15 0.600098ZM11.475 20.9686H8.55901V11.5846H11.475V20.9686ZM9.99901 10.4326C9.07801 10.4326 8.48251 9.7801 8.48251 8.9731C8.48251 8.1496 9.09601 7.5166 10.0365 7.5166C10.977 7.5166 11.553 8.1496 11.571 8.9731C11.571 9.7801 10.977 10.4326 9.99901 10.4326ZM22.125 20.9686H19.209V15.7681C19.209 14.5576 18.786 13.7356 17.7315 13.7356C16.926 13.7356 16.4475 14.2921 16.236 14.8276C16.158 15.0181 16.1385 15.2881 16.1385 15.5566V20.9671H13.221V14.5771C13.221 13.4056 13.1835 12.4261 13.1445 11.5831H15.678L15.8115 12.8866H15.87C16.254 12.2746 17.1945 11.3716 18.768 11.3716C20.6865 11.3716 22.125 12.6571 22.125 15.4201V20.9686Z"
      fill="FILL_COLOR_LINKEDIN"
    />
  </g>
  <defs>
    <clipPath id="clip0_10_208">
      <rect width="30" height="30" fill="white" />
    </clipPath>
  </defs>
</svg>
  `;

  githubSvgSource!: string;
  telegramSvgSource!: string;
  linkedInSvgSource!: string;

  // Update the SVG source based on the current fill color
  updateSVGSource(): void {
    const githubFillColor = this.isDarkMode ? '#a270ff' : '#1e0e62';
    const githubSvgContent = this.svgTemplateGithub.replace(
      'FILL_COLOR_GITHUB',
      githubFillColor
    );
    this.githubSvgSource =
      'data:image/svg+xml;charset=UTF-8;base64,' + btoa(githubSvgContent);

    const telegramFillColor = this.isDarkMode ? '#cacba4' : '#a270ff';
    const telegramSvgContent = this.svgTemplateTelegram.replace(
      'FILL_COLOR_TELEGRAM',
      telegramFillColor
    );
    this.telegramSvgSource =
      'data:image/svg+xml;charset=UTF-8;base64,' + btoa(telegramSvgContent);

    const linkedInFillColor = this.isDarkMode ? '#a270ff' : '#1e0e62';
    const linkedInSvgContent = this.svgTemplateLinkedIn.replace(
      'FILL_COLOR_LINKEDIN',
      linkedInFillColor
    );
    this.linkedInSvgSource =
      'data:image/svg+xml;charset=UTF-8;base64,' + btoa(linkedInSvgContent);
  }
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

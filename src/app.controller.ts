import { Controller, Get } from '@nestjs/common';
import {navigation_response} from '@responses/navigation';
import {content_response} from '@responses/content';
import {settings_response} from '@responses/settings';
import { ApiResponse, ApiModelProperty, ApiUseTags } from '@nestjs/swagger';
import {Page, Navigation, Settings} from '@models/index';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@ApiUseTags('api')
@Controller('/api')
export class AppController {
  constructor() {}

  @Get('/content')
  @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: Page})
  getContent(): Observable<Page> {
    return of(content_response).pipe(delay(200));
  }
  
  @Get('/navigation')
  @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: Navigation})
  getNavigation(): Observable<Navigation> {
    return of(navigation_response).pipe(delay(200));
  }

  @Get('/settings')
  getSettings(): Observable<Settings> {
    return of(settings_response).pipe(delay(200));
  }
}

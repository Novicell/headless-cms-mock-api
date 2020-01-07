import { ApiModelProperty } from "@nestjs/swagger";

type Nullable<T> = T | null;

export class Link {
  @ApiModelProperty()
  name?: string;
  @ApiModelProperty()
  url?: string;
}

export class PageLink extends Link {
  @ApiModelProperty()
  target?: string;
  @ApiModelProperty()
  url: string;
}

export class NavigationItem {
  @ApiModelProperty()
  id?: number;
  @ApiModelProperty()
  hasChildren: boolean;
  @ApiModelProperty()
  level: number;
  @ApiModelProperty()
  nodeId?: number;
  @ApiModelProperty()
  children: Nullable<NavigationItem[]>;
  @ApiModelProperty()
  link: PageLink;
}
export class FocalPoint {
  @ApiModelProperty()
  top: number;
  @ApiModelProperty()
  left: number;
  @ApiModelProperty()
  center?: string | number;
}

export class Image {
  @ApiModelProperty()
  path?: string;
  @ApiModelProperty()
  url?: string;
  @ApiModelProperty()
  altText?: string;
  @ApiModelProperty()
  title?: string;
  @ApiModelProperty()
  focalPoint?: FocalPoint;
}


export class SocialLink extends PageLink {
  @ApiModelProperty()
  icon?: Image;
  @ApiModelProperty()
  type: string;
}

export class PageMeta {
  @ApiModelProperty()
  statusCode?: number; // 200, 301, 302, 404
  @ApiModelProperty()
  redirectUrl?: Nullable<string>; // Used with 301, 302
  @ApiModelProperty()
  path?: string; // Used for setting the navigation active - e.g. -1, 2, 203
  @ApiModelProperty()
  template: string; // FrontPage, TextPage ..
  @ApiModelProperty()
  culture?: Nullable<Culture>; // to handle different languages
}

export class PageSeo {
  @ApiModelProperty()
  title: string;
  @ApiModelProperty()
  description: string;
  @ApiModelProperty()
  keywords: string;
  @ApiModelProperty()
  index: string | boolean;
  @ApiModelProperty()
  follow: string | boolean;
  @ApiModelProperty()
  canonical?: string;
}

export class PageContent {
  @ApiModelProperty()
  content?: any;
  @ApiModelProperty()
  grid?: any; // depends on CMS
}

export class Page {
  @ApiModelProperty()
  meta?: PageMeta; // Only used in application
  @ApiModelProperty()
  seo?: PageSeo; // Used in <head>
  @ApiModelProperty()
  content?: PageContent; // Body
  @ApiModelProperty()
  hero?: any;
}
export class SiteHeader {
  @ApiModelProperty()
  navigation?: PageLink[];
}

export class SiteFooter {
  @ApiModelProperty()
  navigation?: PageLink[];
  @ApiModelProperty()
  secondaryNavigation?: PageLink[];
}
export class Brand {
  @ApiModelProperty()
  logo?: Image;
  @ApiModelProperty()
  logoAlternative?: Image;
}

export class SiteSettings {
  @ApiModelProperty()
  brand?: Brand;
  @ApiModelProperty()
  segments?: PageLink[];
  @ApiModelProperty()
  legalLinks?: PageLink[];
}


export class Settings {
  @ApiModelProperty()
  siteSettings: SiteSettings;
  @ApiModelProperty()
  siteFooter: SiteFooter;
  @ApiModelProperty()
  siteHeader: SiteHeader;
}

export class Navigation {
  @ApiModelProperty()
  primary?: NavigationItem[];
  @ApiModelProperty()
  secondary?: PageLink[];
}

export class ImageSize {
  @ApiModelProperty()
  windowWidth?: number;
  @ApiModelProperty()
  imageWidth: number;
  @ApiModelProperty()
  imageHeight?: number;
  @ApiModelProperty()
  queryString?: string;
}

export class GridRowModel {
  @ApiModelProperty()
  config: any;
  @ApiModelProperty()
  editors: GridEditor[];
}

export class GridEditor {
  @ApiModelProperty()
  alias: string;
  @ApiModelProperty()
  column: number;
  @ApiModelProperty()
  viewModel: any;
}

export class Culture {
  @ApiModelProperty()
  lang?: string;
}
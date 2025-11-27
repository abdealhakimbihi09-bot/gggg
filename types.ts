export interface PageInfo {
  title: string;
  game_icon_url: string;
  version: string;
  platforms: string[];
  rating: string;
  reviews: string;
  downloads: string;
  developer: string;
  updated_date: string;
  size: string;
}

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

export interface HeaderConfig {
  site_name: string;
  breadcrumb: string[];
  top_button: {
    text: string;
    color: string;
  };
}

export interface HeroCardConfig {
  show_verified_badge: boolean;
  show_download_button: boolean;
  download_button_text: string;
  style: string;
}

export interface ScreenshotsConfig {
  title: string;
  auto_play: boolean;
  interval_seconds: number;
  transition: string;
  images: string[];
}

export interface DescriptionConfig {
  title: string;
  content: string;
  key_features: string[];
}

export interface DownloadCardConfig {
  title: string;
  version: string;
  size: string;
  recommended: boolean;
  button_text: string;
}

export interface FooterConfig {
  copyright_text: string;
  minimal_style: boolean;
}

export interface AppData {
  page_info: PageInfo;
  header: HeaderConfig;
  main_sections: {
    hero_card: HeroCardConfig;
    screenshots_slider: ScreenshotsConfig;
    full_description: DescriptionConfig;
  };
  download_section: {
    two_cards: DownloadCardConfig[];
  };
  footer: FooterConfig;
}
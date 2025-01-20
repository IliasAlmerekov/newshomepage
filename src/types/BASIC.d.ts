
declare namespace BASIC {
  export interface NavigationItems {
    link: {
      cached_url?: string;
    };
    title?: string;
  }
  export interface GlobalProps {
    logo: {
      filename?: string;
    };
    alt?: string;
    copyright?: string;
    Navigation?: NavigationItems[];
  }

  export interface LanguageProps {
    language?: string,
    langSwitch?: string,
    slug?: string,
  }
}

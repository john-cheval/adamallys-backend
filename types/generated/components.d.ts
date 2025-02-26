import type { Schema, Attribute } from '@strapi/strapi';

export interface NavigationRequestAQouteButton extends Schema.Component {
  collectionName: 'components_navigation_request_a_qoute_buttons';
  info: {
    displayName: 'Request a qoute button';
  };
  attributes: {
    Email: Attribute.String;
    Link: Attribute.String;
  };
}

export interface NavigationLinks extends Schema.Component {
  collectionName: 'components_navigation_links';
  info: {
    displayName: 'Links';
    icon: 'attachment';
  };
  attributes: {
    Label: Attribute.String;
    Link: Attribute.String;
  };
}

export interface NavigationIcon extends Schema.Component {
  collectionName: 'components_navigation_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface NavigationIconLink extends Schema.Component {
  collectionName: 'components_navigation_icon_links';
  info: {
    displayName: 'Icon Link';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Caption: Attribute.String;
  };
}

export interface FooterAdamallysMarineShipChandlingServices
  extends Schema.Component {
  collectionName: 'components_footer_adamallys_marine_ship_chandling_services';
  info: {
    displayName: 'Adamallys Marine Ship chandling services';
  };
  attributes: {
    Location: Attribute.String;
    Telephone: Attribute.String;
    Fax: Attribute.String;
    Email: Attribute.String;
  };
}

export interface FooterAdamallysLlc extends Schema.Component {
  collectionName: 'components_footer_adamallys_llcs';
  info: {
    displayName: 'Adamallys LLC';
  };
  attributes: {
    Location: Attribute.String;
    Telephone: Attribute.String;
    Fax: Attribute.String;
    Email: Attribute.String;
  };
}

export interface FooterAdamallysGroup2 extends Schema.Component {
  collectionName: 'components_footer_adamallys_group_2s';
  info: {
    displayName: 'Adamallys Group 2';
  };
  attributes: {
    address: Attribute.String;
    Telephone: Attribute.String;
    Fax: Attribute.String;
    Email: Attribute.String;
  };
}

export interface CardsWhyChooseCard extends Schema.Component {
  collectionName: 'components_cards_why_choose_cards';
  info: {
    displayName: 'why choose card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    info: Attribute.Text;
    Link: Attribute.String;
  };
}

export interface CardsTitleList extends Schema.Component {
  collectionName: 'components_cards_title_lists';
  info: {
    displayName: 'Title List';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    lists: Attribute.Component<'cards.list', true>;
  };
}

export interface CardsTitleContnet extends Schema.Component {
  collectionName: 'components_cards_title_contnets';
  info: {
    displayName: 'Title Contnet';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface CardsServiceCard extends Schema.Component {
  collectionName: 'components_cards_service_cards';
  info: {
    displayName: 'Service_card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Excerpt: Attribute.Text;
  };
}

export interface CardsProvisionsCard extends Schema.Component {
  collectionName: 'components_cards_provisions_cards';
  info: {
    displayName: 'Provisions Card';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    info: Attribute.Text;
    Link: Attribute.Text;
    List: Attribute.Component<'cards.title-list', true>;
  };
}

export interface CardsPortCard extends Schema.Component {
  collectionName: 'components_cards_port_cards';
  info: {
    displayName: 'Port Card';
  };
  attributes: {
    Name: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CardsOtherServices extends Schema.Component {
  collectionName: 'components_cards_other_services';
  info: {
    displayName: 'Other_Services';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Services: Attribute.Component<'cards.other-service-card', true>;
  };
}

export interface CardsOtherServiceCard extends Schema.Component {
  collectionName: 'components_cards_other_service_cards';
  info: {
    displayName: 'Other_Service_Card';
  };
  attributes: {
    Title: Attribute.String;
    Caption: Attribute.Text;
    Link: Attribute.String;
  };
}

export interface CardsMilestoneCard extends Schema.Component {
  collectionName: 'components_cards_milestone_cards';
  info: {
    displayName: 'Milestone Card';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CardsMarineRopesCard extends Schema.Component {
  collectionName: 'components_cards_marine_ropes_cards';
  info: {
    displayName: 'Marine Ropes Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    info: Attribute.Text;
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    list: Attribute.Component<'cards.why-choose-card', true>;
    Info2: Attribute.Text;
  };
}

export interface CardsList extends Schema.Component {
  collectionName: 'components_cards_lists';
  info: {
    displayName: 'list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    list: Attribute.Text;
    Label: Attribute.String;
  };
}

export interface CardsListCard extends Schema.Component {
  collectionName: 'components_cards_list_cards';
  info: {
    displayName: 'list card';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    info: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lists: Attribute.Component<'cards.list', true>;
    link: Attribute.String;
    Secound_Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Info2: Attribute.Text;
  };
}

export interface CardsIeList extends Schema.Component {
  collectionName: 'components_cards_ie_lists';
  info: {
    displayName: 'IEList';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    List: Attribute.Component<'cards.list', true>;
  };
}

export interface CardsIeContent extends Schema.Component {
  collectionName: 'components_cards_ie_contents';
  info: {
    displayName: 'IEContent';
  };
  attributes: {
    Title: Attribute.String;
    Caption: Attribute.Text;
  };
}

export interface CardsHistoyCard extends Schema.Component {
  collectionName: 'components_cards_histoy_cards';
  info: {
    displayName: 'Histoy Card';
    description: '';
  };
  attributes: {
    Year: Attribute.String;
    Info: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CardsExpertiseCard extends Schema.Component {
  collectionName: 'components_cards_expertise_cards';
  info: {
    displayName: 'Expertise Card';
  };
  attributes: {
    content: Attribute.Text;
    link: Attribute.String;
  };
}

export interface CardsDistributorsAndStockistsCard extends Schema.Component {
  collectionName: 'components_cards_distributors_and_stockists_cards';
  info: {
    displayName: 'Distributors & Stockists Card';
  };
  attributes: {
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    info: Attribute.Text;
    link: Attribute.String;
  };
}

export interface CardsContentCard extends Schema.Component {
  collectionName: 'components_cards_content_cards';
  info: {
    displayName: 'Content Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link: Attribute.String;
    Caption: Attribute.Text;
    sub_title: Attribute.Text;
  };
}

export interface CardsCertificationsAndMemberships extends Schema.Component {
  collectionName: 'components_cards_certifications_and_memberships';
  info: {
    displayName: 'Certifications & Memberships';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
  };
}

export interface CardsButtons extends Schema.Component {
  collectionName: 'components_cards_buttons';
  info: {
    displayName: 'Buttons';
  };
  attributes: {
    Title: Attribute.Text;
    Buttons: Attribute.Component<'navigation.links', true>;
  };
}

export interface BannerLandingPageVideoSlider extends Schema.Component {
  collectionName: 'components_banner_landing_page_video_sliders';
  info: {
    displayName: 'Landing_Page_Video_Slider';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    NextButtonImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BannerDistributorsStockistsBanner extends Schema.Component {
  collectionName: 'components_banner_distributors_stockists_banners';
  info: {
    displayName: 'Distributors Stockists Banner';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navigation.request-a-qoute-button': NavigationRequestAQouteButton;
      'navigation.links': NavigationLinks;
      'navigation.icon': NavigationIcon;
      'navigation.icon-link': NavigationIconLink;
      'footer.adamallys-marine-ship-chandling-services': FooterAdamallysMarineShipChandlingServices;
      'footer.adamallys-llc': FooterAdamallysLlc;
      'footer.adamallys-group-2': FooterAdamallysGroup2;
      'cards.why-choose-card': CardsWhyChooseCard;
      'cards.title-list': CardsTitleList;
      'cards.title-contnet': CardsTitleContnet;
      'cards.service-card': CardsServiceCard;
      'cards.provisions-card': CardsProvisionsCard;
      'cards.port-card': CardsPortCard;
      'cards.other-services': CardsOtherServices;
      'cards.other-service-card': CardsOtherServiceCard;
      'cards.milestone-card': CardsMilestoneCard;
      'cards.marine-ropes-card': CardsMarineRopesCard;
      'cards.list': CardsList;
      'cards.list-card': CardsListCard;
      'cards.ie-list': CardsIeList;
      'cards.ie-content': CardsIeContent;
      'cards.histoy-card': CardsHistoyCard;
      'cards.expertise-card': CardsExpertiseCard;
      'cards.distributors-and-stockists-card': CardsDistributorsAndStockistsCard;
      'cards.content-card': CardsContentCard;
      'cards.certifications-and-memberships': CardsCertificationsAndMemberships;
      'cards.buttons': CardsButtons;
      'banner.landing-page-video-slider': BannerLandingPageVideoSlider;
      'banner.distributors-stockists-banner': BannerDistributorsStockistsBanner;
    }
  }
}

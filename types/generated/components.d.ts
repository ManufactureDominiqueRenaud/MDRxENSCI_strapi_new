import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCustomHomepageSlideHeroHeaderHome
  extends Struct.ComponentSchema {
  collectionName: 'components_components_custom_homepage_slide_hero_header_homes';
  info: {
    displayName: 'slideHeroHeaderHome';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'components.link', false>;
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    externalLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ProjectsComponentsImageAndTextSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_image_and_text_sections';
  info: {
    displayName: 'imageAndTextSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    isGrayBackground: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    isImageOnLeft: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    paragraph3: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProjectsComponentsImageSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_image_sections';
  info: {
    displayName: 'imageSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    isGrayBackground: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface ProjectsComponentsStudent extends Struct.ComponentSchema {
  collectionName: 'components_projects_components_students';
  info: {
    displayName: 'student';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ProjectsComponentsTextSection extends Struct.ComponentSchema {
  collectionName: 'components_projects_components_text_sections';
  info: {
    displayName: 'textSection';
  };
  attributes: {
    isGrayBackground: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    paragraph3: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ProjectsComponentsTwoImagesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_projects_components_two_images_sections';
  info: {
    displayName: 'twoImagesSection';
  };
  attributes: {
    image1: Schema.Attribute.Media<'images'>;
    image2: Schema.Attribute.Media<'images'>;
    isGrayBackground: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface ProjectsComponentsVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_projects_components_video_sections';
  info: {
    displayName: 'videoSection';
  };
  attributes: {
    isGrayBackground: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface SectionsHomepageAtelierProjet extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_atelier_projets';
  info: {
    displayName: 'atelierProjet';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHomepageCarousel extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_carousels';
  info: {
    displayName: 'carousel';
  };
  attributes: {
    carouselImages: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHomepageCollaboration extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_collaborations';
  info: {
    displayName: 'collaboration';
  };
  attributes: {
    ctaEnsci: Schema.Attribute.Component<'components.link', false>;
    ctaPress: Schema.Attribute.Component<'components.link', false>;
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHomepageDominiqueRenaud
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_dominique_renauds';
  info: {
    displayName: 'dominiqueRenaud';
  };
  attributes: {
    citation: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface SectionsHomepageHeroHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_hero_headers';
  info: {
    displayName: 'heroHeader';
  };
  attributes: {
    slides: Schema.Attribute.Component<
      'components-custom-homepage.slide-hero-header-home',
      true
    >;
  };
}

export interface SectionsHomepageMdrDetails extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_mdr_details';
  info: {
    displayName: 'mdrDetails';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHomepageProjectFolio extends Struct.ComponentSchema {
  collectionName: 'components_sections_homepage_project_folios';
  info: {
    displayName: 'projectFolio';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components-custom-homepage.slide-hero-header-home': ComponentsCustomHomepageSlideHeroHeaderHome;
      'components.link': ComponentsLink;
      'projects-components.image-and-text-section': ProjectsComponentsImageAndTextSection;
      'projects-components.image-section': ProjectsComponentsImageSection;
      'projects-components.student': ProjectsComponentsStudent;
      'projects-components.text-section': ProjectsComponentsTextSection;
      'projects-components.two-images-section': ProjectsComponentsTwoImagesSection;
      'projects-components.video-section': ProjectsComponentsVideoSection;
      'sections-homepage.atelier-projet': SectionsHomepageAtelierProjet;
      'sections-homepage.carousel': SectionsHomepageCarousel;
      'sections-homepage.collaboration': SectionsHomepageCollaboration;
      'sections-homepage.dominique-renaud': SectionsHomepageDominiqueRenaud;
      'sections-homepage.hero-header': SectionsHomepageHeroHeader;
      'sections-homepage.mdr-details': SectionsHomepageMdrDetails;
      'sections-homepage.project-folio': SectionsHomepageProjectFolio;
    }
  }
}

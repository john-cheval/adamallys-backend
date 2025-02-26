import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutPageAboutPage extends Schema.SingleType {
  collectionName: 'about_pages';
  info: {
    singularName: 'about-page';
    pluralName: 'about-pages';
    displayName: 'About Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    Info: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    AboutCards: Attribute.Component<'cards.milestone-card', true>;
    ci_title: Attribute.String;
    ci_info: Attribute.Text;
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    history_title: Attribute.String;
    history_subtitle: Attribute.String;
    HistoryList: Attribute.Component<'cards.histoy-card', true>;
    PresentDayTitle: Attribute.String;
    PresentDayImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ExpertiseMedia: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ExpertiseCards: Attribute.Component<'cards.expertise-card', true>;
    PresentDayInfo: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-page.about-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-page.about-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBaseCategoryBaseCategory extends Schema.CollectionType {
  collectionName: 'base_categories';
  info: {
    singularName: 'base-category';
    pluralName: 'base-categories';
    displayName: 'Base Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    Slug: Attribute.UID<'api::base-category.base-category', 'Name'>;
    secondary_categories: Attribute.Relation<
      'api::base-category.base-category',
      'oneToMany',
      'api::secondary-category.secondary-category'
    >;
    general_categories: Attribute.Relation<
      'api::base-category.base-category',
      'oneToMany',
      'api::category.category'
    >;
    specific_categories: Attribute.Relation<
      'api::base-category.base-category',
      'oneToMany',
      'api::specific-category.specific-category'
    >;
    products: Attribute.Relation<
      'api::base-category.base-category',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::base-category.base-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::base-category.base-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'General Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    Slug: Attribute.UID<'api::category.category', 'Name'>;
    products: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::product.product'
    >;
    base_category: Attribute.Relation<
      'api::category.category',
      'manyToOne',
      'api::base-category.base-category'
    >;
    secondary_categories: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::secondary-category.secondary-category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCertificationsAndMembershipsPageCertificationsAndMembershipsPage
  extends Schema.SingleType {
  collectionName: 'certifications_and_memberships_pages';
  info: {
    singularName: 'certifications-and-memberships-page';
    pluralName: 'certifications-and-memberships-pages';
    displayName: 'Certifications & Memberships Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Certifications: Attribute.Component<
      'cards.certifications-and-memberships',
      true
    >;
    Memberships: Attribute.Component<
      'cards.certifications-and-memberships',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::certifications-and-memberships-page.certifications-and-memberships-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::certifications-and-memberships-page.certifications-and-memberships-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactPageContactPage extends Schema.SingleType {
  collectionName: 'contact_pages';
  info: {
    singularName: 'contact-page';
    pluralName: 'contact-pages';
    displayName: 'Contact Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AddressOne: Attribute.String;
    AddressTwo: Attribute.String;
    MobileNumber: Attribute.String;
    Fax: Attribute.String;
    Email: Attribute.String;
    Buttons: Attribute.Component<'cards.buttons'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-page.contact-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-page.contact-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDigitalizationAndTechnologyAtAdamallysPageDigitalizationAndTechnologyAtAdamallysPage
  extends Schema.SingleType {
  collectionName: 'digitalization_and_technology_at_adamallys_pages';
  info: {
    singularName: 'digitalization-and-technology-at-adamallys-page';
    pluralName: 'digitalization-and-technology-at-adamallys-pages';
    displayName: 'Digitalization & Technology at Adamallys Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    Banner_Title: Attribute.String;
    Banner_Info: Attribute.Text;
    Banner_Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Cards: Attribute.Component<'cards.list-card', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::digitalization-and-technology-at-adamallys-page.digitalization-and-technology-at-adamallys-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::digitalization-and-technology-at-adamallys-page.digitalization-and-technology-at-adamallys-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDistributorsAndStockistsPageDistributorsAndStockistsPage
  extends Schema.SingleType {
  collectionName: 'distributors_and_stockists_pages';
  info: {
    singularName: 'distributors-and-stockists-page';
    pluralName: 'distributors-and-stockists-pages';
    displayName: 'Distributors & Stockists Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Banner: Attribute.Component<'banner.distributors-stockists-banner'>;
    Cards: Attribute.Component<'cards.distributors-and-stockists-card', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::distributors-and-stockists-page.distributors-and-stockists-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::distributors-and-stockists-page.distributors-and-stockists-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDryDockingServicePageDryDockingServicePage
  extends Schema.SingleType {
  collectionName: 'dry_docking_service_pages';
  info: {
    singularName: 'dry-docking-service-page';
    pluralName: 'dry-docking-service-pages';
    displayName: 'Dry Docking Service Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner_title: Attribute.Text;
    banner_info: Attribute.Text;
    cards: Attribute.Component<'cards.distributors-and-stockists-card', true>;
    Why_Choose_Title: Attribute.String;
    Why_Choose_info: Attribute.Text;
    Why_Choose_Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    banner_background_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    OtherServices: Attribute.Component<'cards.other-services'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dry-docking-service-page.dry-docking-service-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dry-docking-service-page.dry-docking-service-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    About: Attribute.Text;
    Adamallys_Group: Attribute.Component<'navigation.links', true>;
    AdamallysGroup2: Attribute.Component<'footer.adamallys-group-2'>;
    AdamallysLLC: Attribute.Component<'footer.adamallys-llc'>;
    AdamallysMarineShipChandlingServices: Attribute.Component<'footer.adamallys-marine-ship-chandling-services'>;
    Buttons: Attribute.Component<'navigation.links', true>;
    Socials: Attribute.Component<'navigation.icon-link', true>;
    Copyright_Text: Attribute.String;
    Side_Sticky_Links: Attribute.Component<'navigation.icon-link', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Schema.SingleType {
  collectionName: 'headers';
  info: {
    singularName: 'header';
    pluralName: 'headers';
    displayName: 'Header';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    NavLinks: Attribute.Component<'navigation.links', true>;
    Button: Attribute.Component<'navigation.request-a-qoute-button'>;
    Secound_Header_Nav: Attribute.Component<'navigation.links', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'Home Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Our_Company_Content: Attribute.Blocks;
    Hero: Attribute.Component<'banner.landing-page-video-slider', true>;
    CertificationsMemberships: Attribute.Component<
      'navigation.icon-link',
      true
    >;
    ServiceCard: Attribute.Component<'cards.service-card', true>;
    BrandContent: Attribute.Text;
    Icons: Attribute.Component<'navigation.icon', true>;
    ContentCard: Attribute.Component<'cards.content-card', true>;
    news_and_events: Attribute.Relation<
      'api::home-page.home-page',
      'oneToMany',
      'api::news-and-event.news-and-event'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndustrialAndEnergySectorSuppliesPageIndustrialAndEnergySectorSuppliesPage
  extends Schema.SingleType {
  collectionName: 'industrial_and_energy_sector_supplies_pages';
  info: {
    singularName: 'industrial-and-energy-sector-supplies-page';
    pluralName: 'industrial-and-energy-sector-supplies-pages';
    displayName: 'Industrial & Energy Sector Supplies Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    info: Attribute.Text;
    Video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    video_title: Attribute.String;
    OtherServices: Attribute.Component<'cards.other-services'>;
    KeyProducts: Attribute.DynamicZone<['cards.ie-list', 'cards.ie-content']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::industrial-and-energy-sector-supplies-page.industrial-and-energy-sector-supplies-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::industrial-and-energy-sector-supplies-page.industrial-and-energy-sector-supplies-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMarineLogisticsAndWarehousingPageMarineLogisticsAndWarehousingPage
  extends Schema.SingleType {
  collectionName: 'marine_logistics_and_warehousing_pages';
  info: {
    singularName: 'marine-logistics-and-warehousing-page';
    pluralName: 'marine-logistics-and-warehousing-pages';
    displayName: 'Marine logistics & warehousing page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.Text;
    list: Attribute.Component<'cards.why-choose-card', true>;
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    video_title: Attribute.String;
    Warehousing_info: Attribute.Text;
    Warehousing_videos: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Cards: Attribute.Component<'cards.why-choose-card', true>;
    OtherServices: Attribute.Component<'cards.other-services'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::marine-logistics-and-warehousing-page.marine-logistics-and-warehousing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::marine-logistics-and-warehousing-page.marine-logistics-and-warehousing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMarineRopesAndMooringRopesPageMarineRopesAndMooringRopesPage
  extends Schema.SingleType {
  collectionName: 'marine_ropes_and_mooring_ropes_pages';
  info: {
    singularName: 'marine-ropes-and-mooring-ropes-page';
    pluralName: 'marine-ropes-and-mooring-ropes-pages';
    displayName: 'Marine Ropes & Mooring Ropes Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner_title: Attribute.String;
    banner_info: Attribute.Text;
    banner_backeground_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Card: Attribute.Component<'cards.marine-ropes-card', true>;
    OtherServices: Attribute.Component<'cards.other-services'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::marine-ropes-and-mooring-ropes-page.marine-ropes-and-mooring-ropes-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::marine-ropes-and-mooring-ropes-page.marine-ropes-and-mooring-ropes-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMilestoneSectionMilestoneSection extends Schema.SingleType {
  collectionName: 'milestone_sections';
  info: {
    singularName: 'milestone-section';
    pluralName: 'milestone-sections';
    displayName: 'Milestone Section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Background_Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Milestones: Attribute.Component<'cards.milestone-card', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::milestone-section.milestone-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::milestone-section.milestone-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsAndEventNewsAndEvent extends Schema.CollectionType {
  collectionName: 'news_and_events';
  info: {
    singularName: 'news-and-event';
    pluralName: 'news-and-events';
    displayName: 'News and Events';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    Excerpt: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Slug: Attribute.UID<'api::news-and-event.news-and-event', 'title'>;
    Content: Attribute.Blocks;
    Date: Attribute.Date;
    Banner_Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-and-event.news-and-event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-and-event.news-and-event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOtherServiceOtherService extends Schema.SingleType {
  collectionName: 'other_services';
  info: {
    singularName: 'other-service';
    pluralName: 'other-services';
    displayName: 'Other Services';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    OtherServices: Attribute.Component<'cards.why-choose-card', true>;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::other-service.other-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::other-service.other-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPortPort extends Schema.SingleType {
  collectionName: 'ports';
  info: {
    singularName: 'port';
    pluralName: 'ports';
    displayName: 'Port Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    UAE_Ports: Attribute.Component<'cards.port-card', true>;
    Oman: Attribute.Component<'cards.port-card', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::port.port', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::port.port', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPagePrivacyPolicyPage
  extends Schema.SingleType {
  collectionName: 'privacy_policy_pages';
  info: {
    singularName: 'privacy-policy-page';
    pluralName: 'privacy-policy-pages';
    displayName: 'Privacy Policy Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Component<'cards.title-contnet', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy-page.privacy-policy-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::privacy-policy-page.privacy-policy-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SKU: Attribute.String;
    specific_category: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::specific-category.specific-category'
    >;
    secondary_category: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::secondary-category.secondary-category'
    >;
    general_category: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::category.category'
    >;
    specific_categorys: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::specific-category.specific-category'
    >;
    UOM: Attribute.String;
    MTML: Attribute.String;
    Product_Expanation: Attribute.Blocks;
    base_categories: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::base-category.base-category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProvisionsAndBondedStoresPageProvisionsAndBondedStoresPage
  extends Schema.SingleType {
  collectionName: 'provisions_and_bonded_stores_pages';
  info: {
    singularName: 'provisions-and-bonded-stores-page';
    pluralName: 'provisions-and-bonded-stores-pages';
    displayName: 'Provisions & Bonded Stores Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner_title: Attribute.Text;
    banner_info: Attribute.Text;
    banner_background_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Cards: Attribute.Component<'cards.provisions-card', true>;
    OtherServices: Attribute.Component<'cards.other-services'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::provisions-and-bonded-stores-page.provisions-and-bonded-stores-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::provisions-and-bonded-stores-page.provisions-and-bonded-stores-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSecondaryCategorySecondaryCategory
  extends Schema.CollectionType {
  collectionName: 'secondary_categories';
  info: {
    singularName: 'secondary-category';
    pluralName: 'secondary-categories';
    displayName: 'Secondary Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    Slug: Attribute.UID<'api::secondary-category.secondary-category', 'Name'>;
    products: Attribute.Relation<
      'api::secondary-category.secondary-category',
      'oneToMany',
      'api::product.product'
    >;
    base_category: Attribute.Relation<
      'api::secondary-category.secondary-category',
      'manyToOne',
      'api::base-category.base-category'
    >;
    general_categories: Attribute.Relation<
      'api::secondary-category.secondary-category',
      'manyToMany',
      'api::category.category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::secondary-category.secondary-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::secondary-category.secondary-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShipSparePartsPageShipSparePartsPage
  extends Schema.SingleType {
  collectionName: 'ship_spare_parts_pages';
  info: {
    singularName: 'ship-spare-parts-page';
    pluralName: 'ship-spare-parts-pages';
    displayName: 'Ship Spare Parts Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner_title: Attribute.Text;
    banner_Info: Attribute.Text;
    banner_background_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Why_Choose_Title: Attribute.String;
    Why_Choose_Info: Attribute.Text;
    Why_Choose_Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Cards: Attribute.Component<'cards.list-card', true>;
    OtherServices: Attribute.Component<'cards.other-services'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ship-spare-parts-page.ship-spare-parts-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ship-spare-parts-page.ship-spare-parts-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShipSupplyPageShipSupplyPage extends Schema.SingleType {
  collectionName: 'ship_supply_pages';
  info: {
    singularName: 'ship-supply-page';
    pluralName: 'ship-supply-pages';
    displayName: 'Ship Supply Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
    Product_and_service: Attribute.Component<'cards.service-card', true>;
    OtherServices: Attribute.Component<'cards.other-services'>;
    Buttons: Attribute.Component<'cards.buttons', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ship-supply-page.ship-supply-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ship-supply-page.ship-supply-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpecificCategorySpecificCategory
  extends Schema.CollectionType {
  collectionName: 'specific_categories';
  info: {
    singularName: 'specific-category';
    pluralName: 'specific-categories';
    displayName: 'Specific Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    Slug: Attribute.UID<'api::specific-category.specific-category', 'Name'>;
    products: Attribute.Relation<
      'api::specific-category.specific-category',
      'oneToMany',
      'api::product.product'
    >;
    base_category: Attribute.Relation<
      'api::specific-category.specific-category',
      'manyToOne',
      'api::base-category.base-category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::specific-category.specific-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::specific-category.specific-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSustainabilityAtAdamallysPageSustainabilityAtAdamallysPage
  extends Schema.SingleType {
  collectionName: 'sustainability_at_adamallys_pages';
  info: {
    singularName: 'sustainability-at-adamallys-page';
    pluralName: 'sustainability-at-adamallys-pages';
    displayName: 'Sustainability at Adamallys Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BannerImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    BannerContent: Attribute.Text;
    CSR_Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Content: Attribute.Text;
    fst_content: Attribute.Text;
    sec_content: Attribute.Text;
    third_content: Attribute.Text;
    Cards: Attribute.Component<'cards.list-card', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sustainability-at-adamallys-page.sustainability-at-adamallys-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sustainability-at-adamallys-page.sustainability-at-adamallys-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTechnicalMarineStoresPageTechnicalMarineStoresPage
  extends Schema.SingleType {
  collectionName: 'technical_marine_stores_pages';
  info: {
    singularName: 'technical-marine-stores-page';
    pluralName: 'technical-marine-stores-pages';
    displayName: 'Technical Marine Stores Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner_title: Attribute.Text;
    banner_info: Attribute.Text;
    banner_background_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Tags: Attribute.Component<'cards.list', true>;
    Card: Attribute.Component<'cards.list-card', true>;
    OtherServices: Attribute.Component<'cards.other-services'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::technical-marine-stores-page.technical-marine-stores-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::technical-marine-stores-page.technical-marine-stores-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhyChooseAdamallyWhyChooseAdamally
  extends Schema.SingleType {
  collectionName: 'why_choose_adamallys';
  info: {
    singularName: 'why-choose-adamally';
    pluralName: 'why-choose-adamallys';
    displayName: 'Why Choose Adamallys';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    WhyChoose: Attribute.Component<'cards.why-choose-card', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::why-choose-adamally.why-choose-adamally',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::why-choose-adamally.why-choose-adamally',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-page.about-page': ApiAboutPageAboutPage;
      'api::base-category.base-category': ApiBaseCategoryBaseCategory;
      'api::category.category': ApiCategoryCategory;
      'api::certifications-and-memberships-page.certifications-and-memberships-page': ApiCertificationsAndMembershipsPageCertificationsAndMembershipsPage;
      'api::contact-page.contact-page': ApiContactPageContactPage;
      'api::digitalization-and-technology-at-adamallys-page.digitalization-and-technology-at-adamallys-page': ApiDigitalizationAndTechnologyAtAdamallysPageDigitalizationAndTechnologyAtAdamallysPage;
      'api::distributors-and-stockists-page.distributors-and-stockists-page': ApiDistributorsAndStockistsPageDistributorsAndStockistsPage;
      'api::dry-docking-service-page.dry-docking-service-page': ApiDryDockingServicePageDryDockingServicePage;
      'api::footer.footer': ApiFooterFooter;
      'api::header.header': ApiHeaderHeader;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::industrial-and-energy-sector-supplies-page.industrial-and-energy-sector-supplies-page': ApiIndustrialAndEnergySectorSuppliesPageIndustrialAndEnergySectorSuppliesPage;
      'api::marine-logistics-and-warehousing-page.marine-logistics-and-warehousing-page': ApiMarineLogisticsAndWarehousingPageMarineLogisticsAndWarehousingPage;
      'api::marine-ropes-and-mooring-ropes-page.marine-ropes-and-mooring-ropes-page': ApiMarineRopesAndMooringRopesPageMarineRopesAndMooringRopesPage;
      'api::milestone-section.milestone-section': ApiMilestoneSectionMilestoneSection;
      'api::news-and-event.news-and-event': ApiNewsAndEventNewsAndEvent;
      'api::other-service.other-service': ApiOtherServiceOtherService;
      'api::port.port': ApiPortPort;
      'api::privacy-policy-page.privacy-policy-page': ApiPrivacyPolicyPagePrivacyPolicyPage;
      'api::product.product': ApiProductProduct;
      'api::provisions-and-bonded-stores-page.provisions-and-bonded-stores-page': ApiProvisionsAndBondedStoresPageProvisionsAndBondedStoresPage;
      'api::secondary-category.secondary-category': ApiSecondaryCategorySecondaryCategory;
      'api::ship-spare-parts-page.ship-spare-parts-page': ApiShipSparePartsPageShipSparePartsPage;
      'api::ship-supply-page.ship-supply-page': ApiShipSupplyPageShipSupplyPage;
      'api::specific-category.specific-category': ApiSpecificCategorySpecificCategory;
      'api::sustainability-at-adamallys-page.sustainability-at-adamallys-page': ApiSustainabilityAtAdamallysPageSustainabilityAtAdamallysPage;
      'api::technical-marine-stores-page.technical-marine-stores-page': ApiTechnicalMarineStoresPageTechnicalMarineStoresPage;
      'api::why-choose-adamally.why-choose-adamally': ApiWhyChooseAdamallyWhyChooseAdamally;
    }
  }
}

import type { Schema, Struct } from '@strapi/strapi';

export interface OrderOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_order_order_items';
  info: {
    displayName: 'Order Item';
  };
  attributes: {
    imageUrl: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    productName: Schema.Attribute.String & Schema.Attribute.Required;
    quantity: Schema.Attribute.Integer & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrderShippingAddress extends Struct.ComponentSchema {
  collectionName: 'components_order_shipping_addresses';
  info: {
    displayName: 'Shipping Address';
  };
  attributes: {
    addressLine1: Schema.Attribute.String & Schema.Attribute.Required;
    addressLine2: Schema.Attribute.String;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    pincode: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductAyurvedicProfile extends Struct.ComponentSchema {
  collectionName: 'components_product_ayurvedic_profiles';
  info: {
    displayName: 'Ayurvedic Profile';
  };
  attributes: {
    doshaKarma: Schema.Attribute.String;
    guna: Schema.Attribute.String;
    rasa: Schema.Attribute.String;
    vipaka: Schema.Attribute.String;
    virya: Schema.Attribute.String;
  };
}

export interface ProductBenefit extends Struct.ComponentSchema {
  collectionName: 'components_product_benefits';
  info: {
    displayName: 'Benefit';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductBenefitRow extends Struct.ComponentSchema {
  collectionName: 'components_product_benefit_rows';
  info: {
    displayName: 'Benefit Row';
  };
  attributes: {
    expectedOutcome: Schema.Attribute.String & Schema.Attribute.Required;
    mechanism: Schema.Attribute.String & Schema.Attribute.Required;
    targetArea: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductComparisonPoint extends Struct.ComponentSchema {
  collectionName: 'components_product_comparison_points';
  info: {
    displayName: 'Comparison Point';
  };
  attributes: {
    Brand: Schema.Attribute.String & Schema.Attribute.Required;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProductFaq extends Struct.ComponentSchema {
  collectionName: 'components_product_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductUsageInfo extends Struct.ComponentSchema {
  collectionName: 'components_product_usage_infos';
  info: {
    displayName: 'Usage Info';
  };
  attributes: {
    bestTimeToConsume: Schema.Attribute.String;
    dailyDosage: Schema.Attribute.String;
    howToUse: Schema.Attribute.Text;
    lifestylePairing: Schema.Attribute.Text;
    servingMethod: Schema.Attribute.String;
  };
}

export interface ProductUsageRow extends Struct.ComponentSchema {
  collectionName: 'components_product_usage_rows';
  info: {
    displayName: 'Usage Row';
  };
  attributes: {
    dosage: Schema.Attribute.String & Schema.Attribute.Required;
    frequency: Schema.Attribute.String;
    mixingVehicle: Schema.Attribute.String;
    optimalTiming: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    productTags: Schema.Attribute.Text;
    searchKeywords: Schema.Attribute.Text;
    seoProductDescription: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'order.order-item': OrderOrderItem;
      'order.shipping-address': OrderShippingAddress;
      'product.ayurvedic-profile': ProductAyurvedicProfile;
      'product.benefit': ProductBenefit;
      'product.benefit-row': ProductBenefitRow;
      'product.comparison-point': ProductComparisonPoint;
      'product.faq': ProductFaq;
      'product.usage-info': ProductUsageInfo;
      'product.usage-row': ProductUsageRow;
      'shared.seo': SharedSeo;
    }
  }
}

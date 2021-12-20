export enum LOCALE {
  TR = "tr",
  EN = "en",
}

export enum PAYMENT_GROUP {
  PRODUCT = "PRODUCT",
  LISTING = "LISTING",
  SUBSCRIPTION = "SUBSCRIPTION",
}

export enum BASKET_ITEM_TYPE {
  PHYSICAL = "PHYSICAL",
  VIRTUAL = "VIRTUAL",
}

export enum PAYMENT_CHANNEL {
  MOBILE = "MOBILE",
  WEB = "WEB",
  MOBILE_WEB = "MOBILE_WEB",
  MOBILE_IOS = "MOBILE_IOS",
  MOBILE_ANDROID = "MOBILE_ANDROID",
  MOBILE_WINDOWS = "MOBILE_WINDOWS",
  MOBILE_TABLET = "MOBILE_TABLET",
  MOBILE_PHONE = "MOBILE_PHONE",
}

export enum SUB_MERCHANT_TYPE {
  PERSONAL = "PERSONAL",
  PRIVATE_COMPANY = "PRIVATE_COMPANY",
  LIMITED_OR_JOINT_STOCK_COMPANY = "LIMITED_OR_JOINT_STOCK_COMPANY",
}

export enum CURRENCY {
  TRY = "TRY",
  EUR = "EUR",
  USD = "USD",
  IRR = "IRR",
  GBP = "GBP",
  NOK = "NOK",
  RUB = "RUB",
  CHF = "CHF",
}

export enum APM_TYPE {
  SOFORT = "SOFORT",
  IDEAL = "IDEAL",
  QIWI = "QIWI",
  GIROPAY = "GIROPAY",
}

export enum REFUND_REASON {
  DOUBLE_PAYMENT = "double_payment",
  BUYER_REQUEST = "buyer_request",
  FRAUD = "fraud",
  OTHER = "other",
}

export enum PLAN_PAYMENT_TYPE {
  RECURRING = "RECURRING",
}

export enum SUBSCRIPTION_PRICING_PLAN_INTERVAL {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY",
}

export enum SUBSCRIPTION_UPGRADE_PERIOD {
  NOW = "NOW",
  NEXT_PERIOD = 'NEXT_PERIOD'
}

export enum SUBSCRIPTION_STATUS {
  EXPIRED = "EXPIRED",
  UNPAID = "UNPAID",
  CANCELED = "CANCELED",
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  UPGRADED = "UPGRADED",
}

export enum SUBSCRIPTION_INITIAL_STATUS {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
}

export enum RESOURCE {
  RANDOM_STRING_SIZE = 8,
  RANDOM_HEADER_NAME = "x-iyzi-rnd",
  CLIENT_VERSION = "x-iyzi-client-version",
  AUTHORIZATION = "Authorization",
  IYZI_WS_HEADER_NAME = "IYZWS",
  IYZI_WS_HEADER_NAME_V2 = "IYZWSv2",
  SEPARATOR = ":",
}

/**
 * =========================
 * ROLES Y AUTENTICACIÓN
 * =========================
 */
export const ROLES = {
  SUPER_ADMIN: 'superAdmin',
  ADMIN: 'admin',
  COLABORATOR: 'colaborator',
  REGISTERED: 'registered'
};

export const ALLOWED_ROLES = Object.values(ROLES);

/**
 * =========================
 * TIPOS DE CLIENTE
 * =========================
 */
export const CLIENT_TYPES = {
  MAYORISTA: 'Mayorista',
  MINORISTA: 'Minorista'
};

export const ALLOWED_CLIENT_TYPES = Object.values(CLIENT_TYPES);

/**
 * =========================
 * TIPOS DE PEDIDO
 * =========================
 */
export const ORDER_TYPES = {
  MAYORISTA: 'Mayorista',
  MINORISTA: 'Minorista'
};

export const ALLOWED_ORDER_TYPES = Object.values(ORDER_TYPES);

/**
 * =========================
 * ESTADOS DEL PEDIDO
 * =========================
 */
export const ORDER_STATUS = {
  COMPRADO: 'Comprado',
  PENDIENTE_PAGO: 'Pendiente de Pago',
  GESTIONADO: 'Gestionado',
  ENVIADO: 'Enviado',
  REPARTO: 'Reparto',
  ENTREGADO: 'Entregado',
  CANCELADO: 'Cancelado'
};

export const ALLOWED_ORDER_STATUS = Object.values(ORDER_STATUS);

/**
 * =========================
 * TIPOS DE DESCUENTO
 * =========================
 */
export const DISCOUNT_TYPES = {
  PORCENTAJE: 'Porcentaje',
  FIJO: 'Fijo'
};

export const ALLOWED_DISCOUNT_TYPES = Object.values(DISCOUNT_TYPES);

/**
 * =========================
 * CLASES DE DESCUENTO (LÓGICA DE NEGOCIO)
 * =========================
 */
export const DISCOUNT_KINDS = {
  CUPON: 'Cupon',
  VOLUMEN: 'Volumen',
  ANTIGUEDAD: 'Antiguedad',
  PROMOCION: 'Promocion'
};

export const ALLOWED_DISCOUNT_KINDS = Object.values(DISCOUNT_KINDS);

/**
 * =========================
 * AUDIENCIA DEL DESCUENTO
 * =========================
 */
export const DISCOUNT_AUDIENCE = {
  TODOS: 'Todos',
  MAYORISTA: 'Mayorista',
  MINORISTA: 'Minorista'
};

export const ALLOWED_DISCOUNT_AUDIENCE = Object.values(DISCOUNT_AUDIENCE);

/**
 * =========================
 * CONFIGURACIÓN DE ENTREGA
 * =========================
 */
export const DELIVERY_CONFIG = {
  MIN_DAYS: 3,
  MAX_DAYS: 5
};

/**
 * =========================
 * ESTADOS GENERALES
 * =========================
 */
export const STATUS = {
  ACTIVE: true,
  INACTIVE: false
};

/**
 * =========================
 * PERMISOS DE ADMIN
 * =========================
 */
export const ADMIN_PERMISSIONS = {
  MANAGE_ORDERS: 'manage_orders',
  MANAGE_PRODUCTS: 'manage_products',
  MANAGE_DISCOUNTS: 'manage_discounts',
  MANAGE_USERS: 'manage_users'
};

export const ALLOWED_ADMIN_PERMISSIONS = Object.values(ADMIN_PERMISSIONS);

/**
 * =========================
 * VALIDACIONES GLOBALES
 * =========================
 */
export const VALIDATION_LIMITS = {
  MIN_STOCK: 0,
  MIN_PRICE: 0,
  MIN_QUANTITY: 1
};


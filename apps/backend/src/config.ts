export const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
export const JWT_SECRET = process.env.JWT_SECRET || "dev_jwt_secret";
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";
export const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || "";
export const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || "";
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";

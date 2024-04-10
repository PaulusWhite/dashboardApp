declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "node-fetch";
declare module "*.webp";
declare module "*.svg";

declare module "*.svg" {
  const res: Record<string, string>;
  export default res;
}

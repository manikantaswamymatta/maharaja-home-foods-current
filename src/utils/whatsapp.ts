import config from "@/src/data/config.json";

export const WHATSAPP_NUMBER = config.businessInfo.whatsappNumber;

export const createWhatsAppOrderLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
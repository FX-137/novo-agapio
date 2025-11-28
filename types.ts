export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface BusinessInfo {
  name: string;
  address: string;
  googleMapsQuery: string;
  phone: string;
  secondaryPhone?: string;
  whatsapp: string;
  devWhatsapp: string;
  openingHours: string[];
}
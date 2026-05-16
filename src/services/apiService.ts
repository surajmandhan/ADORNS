
export interface ShopifyProduct {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  updated_at: string;
  images: { src: string }[];
  variants: {
    price: string;
    compare_at_price: string | null;
  }[];
}

export interface ShopifyCollection {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  image?: {
    src: string;
  };
}

export const CATEGORY_HANDLES: Record<string, string> = {
  "Earrings": "earrings",
  "Necklaces": "necklaces",
  "Bracelets": "bracelets",
  "Rings": "rings",
  "Mangalsutras": "mangalsutra",
  "Mens": "mens-collection"
};

const CATEGORY_BANNERS: Record<string, string> = {
  "Earrings": "https://palmonas.com/cdn/shop/files/Earrings_1.webp?v=1773063871&width=3000",
  "Necklaces": "https://palmonas.com/cdn/shop/files/Necklce.webp?v=1778501399&width=2000",
  "Bracelets": "https://palmonas.com/cdn/shop/files/Bracelets_non_men.webp?v=1778501398&width=2000",
  "Rings": "https://palmonas.com/cdn/shop/files/Ring.webp?v=1778501398&width=2000",
  "Mangalsutras": "https://palmonas.com/cdn/shop/files/Mangalsutra_eed5afb8-b9b1-447a-9d0b-e1cfa58d8cb8.webp?v=1778501398&width=2000",
  "Mens": "https://palmonas.com/cdn/shop/files/Bracelets_b40e52fd-db59-4b15-8702-fa95eb757bae.webp?v=1778501398&width=2000"
};

export async function fetchCollectionDetails(categoryName: string): Promise<ShopifyCollection | null> {
  const handle = CATEGORY_HANDLES[categoryName] || categoryName.toLowerCase();
  try {
    const response = await fetch(`https://palmonas.com/collections/${handle}.json`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.collection;
  } catch (error) {
    console.error("Error fetching collection:", error);
    return null;
  }
}

export async function fetchCollectionProducts(categoryName: string): Promise<ShopifyProduct[]> {
  const handle = CATEGORY_HANDLES[categoryName] || categoryName.toLowerCase();
  try {
    const response = await fetch(`https://palmonas.com/collections/${handle}/products.json?limit=250&page=1`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

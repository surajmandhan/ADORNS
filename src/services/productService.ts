
import { Product } from '../context/CartContext';

const API_URL = 'https://palmonas.com/collections/best-seller/products.json?page=1&limit=250';

export async function fetchExternalProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    
    return data.products.map((p: any, index: number) => {
      // Map Shopify JSON to our Product interface
      return {
        id: p.id,
        num: String(index + 1).padStart(3, '0'),
        title: p.title,
        collection: p.vendor || "Signature",
        material: "18k gold vermeil", // Defaulting as specific material isn't always in simple JSON
        category: p.product_type || "Jewellery",
        tags: p.product_type === 'New Arrival' ? ["NEW ARRIVAL"] : ["TRENDING"],
        image: p.images[0]?.src || '',
        images: p.images.map((img: any) => img.src),
        description: p.body_html.replace(/<[^>]*>?/gm, '').slice(0, 200) + '...',
        features: ["Ethically Sourced", "Premium Craftsmanship", "Lifetime Warranty"],
        stock: "In Stock",
        price: Math.round(parseFloat(p.variants[0]?.price || '0')),
        related: []
      };
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

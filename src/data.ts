
import { Product } from './context/CartContext';

function unsplashUrl(id: string, size: number) {
  return `https://images.unsplash.com/photo-${id}?w=${size}&h=${size}&fit=crop&q=70&auto=format`;
}

export const PRODUCTS: Product[] = [
  ...Array.from({ length: 96 }).map((_, i) => {
    const categories = ["Earrings", "Necklaces", "Bracelets", "Rings", "Mangalsutras", "Mens"];
    const materials = ["18k Gold", "925 Silver", "Platinum", "Rose Gold"];
    const category = categories[i % categories.length];
    
    const imageIds = [
      "1601121141461-9d6647bca1ed", "1599643477877-530eb83abc8e", "1523170335258-f5d60ebd7bb4",
      "1617038260897-412d78202b0c", "1611591437281-46da734005ff", "1515562141224-7502c206979a",
      "1591280122880-eec70c6a5810", "1535632063271-cebd2937962c", "1506630448388-4e683c67ddb0"
    ];

    return {
      id: i + 1,
      num: String(i + 1).padStart(3, '0'),
      title: `${category.slice(0, -1)} ${["Elite", "Signature", "Heritage", "Zenith", "Pulse"][i % 5]}`,
      collection: ["AURUM", "LUNAR", "ETHOS", "OASIS", "PRISM"][i % 5],
      material: materials[i % materials.length],
      category,
      tags: ["New", "Trending", "Limited"][i % 3] === "New" ? ["NEW ARRIVAL"] : [],
      image: unsplashUrl(imageIds[i % imageIds.length], 800),
      images: [unsplashUrl(imageIds[i % imageIds.length], 800), unsplashUrl(imageIds[(i + 1) % imageIds.length], 800)],
      description: "A testament to refined craftsmanship, this piece encapsulates the delicate balance between heritage techniques and modern aesthetic sensibilities.",
      features: ["Hand-polished finish", "Hypoallergenic material", "Sustainably sourced metals"],
      stock: "In Stock",
      price: Math.floor(Math.random() * 2000) + 150,
      related: ["004", "012", "045"]
    };
  })
];

export const COLLECTIONS = [
  { name: "AURUM", description: "The Gilded Legacy", image: PRODUCTS.find(p => p.collection === "AURUM")?.image },
  { name: "LUNAR", description: "Ethereal Silver", image: PRODUCTS.find(p => p.collection === "LUNAR")?.image },
  { name: "ETHOS", description: "Modern Heritage", image: PRODUCTS.find(p => p.collection === "ETHOS")?.image },
  { name: "OASIS", description: "Natural Serenity", image: PRODUCTS.find(p => p.collection === "OASIS")?.image },
  { name: "PRISM", description: "Refracted Light", image: PRODUCTS.find(p => p.collection === "PRISM")?.image },
];

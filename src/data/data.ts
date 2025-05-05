interface Products {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}


const products: Products[] = [
    { id: 1, name: "T-Shirt", price: 25, description: "Comfortable cotton t-shirt", imageUrl: "/images/tshirt1.jpg" },
    { id: 2, name: "Hoodie", price: 50, description: "Cozy hoodie for chilly days", imageUrl: "/images/hoodie1.jpg" },
    { id: 3, name: "Jeans", price: 60, description: "Classic blue denim jeans", imageUrl: "/images/jeans1.jpg" },
    { id: 4, name: "Sneakers", price: 80, description: "Stylish and comfortable sneakers", imageUrl: "/images/sneakers1.jpg" },
    { id: 5, name: "Jacket", price: 100, description: "Warm and durable jacket", imageUrl: "/images/jacket1.jpg" },
    { id: 6, name: "Cap", price: 20, description: "Trendy baseball cap", imageUrl: "/images/cap1.jpg" },
    { id: 7, name: "Shorts", price: 30, description: "Lightweight summer shorts", imageUrl: "/images/shorts1.jpg" },
    { id: 8, name: "Sweater", price: 45, description: "Soft wool sweater", imageUrl: "/images/sweater1.jpg" },
    { id: 9, name: "Scarf", price: 15, description: "Warm knitted scarf", imageUrl: "/images/scarf1.jpg" },
    { id: 10, name: "Socks", price: 10, description: "Comfortable cotton socks", imageUrl: "/images/socks1.jpg" },
    { id: 11, name: "Polo Shirt", price: 35, description: "Classic polo shirt", imageUrl: "/images/polo1.jpg" },
    { id: 12, name: "Tracksuit", price: 70, description: "Comfortable tracksuit", imageUrl: "/images/tracksuit1.jpg" },
    { id: 13, name: "Sandals", price: 25, description: "Lightweight summer sandals", imageUrl: "/images/sandals1.jpg" },
    { id: 14, name: "Blazer", price: 120, description: "Stylish formal blazer", imageUrl: "/images/blazer1.jpg" },
    { id: 15, name: "Dress", price: 90, description: "Elegant evening dress", imageUrl: "/images/dress1.jpg" },
    { id: 16, name: "Skirt", price: 40, description: "Flowy summer skirt", imageUrl: "/images/skirt1.jpg" },
    { id: 17, name: "Tank Top", price: 20, description: "Casual tank top", imageUrl: "/images/tanktop1.jpg" },
    { id: 18, name: "Cardigan", price: 55, description: "Cozy knitted cardigan", imageUrl: "/images/cardigan1.jpg" },
    { id: 19, name: "Boots", price: 110, description: "Durable leather boots", imageUrl: "/images/boots1.jpg" },
    { id: 20, name: "Gloves", price: 15, description: "Warm winter gloves", imageUrl: "/images/gloves1.jpg" },
    { id: 21, name: "Belt", price: 25, description: "Stylish leather belt", imageUrl: "/images/belt1.jpg" },
    { id: 22, name: "Vest", price: 35, description: "Lightweight summer vest", imageUrl: "/images/vest1.jpg" },
    { id: 23, name: "Raincoat", price: 75, description: "Waterproof raincoat", imageUrl: "/images/raincoat1.jpg" },
    { id: 24, name: "Overalls", price: 65, description: "Comfortable denim overalls", imageUrl: "/images/overalls1.jpg" },
    { id: 25, name: "Swimsuit", price: 30, description: "Stylish swimsuit", imageUrl: "/images/swimsuit1.jpg" },
    { id: 26, name: "Leggings", price: 25, description: "Stretchy and comfortable leggings", imageUrl: "/images/leggings1.jpg" },
    { id: 27, name: "Beanie", price: 15, description: "Warm knitted beanie", imageUrl: "/images/beanie1.jpg" },
    { id: 28, name: "Sunglasses", price: 50, description: "Trendy sunglasses", imageUrl: "/images/sunglasses1.jpg" },
    { id: 29, name: "Watch", price: 150, description: "Elegant wristwatch", imageUrl: "/images/watch1.jpg" },
    { id: 30, name: "Backpack", price: 60, description: "Durable and spacious backpack", imageUrl: "/images/backpack1.jpg" },
    { id: 31, name: "Suit", price: 200, description: "Formal business suit", imageUrl: "/images/suit1.jpg" },
    { id: 32, name: "Tie", price: 20, description: "Classic silk tie", imageUrl: "/images/tie1.jpg" },
    { id: 33, name: "Bow Tie", price: 25, description: "Elegant bow tie", imageUrl: "/images/bowtie1.jpg" },
    { id: 34, name: "Cufflinks", price: 30, description: "Stylish cufflinks", imageUrl: "/images/cufflinks1.jpg" },
    { id: 35, name: "Hat", price: 35, description: "Wide-brimmed hat", imageUrl: "/images/hat1.jpg" },
    { id: 36, name: "Coat", price: 150, description: "Warm winter coat", imageUrl: "/images/coat1.jpg" },
    { id: 37, name: "Kimono", price: 80, description: "Traditional Japanese kimono", imageUrl: "/images/kimono1.jpg" },
    { id: 38, name: "Poncho", price: 50, description: "Cozy wool poncho", imageUrl: "/images/poncho1.jpg" },
    { id: 39, name: "Romper", price: 45, description: "Casual summer romper", imageUrl: "/images/romper1.jpg" },
    { id: 40, name: "Jumpsuit", price: 70, description: "Stylish jumpsuit", imageUrl: "/images/jumpsuit1.jpg" },
    { id: 41, name: "Tracksuit Bottoms", price: 40, description: "Comfortable tracksuit bottoms", imageUrl: "/images/tracksuitbottoms1.jpg" },
    { id: 42, name: "Blouse", price: 50, description: "Elegant silk blouse", imageUrl: "/images/blouse1.jpg" },
    { id: 43, name: "Tunic", price: 35, description: "Casual tunic top", imageUrl: "/images/tunic1.jpg" },
    { id: 44, name: "Anorak", price: 90, description: "Waterproof anorak jacket", imageUrl: "/images/anorak1.jpg" },
    { id: 45, name: "Cargo Pants", price: 55, description: "Durable cargo pants", imageUrl: "/images/cargopants1.jpg" },
    { id: 46, name: "Loafers", price: 85, description: "Stylish leather loafers", imageUrl: "/images/loafers1.jpg" },
    { id: 47, name: "Puffer Jacket", price: 130, description: "Warm puffer jacket", imageUrl: "/images/pufferjacket1.jpg" }
];

export default products;
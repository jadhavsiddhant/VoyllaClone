const products = [
  {
    id: 1,
    image: "images/bohobreeze.jpg",
    title: "Boho Tribe Eclipse Golden Dominion American Diamond Men's Necklace Drop Oxidised Choker Necklace Set",
    originalPrice: 1749,
    currentPrice: 1049,
    discount: 40,
    type: "Choker",
    look: "Oxidised",
    price: 1049,
    category: "Earring",

    // Expanded fields for product detail page
    images: [
      "images/bohobreeze.jpg",
      "images/bohobreeze_alt1.jpg",
      "images/bohobreeze_alt2.jpg",
      "images/bohobreeze_alt3.jpg"
    ],
    weight: "15.1",
    size: "23.99 x 2.36 inch",
    material: "Brass",
    plating: "Oxidized Silver",
    color: "Multicolor",
    description: `This beautiful pendant set is inspired by the centuries-old Madhubani art, a traditional storytelling style that turns culture into fashion! Made from high-quality brass with silver plating, this jewelry set is not just about style—it carries meaning. The intricate jali work gives it an elegant touch, while the bright enamel-painted bird and floral motifs add charm, symbolizing freedom, beauty, and nature's harmony.`,
    careInstructions: [
      "Handle with Love: Treat your jewelry with care.",
      "Store Separately: Use soft pouches or individual compartments.",
      "Keep Dry: Avoid water, perfume, and chemicals.",
      "Clean Gently: Wipe with a soft cloth after each wear."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Phoolkari Fables Oxidised Enamel Earrings",
        price: 509,
        mrp: 849,
        image: "images/earring1.jpg"
      },
      {
        title: "Madhubani Pakhi Oxidised Enamel Pendant Set",
        price: 1169,
        mrp: 1949,
        image: "images/pendant1.jpg"
      }
    ]
  },
  {
    id: 2,
    image: "images/pendant1.jpg",
    title: "Madhubani Pakhi Oxidised Enamel Pendant Set",
    originalPrice: 1949,
    currentPrice: 1169,
    discount: 40,
    type: "Short",
    look: "Oxidised",
    price: 1169,
    category: "Pendant",

    images: [
      "images/pendant1.jpg",
      "images/pendant1_alt1.jpg",
      "images/pendant1_alt2.jpg"
    ],
    weight: "13.2",
    size: "21.5 x 2.1 inch",
    material: "Brass",
    plating: "Oxidized Silver",
    color: "Blue-Green",
    description: `A delicate pendant set featuring bright enamel and intricate patterns. Perfect for layering or as a statement piece.`,
    careInstructions: [
      "Avoid moisture and direct contact with chemicals.",
      "Store in a cool, dry place."
    ],
    frequentlyBought: [
      {
        title: "Boho Tribe Eclipse Golden Dominion American Diamond Men's Necklace Drop Oxidised Choker Necklace Set",
        price: 1049,
        mrp: 1749,
        image: "images/bohobreeze.jpg"
      },
      {
        title: "Madhubani Phoolkari Fables Oxidised Enamel Earrings",
        price: 509,
        mrp: 849,
        image: "images/earring1.jpg"
      }
    ]
  },
  {
    id: 3,
    image: "images/earring1.jpg",
    title: "Madhubani Phoolkari Fables Oxidised Enamel Earrings",
    originalPrice: 949,
    currentPrice: 569,
    discount: 40,
    type: "Short",
    look: "Oxidised",
    price: 569,
    category: "Earring",

    images: [
      "images/earring1.jpg",
      "images/earring1_alt1.jpg"
    ],
    weight: "8.1",
    size: "2 x 1 inch",
    material: "Brass",
    plating: "Oxidized Silver",
    color: "Red-Yellow",
    description: `These earrings feature floral motifs with a vibrant enamel finish. Lightweight and perfect for daily wear.`,
    careInstructions: [
      "Keep away from water.",
      "Wipe with a soft cloth after use."
    ],
    frequentlyBought: [
      {
        title: "Boho Tribe Eclipse Golden Dominion American Diamond Men's Necklace Drop Oxidised Choker Necklace Set",
        price: 1049,
        mrp: 1749,
        image: "images/bohobreeze.jpg"
      },
      {
        title: "Madhubani Pakhi Oxidised Enamel Pendant Set",
        price: 1169,
        mrp: 1949,
        image: "images/pendant1.jpg"
      }
    ]
  }
  // ...continue for all products as needed
];
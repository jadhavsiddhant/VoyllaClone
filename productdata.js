const products = [
  // mens product data
 { id: 1,
    image: "images/men1.jpg",
    title: "Boho Tribe Eclipse Golden Dominion American Diamond Men's Necklace Drop Oxidised Choker Necklace Set",
    originalPrice: 1749,
    currentPrice: 1049,
    discount: 40,
    type: "Choker",
    look: "Oxidised",
    price: 1049,
    category: "Earring",
    stock: 50,
    images: [
      "images/men1.jpg",
      "images/men1_1.jpg",
      "images/men1_2.jpg",
      "images/men1_3.jpg"
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
    image: "images/men2.jpg",
    title: "Oxidised Silver Plated Layered Chain Necklace for Men",
    originalPrice: 1599,
    currentPrice: 899,
    discount: 44,
    type: "Layered",
    look: "Oxidised",
    price: 899,
    category: "Necklace",
    stock: 60,
    images: [
      "images/men2.jpg",
      "images/men2_1.jpg"
    ],
    weight: "24.2",
    size: "22 inch",
    material: "Alloy",
    plating: "Oxidized Silver",
    color: "Silver",
    description: "Designed for trendsetting men, this oxidised silver layered chain necklace offers a bold yet versatile look. The multi-strand design blends modern aesthetics with classic Indian craftsmanship, making it suitable for both everyday wear and special occasions. Its durable construction ensures long-lasting shine and comfort, while the adjustable length provides a perfect fit for all neck sizes.",
    careInstructions: [
      "Avoid direct contact with water.",
      "Keep away from perfumes and chemicals.",
      "Wipe with a soft cloth."
    ],
    frequentlyBought: [
      {
        title: "Oxidised Studded Kada Bracelet",
        price: 599,
        mrp: 1099,
        image: "images/men3.jpg"
      },
      {
        title: "Classic Black Beads Chain",
        price: 499,
        mrp: 899,
        image: "images/men4.jpg"
      }
    ]
  },
  {
    id: 3,
    image: "images/men3.jpg",
    title: "Oxidised Studded Kada Bracelet",
    originalPrice: 1099,
    currentPrice: 599,
    discount: 45,
    type: "Kada",
    look: "Oxidised",
    price: 599,
    category: "Bracelet",
    stock: 45,
    images: [
      "images/men3.jpg"
    ],
    weight: "20.0",
    size: "Adjustable",
    material: "Brass",
    plating: "Oxidized Silver",
    color: "Silver",
    description: "This oxidised studded kada bracelet is the perfect accessory for those who appreciate rugged elegance. Featuring traditional patterns with a contemporary twist, the bracelet offers both style and comfort. The adjustable design ensures a secure fit for every wrist, while the oxidized finish adds a touch of understated masculinity.",
    careInstructions: [
      "Store in a cool, dry place.",
      "Clean gently with a soft cloth."
    ],
    frequentlyBought: [
      {
        title: "Oxidised Silver Plated Layered Chain Necklace for Men",
        price: 899,
        mrp: 1599,
        image: "images/men2.jpg"
      },
      {
        title: "Traditional Rudraksha Pendant",
        price: 799,
        mrp: 1499,
        image: "images/men5.jpg"
      }
    ]
  },
  {
    id: 4,
    image: "images/men4.jpg",
    title: "Classic Black Beads Chain",
    originalPrice: 899,
    currentPrice: 499,
    discount: 44,
    type: "Chain",
    look: "Minimal",
    price: 499,
    category: "Necklace",
    stock: 70,
    images: [
      "images/men4.jpg"
    ],
    weight: "12.0",
    size: "20 inch",
    material: "Alloy",
    plating: "Black Polish",
    color: "Black",
    description: "Simple yet stylish, this classic black beads chain is ideal for men who prefer a subtle and minimalistic look. The smooth beads are strung securely and finished with a sturdy clasp, making it a perfect accessory for daily wear. It pairs effortlessly with all types of attire, from casual to ethnic.",
    careInstructions: [
      "Avoid exposure to moisture.",
      "Keep away from chemicals.",
      "Wipe after each use."
    ],
    frequentlyBought: [
      {
        title: "Oxidised Studded Kada Bracelet",
        price: 599,
        mrp: 1099,
        image: "images/men3.jpg"
      },
      {
        title: "Oxidised Silver Cuff Bracelet",
        price: 699,
        mrp: 1299,
        image: "images/men6.jpg"
      }
    ]
  },
  {
    id: 5,
    image: "images/men5.jpg",
    title: "Traditional Rudraksha Pendant",
    originalPrice: 1499,
    currentPrice: 799,
    discount: 47,
    type: "Pendant",
    look: "Traditional",
    price: 799,
    category: "Pendant",
    stock: 40,
    images: [
      "images/men5.jpg"
    ],
    weight: "9.1",
    size: "2.5 inch",
    material: "Rudraksha Bead, Brass",
    plating: "Gold Plated",
    color: "Brown-Gold",
    description: "Invoke spiritual vibes and timeless tradition with this Rudraksha pendant. Encased in gold-plated brass, the genuine Rudraksha bead is believed to bring peace, clarity, and protection to its wearer. This pendant is perfect for daily use or as a meaningful gift for loved ones.",
    careInstructions: [
      "Handle with care.",
      "Store separately.",
      "Avoid water and sweat."
    ],
    frequentlyBought: [
      {
        title: "Classic Black Beads Chain",
        price: 499,
        mrp: 899,
        image: "images/men4.jpg"
      },
      {
        title: "Oxidised Silver Cuff Bracelet",
        price: 699,
        mrp: 1299,
        image: "images/men6.jpg"
      }
    ]
  },
  {
    id: 6,
    image: "images/men6.jpg",
    title: "Oxidised Silver Cuff Bracelet",
    originalPrice: 1299,
    currentPrice: 699,
    discount: 46,
    type: "Cuff",
    look: "Oxidised",
    price: 699,
    category: "Bracelet",
    stock: 35,
    images: [
      "images/men6.jpg"
    ],
    weight: "19.5",
    size: "Adjustable",
    material: "Brass",
    plating: "Oxidized Silver",
    color: "Silver",
    description: "This oxidised silver cuff bracelet is a robust addition to any man's accessory collection. The broad band and engraved patterns are inspired by ancient warrior jewelry, exuding strength and confidence. Its flexible design ensures comfort and easy adjustment for all wrist sizes.",
    careInstructions: [
      "Keep away from harsh chemicals.",
      "Store in a dry place.",
      "Wipe occasionally with a soft cloth."
    ],
    frequentlyBought: [
      {
        title: "Boho Tribe Eclipse Golden Dominion Necklace",
        price: 1049,
        mrp: 1749,
        image: "images/men1.jpg"
      },
      {
        title: "Oxidised Studded Kada Bracelet",
        price: 599,
        mrp: 1099,
        image: "images/men3.jpg"
      }
    ]
  },
  {
    id: 7,
    image: "images/men7.jpg",
    title: "Antique Gold Plated Tiger Claw Pendant",
    originalPrice: 1799,
    currentPrice: 999,
    discount: 44,
    type: "Pendant",
    look: "Antique",
    price: 999,
    category: "Pendant",
    stock: 20,
    images: [
      "images/men7.jpg"
    ],
    weight: "13.8",
    size: "3.2 inch",
    material: "Brass",
    plating: "Antique Gold",
    color: "Antique Gold",
    description: "This pendant features a bold tiger claw motif finished in antique gold plating, symbolizing strength and courage. It’s the perfect accessory for men who like to make a statement. Wear it solo or layer it with other chains for a unique, rugged look.",
    careInstructions: [
      "Avoid exposure to moisture.",
      "Clean with a dry, soft cloth."
    ],
    frequentlyBought: [
      {
        title: "Oxidised Silver Cuff Bracelet",
        price: 699,
        mrp: 1299,
        image: "images/men6.jpg"
      },
      {
        title: "Classic Black Beads Chain",
        price: 499,
        mrp: 899,
        image: "images/men4.jpg"
      }
    ]
  },
  {
    id: 8,
    image: "images/men8.jpg",
    title: "Minimal Black Enamel Adjustable Ring",
    originalPrice: 599,
    currentPrice: 299,
    discount: 50,
    type: "Ring",
    look: "Minimal",
    price: 299,
    category: "Ring",
    stock: 55,
    images: [
      "images/men8.jpg"
    ],
    weight: "5.2",
    size: "Adjustable",
    material: "Alloy",
    plating: "Black Enamel",
    color: "Black",
    description: "Sleek and stylish, this minimal black enamel adjustable ring is a must-have for men who appreciate subtle luxury. The smooth finish and adjustable size make it comfortable for daily wear, while its understated design ensures it pairs well with both western and ethnic outfits.",
    careInstructions: [
      "Remove before washing hands.",
      "Avoid excessive bending.",
      "Store separately."
    ],
    frequentlyBought: [
      {
        title: "Classic Black Beads Chain",
        price: 499,
        mrp: 899,
        image: "images/men4.jpg"
      },
      {
        title: "Modern Geometric Stud Earring",
        price: 349,
        mrp: 699,
        image: "images/men9.jpg"
      }
    ]
  },
  {
    id: 9,
    image: "images/men9.jpg",
    title: "Modern Geometric Stud Earring",
    originalPrice: 699,
    currentPrice: 349,
    discount: 50,
    type: "Stud",
    look: "Modern",
    price: 349,
    category: "Earring",
    stock: 50,
    images: [
      "images/men9.jpg"
    ],
    weight: "3.1",
    size: "1.2 inch",
    material: "Alloy",
    plating: "Silver Plated",
    color: "Silver",
    description: "This modern geometric stud earring offers a fresh take on classic men's jewelry. Its clean lines and polished finish make it suitable for everyday style, while the secure back ensures comfortable wear all day long. Wear solo or as part of a curated ear stack.",
    careInstructions: [
      "Remove when sleeping.",
      "Clean with a dry tissue.",
      "Avoid sprays and perfumes."
    ],
    frequentlyBought: [
      {
        title: "Minimal Black Enamel Adjustable Ring",
        price: 299,
        mrp: 599,
        image: "images/men8.jpg"
      },
      {
        title: "Oxidised Silver Cuff Bracelet",
        price: 699,
        mrp: 1299,
        image: "images/men6.jpg"
      }
    ]
  },
  {
    id: 10,
    image: "images/men10.jpg",
    title: "Dual Tone Braided Leather Bracelet",
    originalPrice: 1099,
    currentPrice: 549,
    discount: 50,
    type: "Bracelet",
    look: "Casual",
    price: 549,
    category: "Bracelet",
    stock: 65,
    images: [
      "images/men10.jpg"
    ],
    weight: "14.0",
    size: "Adjustable",
    material: "Leather, Alloy",
    plating: "Matte",
    color: "Brown-Black",
    description: "This dual tone braided leather bracelet is crafted for men with a taste for casual sophistication. The mix of brown and black leather is offset by a matte metallic clasp, making it ideal for everyday wear. Its adjustable fit ensures comfort for any wrist size.",
    careInstructions: [
      "Keep away from water.",
      "Store flat.",
      "Wipe with a dry cloth."
    ],
    frequentlyBought: [
      {
        title: "Minimal Black Enamel Adjustable Ring",
        price: 299,
        mrp: 599,
        image: "images/men8.jpg"
      },
      {
        title: "Classic Black Beads Chain",
        price: 499,
        mrp: 899,
        image: "images/men4.jpg"
      }
    ]
  },
  {
    id: 11,
    image: "images/men11.jpg",
    title: "Oxidised Silver Hoop Earring",
    originalPrice: 799,
    currentPrice: 399,
    discount: 50,
    type: "Hoop",
    look: "Oxidised",
    price: 399,
    category: "Earring",
    stock: 75,
    images: [
      "images/men11.jpg"
    ],
    weight: "4.6",
    size: "1.8 inch",
    material: "Alloy",
    plating: "Oxidized Silver",
    color: "Silver",
    description: "A staple accessory for stylish men, this oxidised silver hoop earring offers a bold yet classic look. Crafted from durable alloy, it is lightweight and easy to wear. The oxidised finish gives it a contemporary edge, making it suitable for both daily wear and special occasions.",
    careInstructions: [
      "Store in a dry pouch.",
      "Clean gently after use.",
      "Avoid harsh chemicals."
    ],
    frequentlyBought: [
      {
        title: "Modern Geometric Stud Earring",
        price: 349,
        mrp: 699,
        image: "images/men9.jpg"
      },
      {
        title: "Oxidised Studded Kada Bracelet",
        price: 599,
        mrp: 1099,
        image: "images/men3.jpg"
      }
    ]
  },
  {
    id: 12,
    image: "images/men12.jpg",
    title: "Antique Finish Long Chain Pendant",
    originalPrice: 2199,
    currentPrice: 1249,
    discount: 43,
    type: "Long Chain",
    look: "Antique",
    price: 1249,
    category: "Necklace",
    stock: 22,
    images: [
      "images/men12.jpg",
      "images/men12_1.jpg"
    ],
    weight: "29.5",
    size: "24 inch",
    material: "Brass",
    plating: "Antique Gold",
    color: "Antique Gold",
    description: "This long chain pendant is a tribute to ancient craftsmanship. The antique gold finish and intricate detailing make it ideal for festive wear or as a statement piece layered with other necklaces. Durable and timeless, it will become a cherished part of your collection.",
    careInstructions: [
      "Avoid moisture.",
      "Store in a jewelry box.",
      "Wipe after use."
    ],
    frequentlyBought: [
      {
        title: "Antique Gold Plated Tiger Claw Pendant",
        price: 999,
        mrp: 1799,
        image: "images/men7.jpg"
      },
      {
        title: "Oxidised Silver Plated Layered Chain Necklace for Men",
        price: 899,
        mrp: 1599,
        image: "images/men2.jpg"
      }
    ]
  },
  {
    id: 13,
    image: "images/men13.jpg",
    title: "Designer Blue Stone Ear Stud",
    originalPrice: 849,
    currentPrice: 499,
    discount: 41,
    type: "Stud",
    look: "Designer",
    price: 499,
    category: "Earring",
    stock: 33,
    images: [
      "images/men13.jpg"
    ],
    weight: "3.8",
    size: "1.3 inch",
    material: "Alloy, Stone",
    plating: "Silver Plated",
    color: "Blue-Silver",
    description: "This designer ear stud features a striking blue stone set in a silver-plated frame. Its unique color pop and secure backing make it a favorite for men who like to stand out. Lightweight and easy to wear, it adds a creative flair to any outfit.",
    careInstructions: [
      "Clean gently after use.",
      "Avoid contact with water.",
      "Store separately."
    ],
    frequentlyBought: [
      {
        title: "Modern Geometric Stud Earring",
        price: 349,
        mrp: 699,
        image: "images/men9.jpg"
      },
      {
        title: "Oxidised Silver Hoop Earring",
        price: 399,
        mrp: 799,
        image: "images/men11.jpg"
      }
    ]
  },
  {
    id: 14,
    image: "images/men14.jpg",
    title: "CZ Plated Adjustable Bracelet",
    originalPrice: 1099,
    currentPrice: 599,
    discount: 45,
    type: "Bracelet",
    look: "CZ",
    price: 599,
    category: "Bracelet",
    stock: 38,
    images: [
      "images/men14.jpg"
    ],
    weight: "10.5",
    size: "Adjustable",
    material: "Alloy",
    plating: "CZ Plated",
    color: "Silver",
    description: "This CZ plated adjustable bracelet sparkles with cubic zirconia stones, offering a blend of sophistication and masculinity. The adjustable band ensures a perfect fit, while the modern design makes it suitable for both formal events and casual outings.",
    careInstructions: [
      "Avoid water and perfumes.",
      "Clean with a soft cloth.",
      "Keep in a pouch."
    ],
    frequentlyBought: [
      {
        title: "Oxidised Studded Kada Bracelet",
        price: 599,
        mrp: 1099,
        image: "images/men3.jpg"
      },
      {
        title: "Dual Tone Braided Leather Bracelet",
        price: 549,
        mrp: 1099,
        image: "images/men10.jpg"
      }
    ]
  },
  {
    id: 15,
    image: "images/men15.jpg",
    title: "Silver Plated Toe Ring Pair",
    originalPrice: 499,
    currentPrice: 249,
    discount: 50,
    type: "Toe Ring",
    look: "Simple",
    price: 249,
    category: "Toe Ring",
    stock: 60,
    images: [
      "images/men15.jpg"
    ],
    weight: "4.8",
    size: "Adjustable",
    material: "Alloy",
    plating: "Silver Plated",
    color: "Silver",
    description: "This pair of silver plated toe rings is designed for men who appreciate subtle tradition. The simple, polished design ensures versatility and comfort, making them suitable for both daily and festive wear. The adjustable fit allows for easy wear on any toe size.",
    careInstructions: [
      "Remove before bathing.",
      "Do not twist excessively.",
      "Keep away from chemicals."
    ],
    frequentlyBought: [
      {
        title: "Oxidised Silver Anklet Pair",
        price: 599,
        mrp: 1099,
        image: "images/men16.jpg"
      },
      {
        title: "Oxidised Silver Hoop Earring",
        price: 399,
        mrp: 799,
        image: "images/men11.jpg"
      }
    ]
  },
  {
    id: 16,
    image: "images/men16.jpg",
    title: "Oxidised Silver Anklet Pair",
    originalPrice: 1099,
    currentPrice: 599,
    discount: 45,
    type: "Anklet",
    look: "Oxidised",
    price: 599,
    category: "Anklet",
    stock: 55,
    images: [
      "images/men16.jpg"
    ],
    weight: "22.0",
    size: "10 inch",
    material: "Alloy",
    plating: "Silver Plated",
    color: "Silver",
    description: "Complete your ethnic look with this pair of oxidised silver anklets for men. Adorned with subtle engravings, they are perfect for festive occasions and traditional gatherings. The robust construction ensures durability, while the oxidised finish adds a vintage charm.",
    careInstructions: [
      "Store away from moisture.",
      "Clean gently after use.",
      "Avoid chemicals."
    ],
    frequentlyBought: [
      {
        title: "Silver Plated Toe Ring Pair",
        price: 249,
        mrp: 499,
        image: "images/men15.jpg"
      },
      {
        title: "Oxidised Studded Kada Bracelet",
        price: 599,
        mrp: 1099,
        image: "images/men3.jpg"
      }
    ]
  },
  // ...continue for all products as needed
  //festive gifts product data
  {
    id: 17,
    image: "images/ganeshidol.jpg",
    title: "Antique Finish Brass Lord Ganesha Idol with Peacock Design and Diya Stand",
    originalPrice: 1749,
    currentPrice: 1049,
    discount: 40,
    type: "Idol",
    look: "Antique",
    price: 1049,
    category: "Religious",
    stock: 50,

    // Expanded fields for product detail page
    images: [
      "images/ganeshidol.jpg",
      "images/ganeshidol_alt1.jpg",
      "images/ganeshidol_alt2.jpg",
      "images/ganeshidol_alt3.jpg"
    ],
    weight: "750.0",
    size: "8.5 x 4.5 inch",
    material: "Brass",
    plating: "Antique Gold",
    color: "Golden-Brown",
    description: `This beautifully crafted Lord Ganesha idol combines traditional artistry with contemporary design. The peacock motif represents beauty and grace, while the built-in diya stand adds functionality for your puja needs. Made from premium quality brass with an antique finish, this piece serves as both a spiritual centerpiece and an elegant home décor item.`,
    careInstructions: [
      "Clean with soft dry cloth only",
      "Avoid harsh chemicals and cleaners",
      "Store in a dry place away from moisture",
      "Apply natural oils occasionally to maintain shine"
    ],
    frequentlyBought: [
      {
        title: "Handcrafted Brass Puja Bell with Sanskrit Mantras",
        price: 509,
        mrp: 849,
        image: "images/bell1.jpg"
      },
      {
        title: "Traditional Brass Panch-Aarti Diya Set",
        price: 1169,
        mrp: 1949,
        image: "images/diya1.jpg"
      }
    ]
  },
  {
    id: 18,
    image: "images/diya1.jpg",
    title: "Traditional Brass Panch-Aarti Diya Set with Peacock Handle",
    originalPrice: 1949,
    currentPrice: 1169,
    discount: 40,
    type: "Puja Items",
    look: "Traditional",
    price: 1169,
    category: "Diya",
    stock: 50,

    images: [
      "images/diya1.jpg",
      "images/diya1_alt1.jpg",
      "images/diya1_alt2.jpg"
    ],
    weight: "450.0",
    size: "12.5 x 4.2 inch",
    material: "Brass",
    plating: "Gold Polish",
    color: "Golden",
    description: `A beautiful five-wick brass aarti diya featuring intricate peacock handle design. Perfect for daily puja and special occasions. The traditional design elements make it a timeless addition to your puja essentials.`,
    careInstructions: [
      "Clean after each use with a dry cloth",
      "Store in a dry place",
      "Avoid contact with water for long periods",
      "Polish periodically to maintain shine"
    ],
    frequentlyBought: [
      {
        title: "Antique Finish Brass Lord Ganesha Idol",
        price: 1049,
        mrp: 1749,
        image: "images/ganeshidol.jpg"
      },
      {
        title: "Handcrafted Brass Puja Bell with Sanskrit Mantras",
        price: 509,
        mrp: 849,
        image: "images/bell1.jpg"
      }
    ]
  },
  {
    id: 19,
    image: "images/bell1.jpg",
    title: "Handcrafted Brass Puja Bell with Sanskrit Mantras",
    originalPrice: 949,
    currentPrice: 569,
    discount: 40,
    type: "Bell",
    look: "Traditional",
    price: 569,
    category: "Puja Items",
    stock: 50,

    images: [
      "images/bell1.jpg",
      "images/bell1_alt1.jpg"
    ],
    weight: "300.0",
    size: "6 x 3 inch",
    material: "Brass",
    plating: "Plain Brass",
    color: "Golden",
    description: `This sacred puja bell features beautifully engraved Sanskrit mantras and traditional designs. The clear, auspicious sound makes it perfect for daily aarti and special pujas. Each piece is handcrafted by skilled artisans.`,
    careInstructions: [
      "Keep in dry place",
      "Clean with soft cloth only",
      "Avoid harsh chemicals",
      "Polish occasionally with brass cleaner"
    ],
    frequentlyBought: [
      {
        title: "Antique Finish Brass Lord Ganesha Idol",
        price: 1049,
        mrp: 1749,
        image: "images/ganeshidol.jpg"
      },
      {
        title: "Traditional Brass Panch-Aarti Diya Set",
        price: 1169,
        mrp: 1949,
        image: "images/diya1.jpg"
      }
    ]
  },
  {
    id: 20,
    image: "images/gift20.jpg",
    title: "Elegant Pearl Rakhi Gift Set",
    originalPrice: 1099,
    currentPrice: 599,
    discount: 45,
    type: "Rakhi Set",
    look: "Traditional",
    price: 599,
    category: "Gift Set",
    stock: 40,
    images: [
      "images/gift20.jpg",
      "images/gift20_1.jpg"
    ],
    weight: "16.0",
    size: "Standard",
    material: "Pearl, Thread",
    plating: "Gold Plated",
    color: "Gold-Red",
    description: "Celebrate the bond of love this festive season with our Elegant Pearl Rakhi Gift Set. Featuring a beautifully crafted pearl rakhi on a durable thread, this set comes with roli, chawal, and a decorative box. Its classic color combination and intricate details make it a memorable gift for your sibling. Perfect for Raksha Bandhan and other auspicious occasions.",
    careInstructions: [
      "Keep away from water.",
      "Store in a dry place.",
      "Handle with care to avoid tangling."
    ],
    frequentlyBought: [
      {
        title: "Designer Kundan Rakhi",
        price: 349,
        mrp: 699,
        image: "images/gift21.jpg"
      },
      {
        title: "Traditional Lumba Rakhi Set",
        price: 499,
        mrp: 899,
        image: "images/gift22.jpg"
      }
    ]
  },
  {
    id: 21,
    image: "images/gift21.jpg",
    title: "Designer Kundan Rakhi",
    originalPrice: 699,
    currentPrice: 349,
    discount: 50,
    type: "Rakhi",
    look: "Kundan",
    price: 349,
    category: "Rakhi",
    stock: 60,
    images: [
      "images/gift21.jpg"
    ],
    weight: "6.5",
    size: "Standard",
    material: "Kundan, Thread",
    plating: "Gold Plated",
    color: "Multicolor",
    description: "This Designer Kundan Rakhi is a festival favorite, featuring sparkling kundan stones set in a traditional design. The vibrant threads and decorative center make it a standout among celebration accessories. It’s lightweight, skin-friendly, and sure to make your sibling feel cherished during Raksha Bandhan.",
    careInstructions: [
      "Store separately.",
      "Avoid contact with perfumes and sprays.",
      "Wipe gently after use."
    ],
    frequentlyBought: [
      {
        title: "Elegant Pearl Rakhi Gift Set",
        price: 599,
        mrp: 1099,
        image: "images/gift20.jpg"
      },
      {
        title: "Floral Meenakari Rakhi",
        price: 299,
        mrp: 599,
        image: "images/gift23.jpg"
      }
    ]
  },
  {
    id: 22,
    image: "images/gift22.jpg",
    title: "Traditional Lumba Rakhi Set",
    originalPrice: 899,
    currentPrice: 499,
    discount: 44,
    type: "Lumba Rakhi",
    look: "Traditional",
    price: 499,
    category: "Gift Set",
    stock: 30,
    images: [
      "images/gift22.jpg"
    ],
    weight: "10.8",
    size: "Standard",
    material: "Alloy, Thread",
    plating: "Gold Plated",
    color: "Red-Gold",
    description: "Gift this Traditional Lumba Rakhi Set to your sister-in-law and make the festival extra special. The set includes a lumba rakhi with intricate golden work and matching motifs, crafted for elegance and comfort. Presented in a decorative box, it is perfect for gifting on Raksha Bandhan.",
    careInstructions: [
      "Keep dry.",
      "Avoid exposure to sunlight.",
      "Store in the original box."
    ],
    frequentlyBought: [
      {
        title: "Designer Kundan Rakhi",
        price: 349,
        mrp: 699,
        image: "images/gift21.jpg"
      },
      {
        title: "Meenakari Puja Thali Set",
        price: 799,
        mrp: 1499,
        image: "images/gift24.jpg"
      }
    ]
  },
  {
    id: 23,
    image: "images/gift23.jpg",
    title: "Floral Meenakari Rakhi",
    originalPrice: 599,
    currentPrice: 299,
    discount: 50,
    type: "Rakhi",
    look: "Meenakari",
    price: 299,
    category: "Rakhi",
    stock: 50,
    images: [
      "images/gift23.jpg"
    ],
    weight: "7.0",
    size: "Standard",
    material: "Meenakari, Thread",
    plating: "Gold Plated",
    color: "Pink-Green",
    description: "Bring color and joy to your celebrations with this Floral Meenakari Rakhi. The vivid hand-painted design and soft thread make it comfortable for all-day wear. A thoughtful and affordable way to show love to your brother on Raksha Bandhan.",
    careInstructions: [
      "Store away from moisture.",
      "Avoid rough handling.",
      "Keep in a pouch."
    ],
    frequentlyBought: [
      {
        title: "Designer Kundan Rakhi",
        price: 349,
        mrp: 699,
        image: "images/gift21.jpg"
      },
      {
        title: "Traditional Lumba Rakhi Set",
        price: 499,
        mrp: 899,
        image: "images/gift22.jpg"
      }
    ]
  },
  {
    id: 24,
    image: "images/gift24.jpg",
    title: "Meenakari Puja Thali Set",
    originalPrice: 1499,
    currentPrice: 799,
    discount: 47,
    type: "Puja Thali",
    look: "Meenakari",
    price: 799,
    category: "Puja Thali",
    stock: 25,
    images: [
      "images/gift24.jpg",
      "images/gift24_1.jpg"
    ],
    weight: "21.0",
    size: "8 inch",
    material: "Brass, Enamel",
    plating: "Gold Plated",
    color: "Red-Green",
    description: "This Meenakari Puja Thali Set is ideal for all festival rituals. Decorated with traditional meenakari enamel work, it includes a thali, roli chawal holders, and a diya. The vibrant design and sturdy brass construction make it a cherished addition to your festive collection, ensuring every ceremony is celebrated in style.",
    careInstructions: [
      "Clean with a dry cloth.",
      "Avoid using water and chemicals.",
      "Store covered after use."
    ],
    frequentlyBought: [
      {
        title: "Floral Meenakari Rakhi",
        price: 299,
        mrp: 599,
        image: "images/gift23.jpg"
      },
      {
        title: "Silver Plated Coin Set",
        price: 599,
        mrp: 999,
        image: "images/gift25.jpg"
      }
    ]
  },
  {
    id: 25,
    image: "images/gift25.jpg",
    title: "Silver Plated Coin Set",
    originalPrice: 999,
    currentPrice: 599,
    discount: 40,
    type: "Coin",
    look: "Traditional",
    price: 599,
    category: "Gift Set",
    stock: 80,
    images: [
      "images/gift25.jpg"
    ],
    weight: "18.0",
    size: "Standard",
    material: "Silver Plated Alloy",
    plating: "Silver Plated",
    color: "Silver",
    description: "A symbol of prosperity and good luck, this Silver Plated Coin Set is a versatile festive gift. Suitable for Diwali, weddings, or housewarmings, the set includes intricately designed coins in a beautiful pouch. These coins are considered auspicious and make a thoughtful present for loved ones.",
    careInstructions: [
      "Keep coins dry.",
      "Polish occasionally for shine.",
      "Store in the provided pouch."
    ],
    frequentlyBought: [
      {
        title: "Meenakari Puja Thali Set",
        price: 799,
        mrp: 1499,
        image: "images/gift24.jpg"
      },
      {
        title: "Antique Finish Candle Holder",
        price: 449,
        mrp: 899,
        image: "images/gift26.jpg"
      }
    ]
  },
  {
    id: 26,
    image: "images/gift26.jpg",
    title: "Antique Finish Candle Holder",
    originalPrice: 899,
    currentPrice: 449,
    discount: 50,
    type: "Candle Holder",
    look: "Antique",
    price: 449,
    category: "Decor",
    stock: 35,
    images: [
      "images/gift26.jpg"
    ],
    weight: "15.0",
    size: "5 inch",
    material: "Metal",
    plating: "Antique Gold",
    color: "Antique Gold",
    description: "Illuminate your celebrations with this Antique Finish Candle Holder. Crafted from metal and finished in antique gold, it blends tradition with modern décor. Perfect for Diwali or as a decorative piece, it adds a warm and elegant glow to your home. Durable and easy to maintain, it is also a thoughtful gift for any occasion.",
    careInstructions: [
      "Wipe with a dry cloth.",
      "Do not wash with water.",
      "Handle with care."
    ],
    frequentlyBought: [
      {
        title: "Silver Plated Coin Set",
        price: 599,
        mrp: 999,
        image: "images/gift25.jpg"
      },
      {
        title: "Premium Agarbatti Stand",
        price: 399,
        mrp: 699,
        image: "images/gift27.jpg"
      }
    ]
  },
  {
    id: 27,
    image: "images/gift27.jpg",
    title: "Premium Agarbatti Stand",
    originalPrice: 699,
    currentPrice: 399,
    discount: 43,
    type: "Agarbatti Stand",
    look: "Classic",
    price: 399,
    category: "Puja Accessory",
    stock: 55,
    images: [
      "images/gift27.jpg"
    ],
    weight: "8.0",
    size: "4 inch",
    material: "Brass",
    plating: "Gold Plated",
    color: "Gold",
    description: "This Premium Agarbatti Stand is an essential accessory for every festive puja. Made of high-quality brass and plated with gold, it holds multiple incense sticks safely and elegantly. Its compact design ensures stability, while the ornate detailing adds a touch of luxury to your prayer space.",
    careInstructions: [
      "Clean with a soft, dry cloth.",
      "Keep away from moisture.",
      "Store safely after use."
    ],
    frequentlyBought: [
      {
        title: "Antique Finish Candle Holder",
        price: 449,
        mrp: 899,
        image: "images/gift26.jpg"
      },
      {
        title: "Colorful Decorative Diya Set",
        price: 299,
        mrp: 599,
        image: "images/gift28.jpg"
      }
    ]
  },
  {
    id: 28,
    image: "images/gift28.jpg",
    title: "Colorful Decorative Diya Set",
    originalPrice: 599,
    currentPrice: 299,
    discount: 50,
    type: "Diya Set",
    look: "Festive",
    price: 299,
    category: "Decor",
    stock: 100,
    images: [
      "images/gift28.jpg",
      "images/gift28_1.jpg"
    ],
    weight: "10.0",
    size: "Assorted",
    material: "Clay, Paint",
    plating: "None",
    color: "Multicolor",
    description: "Brighten up your home with this Colorful Decorative Diya Set. Hand-painted in vibrant hues, these diyas are perfect for Diwali and other festivities. Their sturdy clay construction ensures safety, while the variety of designs adds a festive touch to any décor. They also make charming gifts for friends and family.",
    careInstructions: [
      "Handle gently.",
      "Do not soak in water.",
      "Store after drying."
    ],
    frequentlyBought: [
      {
        title: "Premium Agarbatti Stand",
        price: 399,
        mrp: 699,
        image: "images/gift27.jpg"
      },
      {
        title: "Meenakari Puja Thali Set",
        price: 799,
        mrp: 1499,
        image: "images/gift24.jpg"
      }
    ]
  },
  {
    id: 29,
    image: "images/gift29.jpg",
    title: "Ganesha Wall Hanging",
    originalPrice: 1299,
    currentPrice: 749,
    discount: 42,
    type: "Wall Decor",
    look: "Spiritual",
    price: 749,
    category: "Home Decor",
    stock: 30,
    images: [
      "images/gift29.jpg"
    ],
    weight: "22.0",
    size: "12 x 8 inch",
    material: "Metal",
    plating: "Antique Gold",
    color: "Antique Gold",
    description: "Invoke divine blessings and add a spiritual touch to your home with this Ganesha Wall Hanging. Meticulously crafted from metal and finished in antique gold, it is perfect for entryways, living rooms, or puja spaces. Its intricate detailing and spiritual significance make it a wonderful festive gift.",
    careInstructions: [
      "Clean with a dry cloth.",
      "Avoid water contact.",
      "Hang securely."
    ],
    frequentlyBought: [
      {
        title: "Antique Finish Candle Holder",
        price: 449,
        mrp: 899,
        image: "images/gift26.jpg"
      },
      {
        title: "Silver Plated Coin Set",
        price: 599,
        mrp: 999,
        image: "images/gift25.jpg"
      }
    ]
  },
  {
    id: 30,
    image: "images/gift30.jpg",
    title: "Handcrafted Wooden Dry Fruit Box",
    originalPrice: 1599,
    currentPrice: 899,
    discount: 44,
    type: "Dry Fruit Box",
    look: "Handcrafted",
    price: 899,
    category: "Gift Box",
    stock: 40,
    images: [
      "images/gift30.jpg"
    ],
    weight: "28.0",
    size: "10 x 10 inch",
    material: "Wood",
    plating: "None",
    color: "Brown",
    description: "This Handcrafted Wooden Dry Fruit Box is both elegant and functional, perfect for gifting on festive occasions. The intricate carvings and spacious compartments make it suitable for storing a variety of dry fruits or sweets. Its durable wooden build ensures longevity, while its rich finish adds a touch of luxury to any gift.",
    careInstructions: [
      "Keep away from moisture.",
      "Clean with a dry cloth.",
      "Store in a cool place."
    ],
    frequentlyBought: [
      {
        title: "Silver Plated Coin Set",
        price: 599,
        mrp: 999,
        image: "images/gift25.jpg"
      },
      {
        title: "Colorful Decorative Diya Set",
        price: 299,
        mrp: 599,
        image: "images/gift28.jpg"
      }
    ]
  },
  {
    id: 31,
    image: "images/gift31.jpg",
    title: "Premium Sweets Gift Hamper",
    originalPrice: 1999,
    currentPrice: 1299,
    discount: 35,
    type: "Gift Hamper",
    look: "Festive",
    price: 1299,
    category: "Gift Hamper",
    stock: 45,
    images: [
      "images/gift31.jpg"
    ],
    weight: "32.0",
    size: "Assorted",
    material: "Food, Gift Box",
    plating: "None",
    color: "Multicolor",
    description: "Treat your loved ones to the Premium Sweets Gift Hamper, packed with an assortment of delicious traditional sweets. Presented in a beautiful gift box, this hamper is perfect for Diwali, Holi, or any celebration. Each sweet is crafted with the finest ingredients, ensuring a delightful and memorable festive experience.",
    careInstructions: [
      "Keep in a cool, dry place.",
      "Consume before expiry.",
      "Store away from sunlight."
    ],
    frequentlyBought: [
      {
        title: "Handcrafted Wooden Dry Fruit Box",
        price: 899,
        mrp: 1599,
        image: "images/gift30.jpg"
      },
      {
        title: "Colorful Decorative Diya Set",
        price: 299,
        mrp: 599,
        image: "images/gift28.jpg"
      }
    ]
  },
  {
    id: 32,
    image: "images/gift32.jpg",
    title: "Eco-Friendly Bamboo Puja Kit",
    originalPrice: 1299,
    currentPrice: 749,
    discount: 42,
    type: "Puja Kit",
    look: "Eco-Friendly",
    price: 749,
    category: "Puja Accessory",
    stock: 35,
    images: [
      "images/gift32.jpg",
      "images/gift32_1.jpg"
    ],
    weight: "20.0",
    size: "Assorted",
    material: "Bamboo, Natural Fibers",
    plating: "None",
    color: "Natural",
    description: "Embrace sustainability this festive season with our Eco-Friendly Bamboo Puja Kit. Handcrafted from natural bamboo and fibers, this kit contains all essentials for a traditional puja while being kind to the environment. It’s beautifully packed, reusable, and a perfect gift for eco-conscious friends and family.",
    careInstructions: [
      "Keep dry after use.",
      "Avoid prolonged water exposure.",
      "Store in a ventilated area."
    ],
    frequentlyBought: [
      {
        title: "Meenakari Puja Thali Set",
        price: 799,
        mrp: 1499,
        image: "images/gift24.jpg"
      },
      {
        title: "Premium Agarbatti Stand",
        price: 399,
        mrp: 699,
        image: "images/gift27.jpg"
      }
    ]
  },
  //madhubani data id 33 to 48
  {
    id: 33,
    image: "images/madhubani33.jpg",
    title: "Madhubani Art Silver Plated Pendant Set",
    originalPrice: 1499,
    currentPrice: 849,
    discount: 43,
    type: "Pendant Set",
    look: "Oxidised",
    price: 849,
    category: "Necklace",
    stock: 30,
    images: [
      "images/madhubani33.jpg",
      "images/madhubani33_1.jpg"
    ],
    weight: "20.2",
    size: "18 inch",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Multicolor",
    description: "This Madhubani Art Silver Plated Pendant Set draws inspiration from the rich heritage of Indian folk art. Each piece is delicately hand-painted, capturing scenes of nature and tradition. The oxidised finish adds to its ethnic appeal, making it perfect for both festive and casual attire. Lightweight yet sturdy, this set is a must-have for lovers of cultural jewelry.",
    careInstructions: [
      "Store in a soft pouch.",
      "Avoid perfumes and water.",
      "Clean with dry cloth."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Floral Drop Earrings",
        price: 399,
        mrp: 799,
        image: "images/madhubani34.jpg"
      },
      {
        title: "Handcrafted Madhubani Bangle",
        price: 499,
        mrp: 999,
        image: "images/madhubani35.jpg"
      }
    ]
  },
  {
    id: 34,
    image: "images/madhubani34.jpg",
    title: "Madhubani Floral Drop Earrings",
    originalPrice: 799,
    currentPrice: 399,
    discount: 50,
    type: "Drop",
    look: "Artisan",
    price: 399,
    category: "Earring",
    stock: 40,
    images: [
      "images/madhubani34.jpg"
    ],
    weight: "8.5",
    size: "2.2 inch",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Red",
    description: "Bright and cheerful, these Madhubani floral drop earrings feature traditional motifs in vibrant hues. The lightweight design ensures all-day comfort, while the hand-painted details reflect the beauty of Indian craftsmanship. These earrings are ideal for adding a touch of folk art to your daily wardrobe.",
    careInstructions: [
      "Wipe after use.",
      "Keep away from moisture.",
      "Store separately."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Art Silver Plated Pendant Set",
        price: 849,
        mrp: 1499,
        image: "images/madhubani33.jpg"
      },
      {
        title: "Handcrafted Madhubani Bangle",
        price: 499,
        mrp: 999,
        image: "images/madhubani35.jpg"
      }
    ]
  },
  {
    id: 35,
    image: "images/madhubani35.jpg",
    title: "Handcrafted Madhubani Bangle",
    originalPrice: 999,
    currentPrice: 499,
    discount: 50,
    type: "Bangle",
    look: "Handpainted",
    price: 499,
    category: "Bangle",
    stock: 35,
    images: [
      "images/madhubani35.jpg"
    ],
    weight: "12.0",
    size: "2.6 inch",
    material: "Alloy",
    plating: "None",
    color: "Multicolor",
    description: "This handcrafted bangle is adorned with detailed Madhubani motifs, each stroke reflecting the vibrancy and life of Indian folk traditions. The bright and cheerful colors bring out the uniqueness of this bangle, making it perfect for festive and semi-formal occasions. Durable and comfortable, it is suitable for daily wear as well.",
    careInstructions: [
      "Avoid direct contact with water.",
      "Clean with soft cloth.",
      "Store in a box."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Floral Drop Earrings",
        price: 399,
        mrp: 799,
        image: "images/madhubani34.jpg"
      },
      {
        title: "Madhubani Painted Pendant Set",
        price: 999,
        mrp: 1799,
        image: "images/madhubani36.jpg"
      }
    ]
  },
  {
    id: 36,
    image: "images/madhubani36.jpg",
    title: "Madhubani Painted Pendant Set",
    originalPrice: 1799,
    currentPrice: 999,
    discount: 44,
    type: "Pendant Set",
    look: "Traditional",
    price: 999,
    category: "Necklace",
    stock: 28,
    images: [
      "images/madhubani36.jpg",
      "images/madhubani361.jpg"

    ],
    weight: "16.5",
    size: "19 inch",
    material: "Brass",
    plating: "Gold Plated",
    color: "Gold-Multicolor",
    description: "Celebrate Indian heritage with this Madhubani Painted Pendant Set, featuring exquisite hand-painted pendants and matching earrings. The gold plating enhances its traditional appeal, while the vibrant colors and intricate patterns add to its festive charm. It’s a statement piece for weddings, festivals, or any joyous celebration.",
    careInstructions: [
      "Keep away from chemicals.",
      "Wipe after use.",
      "Store in a soft pouch."
    ],
    frequentlyBought: [
      {
        title: "Handcrafted Madhubani Bangle",
        price: 499,
        mrp: 999,
        image: "images/madhubani35.jpg"
      },
      {
        title: "Madhubani Art Statement Ring",
        price: 349,
        mrp: 699,
        image: "images/madhubani37.jpg"
      }
    ]
  },
  {
    id: 37,
    image: "images/madhubani37.jpg",
    title: "Madhubani Art Statement Ring",
    originalPrice: 699,
    currentPrice: 349,
    discount: 50,
    type: "Ring",
    look: "Artisan",
    price: 349,
    category: "Ring",
    stock: 50,
    images: [
      "images/madhubani37.jpg"
    ],
    weight: "7.2",
    size: "Adjustable",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Orange",
    description: "Add a pop of color to your ensemble with this Madhubani Art Statement Ring. Featuring intricate hand-painted patterns inspired by nature, this ring is adjustable to fit any finger. It’s a perfect choice for those who love unique, meaningful jewelry that stands out.",
    careInstructions: [
      "Avoid impact.",
      "Remove before hand wash.",
      "Store in a ring box."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Painted Pendant Set",
        price: 999,
        mrp: 1799,
        image: "images/madhubani36.jpg"
      },
      {
        title: "Madhubani Bird Motif Earrings",
        price: 449,
        mrp: 899,
        image: "images/madhubani38.jpg"
      }
    ]
  },
  {
    id: 38,
    image: "images/madhubani38.jpg",
    title: "Madhubani Bird Motif Earrings",
    originalPrice: 899,
    currentPrice: 449,
    discount: 50,
    type: "Stud",
    look: "Folk",
    price: 449,
    category: "Earring",
    stock: 45,
    images: [
      "images/madhubani38.jpg"
    ],
    weight: "6.8",
    size: "1.8 inch",
    material: "Alloy",
    plating: "Gold Plated",
    color: "Gold-Blue",
    description: "Inspired by the beauty of birds depicted in Madhubani art, these stud earrings are a blend of culture and fashion. The gold plating and vibrant blue accents make them ideal for both festive events and everyday wear. Lightweight and comfortable, they are a delightful addition to any jewelry collection.",
    careInstructions: [
      "Clean with a dry cloth.",
      "Avoid water exposure.",
      "Store in a pouch."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Art Statement Ring",
        price: 349,
        mrp: 699,
        image: "images/madhubani37.jpg"
      },
      {
        title: "Madhubani Peacock Pendant",
        price: 1099,
        mrp: 1899,
        image: "images/madhubani39.jpg"
      }
    ]
  },
  {
    id: 39,
    image: "images/madhubani39.jpg",
    title: "Madhubani Peacock Pendant",
    originalPrice: 1899,
    currentPrice: 1099,
    discount: 42,
    type: "Pendant",
    look: "Ethnic",
    price: 1099,
    category: "Necklace",
    stock: 20,
    images: [
      "images/madhubani39.jpg",
      "images/madhubani391.jpg"
    ],
    weight: "13.5",
    size: "18 inch",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Multicolor",
    description: "This Madhubani Peacock Pendant is a tribute to Indian heritage. The centerpiece showcases a hand-painted peacock, symbolizing beauty and grace. Its rich colors and ethnic detailing make it a standout accessory, perfect for festive and semi-formal occasions.",
    careInstructions: [
      "Store in a jewelry box.",
      "Keep away from chemicals.",
      "Wipe after each use."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Bird Motif Earrings",
        price: 449,
        mrp: 899,
        image: "images/madhubani38.jpg"
      },
      {
        title: "Madhubani Art Silver Plated Pendant Set",
        price: 849,
        mrp: 1499,
        image: "images/madhubani33.jpg"
      }
    ]
  },
  {
    id: 40,
    image: "images/madhubani40.jpg",
    title: "Handpainted Madhubani Choker Set",
    originalPrice: 1599,
    currentPrice: 949,
    discount: 41,
    type: "Choker",
    look: "Handpainted",
    price: 949,
    category: "Necklace",
    stock: 25,
    images: [
      "images/madhubani40.jpg",
      "images/madhubani40_1.jpg"
    ],
    weight: "18.0",
    size: "16 inch",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Green",
    description: "This handpainted Madhubani choker set features bold green hues and intricate folk motifs. Its unique design draws from ancient traditions, making it a truly statement accessory for modern women who appreciate art and heritage. The set includes matching earrings for a complete festive look.",
    careInstructions: [
      "Avoid pulling or stretching.",
      "Keep away from perfumes.",
      "Wipe clean after wear."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Peacock Pendant",
        price: 1099,
        mrp: 1899,
        image: "images/madhubani39.jpg"
      },
      {
        title: "Madhubani Painted Pendant Set",
        price: 999,
        mrp: 1799,
        image: "images/madhubani36.jpg"
      }
    ]
  },
  {
    id: 41,
    image: "images/madhubani41.jpg",
    title: "Madhubani Motif Adjustable Bracelet",
    originalPrice: 899,
    currentPrice: 489,
    discount: 46,
    type: "Bracelet",
    look: "Artisan",
    price: 489,
    category: "Bracelet",
    stock: 60,
    images: [
      "images/madhubani41.jpg"
    ],
    weight: "10.5",
    size: "Adjustable",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Red",
    description: "Crafted with love, this Madhubani motif adjustable bracelet features traditional patterns in lively red accents. The handcrafted detailing makes each piece unique, while the adjustable band ensures comfort and fit. Perfect for gifting or enhancing your festive look.",
    careInstructions: [
      "Keep dry.",
      "Store flat.",
      "Clean with a soft cloth."
    ],
    frequentlyBought: [
      {
        title: "Handpainted Madhubani Choker Set",
        price: 949,
        mrp: 1599,
        image: "images/madhubani40.jpg"
      },
      {
        title: "Madhubani Art Statement Ring",
        price: 349,
        mrp: 699,
        image: "images/madhubani37.jpg"
      }
    ]
  },
  {
    id: 42,
    image: "images/madhubani42.jpg",
    title: "Madhubani Lotus Maang Tikka",
    originalPrice: 799,
    currentPrice: 419,
    discount: 48,
    type: "Maang Tikka",
    look: "Traditional",
    price: 419,
    category: "Maang Tikka",
    stock: 35,
    images: [
      "images/madhubani42.jpg"
    ],
    weight: "8.2",
    size: "3.5 inch",
    material: "Brass",
    plating: "Gold Plated",
    color: "Gold-Pink",
    description: "A uniquely designed Madhubani Lotus Maang Tikka, this piece features hand-painted lotus motifs symbolizing purity and beauty. The gold plating and traditional styling make it ideal for bridal and festive occasions, adding a touch of folk art to your ensemble.",
    careInstructions: [
      "Handle with care.",
      "Keep away from water.",
      "Store in a box."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Motif Adjustable Bracelet",
        price: 489,
        mrp: 899,
        image: "images/madhubani41.jpg"
      },
      {
        title: "Madhubani Floral Drop Earrings",
        price: 399,
        mrp: 799,
        image: "images/madhubani34.jpg"
      }
    ]
  },
  {
    id: 43,
    image: "images/madhubani43.jpg",
    title: "Handpainted Madhubani Toe Ring Pair",
    originalPrice: 499,
    currentPrice: 269,
    discount: 46,
    type: "Toe Ring",
    look: "Handpainted",
    price: 269,
    category: "Toe Ring",
    stock: 45,
    images: [
      "images/madhubani43.jpg"
    ],
    weight: "5.0",
    size: "Adjustable",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Blue",
    description: "Step out in style with this handpainted Madhubani toe ring pair. Each ring features miniature folk motifs in soothing blue shades, making them a perfect blend of comfort and tradition. Adjustable and lightweight, they’re great for everyday as well as festive looks.",
    careInstructions: [
      "Remove before bathing.",
      "Avoid harsh soaps.",
      "Store away from sunlight."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Lotus Maang Tikka",
        price: 419,
        mrp: 799,
        image: "images/madhubani42.jpg"
      },
      {
        title: "Handcrafted Madhubani Bangle",
        price: 499,
        mrp: 999,
        image: "images/madhubani35.jpg"
      }
    ]
  },
  {
    id: 44,
    image: "images/madhubani44.jpg",
    title: "Madhubani Elephant Pendant",
    originalPrice: 1099,
    currentPrice: 599,
    discount: 45,
    type: "Pendant",
    look: "Folk",
    price: 599,
    category: "Necklace",
    stock: 30,
    images: [
      "images/madhubani44.jpg"
    ],
    weight: "11.0",
    size: "18 inch",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Yellow",
    description: "Showcasing the majestic elephant in traditional Madhubani style, this pendant is a celebration of Indian wildlife and artistry. The subtle yellow tones and detailed handwork make it a charming piece for both ethnic and modern outfits.",
    careInstructions: [
      "Store in a cool, dry place.",
      "Wipe gently after use.",
      "Avoid perfumes."
    ],
    frequentlyBought: [
      {
        title: "Handpainted Madhubani Toe Ring Pair",
        price: 269,
        mrp: 499,
        image: "images/madhubani43.jpg"
      },
      {
        title: "Madhubani Motif Adjustable Bracelet",
        price: 489,
        mrp: 899,
        image: "images/madhubani41.jpg"
      }
    ]
  },
  {
    id: 45,
    image: "images/madhubani45.jpg",
    title: "Madhubani Art Brooch",
    originalPrice: 599,
    currentPrice: 329,
    discount: 45,
    type: "Brooch",
    look: "Traditional",
    price: 329,
    category: "Brooch",
    stock: 55,
    images: [
      "images/madhubani45.jpg"
    ],
    weight: "5.5",
    size: "2 inch",
    material: "Brass",
    plating: "Gold Plated",
    color: "Gold-Multicolor",
    description: "Add a touch of Indian tradition to your attire with this Madhubani art brooch. The vibrant hand-painted design is truly unique, making it perfect for sarees, dupattas, or as a quirky accessory for bags and hats. Durable and easy to pin, it’s a conversation starter wherever you go.",
    careInstructions: [
      "Pin carefully.",
      "Keep away from moisture.",
      "Store in a pouch."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Elephant Pendant",
        price: 599,
        mrp: 1099,
        image: "images/madhubani44.jpg"
      },
      {
        title: "Madhubani Bird Motif Earrings",
        price: 449,
        mrp: 899,
        image: "images/madhubani38.jpg"
      }
    ]
  },
  {
    id: 46,
    image: "images/madhubani46.jpg",
    title: "Madhubani Painted Adjustable Anklet",
    originalPrice: 899,
    currentPrice: 489,
    discount: 46,
    type: "Anklet",
    look: "Handpainted",
    price: 489,
    category: "Anklet",
    stock: 34,
    images: [
      "images/madhubani46.jpg"
    ],
    weight: "9.5",
    size: "10 inch",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Pink",
    description: "This Madhubani painted adjustable anklet features delicate folk patterns and soft pink accents, making it a playful yet elegant accessory. The adjustable fit makes it comfortable for all-day wear, while the unique hand-painting ensures no two pieces are exactly alike.",
    careInstructions: [
      "Avoid water exposure.",
      "Wipe gently.",
      "Store flat."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Art Brooch",
        price: 329,
        mrp: 599,
        image: "images/madhubani45.jpg"
      },
      {
        title: "Handpainted Madhubani Toe Ring Pair",
        price: 269,
        mrp: 499,
        image: "images/madhubani43.jpg"
      }
    ]
  },
  {
    id: 47,
    image: "images/madhubani47.jpg",
    title: "Madhubani Art Dangler Earrings",
    originalPrice: 799,
    currentPrice: 429,
    discount: 46,
    type: "Dangler",
    look: "Handpainted",
    price: 429,
    category: "Earring",
    stock: 38,
    images: [
      "images/madhubani47.jpg"
    ],
    weight: "7.9",
    size: "2.5 inch",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Red",
    description: "Add a vibrant touch to your look with these handpainted Madhubani dangler earrings. Their bold colors and intricate patterns make them perfect for festivals or special occasions. Despite their size, they are lightweight and comfortable for extended wear.",
    careInstructions: [
      "Remove before sleeping.",
      "Avoid water.",
      "Clean with soft tissue."
    ],
    frequentlyBought: [
      {
        title: "Madhubani Painted Adjustable Anklet",
        price: 489,
        mrp: 899,
        image: "images/madhubani46.jpg"
      },
      {
        title: "Madhubani Lotus Maang Tikka",
        price: 419,
        mrp: 799,
        image: "images/madhubani42.jpg"
      }
    ]
  },
  {
    id: 48,
    image: "images/madhubani48.jpg",
    title: "Madhubani Motif Adjustable Nose Pin",
    originalPrice: 499,
    currentPrice: 259,
    discount: 48,
    type: "Nose Pin",
    look: "Handpainted",
    price: 259,
    category: "Nose Pin",
    stock: 60,
    images: [
      "images/madhubani48.jpg"
    ],
    weight: "2.1",
    size: "Adjustable",
    material: "Brass",
    plating: "Silver Plated",
    color: "Silver-Green",
    description: "This Madhubani motif adjustable nose pin is a unique accessory for anyone who loves folk art. The green hand-painted details and silver plating create a fresh, artistic vibe. Comfortable and easy to wear, it’s perfect for daily use or as a statement piece for special events.",
    careInstructions: [
      "Clean gently after use.",
      "Remove before washing face.",
      "Store in a dry pouch."
    ],
    frequentlyBought: [
      {
        title: "Handpainted Madhubani Choker Set",
        price: 949,
        mrp: 1599,
        image: "images/madhubani40.jpg"
      },
      {
        title: "Madhubani Motif Adjustable Bracelet",
        price: 489,
        mrp: 899,
        image: "images/madhubani41.jpg"
      }
    ]
  },
  // womens data id 49 to 64
  {
    id: 49,
    image: "images/image49.jpg",
    title: "Gold Plated Traditional Jhumka Earrings",
    originalPrice: 1499,
    currentPrice: 749,
    discount: 50,
    type: "Jhumka",
    look: "Traditional",
    price: 749,
    category: "Earring",
    stock: 50,
    images: [
      "images/image49.jpg",
      "images/image49_1.jpg",
      "images/image49_2.jpg"
    ],
    weight: "18.2",
    size: "3.5 x 2.5 inch",
    material: "Brass",
    plating: "Gold Plated",
    color: "Gold",
    description: "These gold plated traditional jhumka earrings are crafted to perfection for those who appreciate classic ethnic style. The intricate filigree work paired with delicate pearl drops creates an aura of elegance and festivity. Perfect for weddings, festivals, or special occasions, these earrings complement both sarees and lehengas. The lightweight design ensures comfort throughout the day, while the quality gold plating assures lasting shine. Elevate your look with this timeless piece.",
    careInstructions: [
      "Store in a dry place.",
      "Avoid contact with water and perfumes.",
      "Wipe with a soft cloth after use."
    ],
    frequentlyBought: [
      {
        title: "Classic Gold Plated Bangles Set",
        price: 899,
        mrp: 1599,
        image: "images/image50.jpg"
      },
      {
        title: "Traditional Pearl Maang Tikka",
        price: 499,
        mrp: 899,
        image: "images/image51.jpg"
      }
    ]
  },
  {
    id: 50,
    image: "images/image50.jpg",
    title: "Classic Gold Plated Bangles Set",
    originalPrice: 1599,
    currentPrice: 899,
    discount: 44,
    type: "Bangles",
    look: "Classic",
    price: 899,
    category: "Bangle",
    stock: 50,
    images: [
      "images/image50.jpg",
      "images/image50_1.jpg"
    ],
    weight: "35.0",
    size: "2.6 inch",
    material: "Brass",
    plating: "Gold Plated",
    color: "Gold",
    description: "This set of classic gold plated bangles is an essential addition to every woman’s jewelry collection. Their timeless design complements any outfit, from traditional sarees to modern dresses. Each bangle boasts a flawless gold finish and a sturdy build, ensuring years of wear without losing luster. Stack them for a festive look or wear solo for subtle grace. These bangles are perfect for daily wear as well as special occasions.",
    careInstructions: [
      "Keep away from chemicals.",
      "Clean with a soft dry cloth."
    ],
    frequentlyBought: [
      {
        title: "Gold Plated Traditional Jhumka Earrings",
        price: 749,
        mrp: 1499,
        image: "images/image49.jpg"
      },
      {
        title: "Red Enamelled Statement Ring",
        price: 399,
        mrp: 699,
        image: "images/image52.jpg"
      }
    ]
  },
  {
    id: 51,
    image: "images/image51.jpg",
    title: "Traditional Pearl Maang Tikka",
    originalPrice: 899,
    currentPrice: 499,
    discount: 44,
    type: "Maang Tikka",
    look: "Traditional",
    price: 499,
    category: "Maang Tikka",
    stock: 50,
    images: [
      "images/image51.jpg"
    ],
    weight: "10.8",
    size: "4.0 x 1.5 inch",
    material: "Alloy",
    plating: "Gold Plated",
    color: "Gold-White",
    description: "The traditional pearl maang tikka is a statement piece that brings regal charm to any ethnic ensemble. Crafted with lustrous pearls and highlighted with gold plating, it sits gracefully on the forehead, accentuating your features. Ideal for bridal wear or festive events, this maang tikka embodies elegance and cultural heritage. The secure clasp ensures a comfortable fit, letting you dance and move freely without worry.",
    careInstructions: [
      "Store separately in a box.",
      "Avoid direct sunlight."
    ],
    frequentlyBought: [
      {
        title: "Classic Gold Plated Bangles Set",
        price: 899,
        mrp: 1599,
        image: "images/image50.jpg"
      },
      {
        title: "Kundan Studded Necklace Set",
        price: 1199,
        mrp: 2199,
        image: "images/image53.jpg"
      }
    ]
  },
  {
    id: 52,
    image: "images/image52.jpg",
    title: "Red Enamelled Statement Ring",
    originalPrice: 699,
    currentPrice: 399,
    discount: 43,
    type: "Ring",
    look: "Statement",
    price: 399,
    category: "Ring",
    stock: 50,
    images: [
      "images/image52.jpg"
    ],
    weight: "7.2",
    size: "Adjustable",
    material: "Brass",
    plating: "Gold Plated",
    color: "Red-Gold",
    description: "Add a pop of color and confidence to your look with this red enamelled statement ring. The bold hue is beautifully contrasted by gold-plated detailing, making it a true centerpiece for your fingers. Its adjustable design guarantees a snug and comfortable fit for any hand. Whether paired with ethnic outfits or worn as a quirky addition to western attire, this ring delivers a dose of personality and style.",
    careInstructions: [
      "Remove before washing hands.",
      "Avoid impact with hard surfaces."
    ],
    frequentlyBought: [
      {
        title: "Classic Gold Plated Bangles Set",
        price: 899,
        mrp: 1599,
        image: "images/image50.jpg"
      },
      {
        title: "Gold Plated Traditional Jhumka Earrings",
        price: 749,
        mrp: 1499,
        image: "images/image49.jpg"
      }
    ]
  },
  {
    id: 53,
    image: "images/image53.jpg",
    title: "Kundan Studded Necklace Set",
    originalPrice: 2199,
    currentPrice: 1199,
    discount: 45,
    type: "Necklace",
    look: "Kundan",
    price: 1199,
    category: "Necklace",
    stock: 50,
    images: [
      "images/image53.jpg",
      "images/image53_1.jpg"
    ],
    weight: "28.5",
    size: "18 inch",
    material: "Alloy",
    plating: "Gold Plated",
    color: "Gold-White",
    description: "This kundan studded necklace set is designed for women who love a touch of royal glam. The intricate arrangement of sparkling kundan stones and gold-plated alloy offers a regal vibe, perfect for weddings and grand celebrations. The set includes matching earrings that complete your traditional look. Easy to wear and lightweight, this set ensures both comfort and a striking appearance all day long.",
    careInstructions: [
      "Keep in a velvet pouch.",
      "Avoid spraying perfume directly."
    ],
    frequentlyBought: [
      {
        title: "Traditional Pearl Maang Tikka",
        price: 499,
        mrp: 899,
        image: "images/image51.jpg"
      },
      {
        title: "Pearl Drop Earrings",
        price: 349,
        mrp: 699,
        image: "images/image54.jpg"
      }
    ]
  },
  {
    id: 54,
    image: "images/image54.jpg",
    title: "Pearl Drop Earrings",
    originalPrice: 699,
    currentPrice: 349,
    discount: 50,
    type: "Drop",
    look: "Classic",
    price: 349,
    category: "Earring",
    stock: 50,
    images: [
      "images/image54.jpg"
    ],
    weight: "11.0",
    size: "2.8 x 1.2 inch",
    material: "Alloy",
    plating: "Gold Plated",
    color: "Gold-White",
    description: "These pearl drop earrings bring understated elegance to any outfit. Featuring luminous pearls suspended from gold-plated hooks, their simplicity is their charm. Ideal for both daily wear and special occasions, they pair well with both Indian and western attire. Their lightweight structure ensures all-day comfort, while the classic design guarantees they never go out of style.",
    careInstructions: [
      "Clean gently after use.",
      "Do not expose to water."
    ],
    frequentlyBought: [
      {
        title: "Kundan Studded Necklace Set",
        price: 1199,
        mrp: 2199,
        image: "images/image53.jpg"
      },
      {
        title: "Classic Gold Plated Bangles Set",
        price: 899,
        mrp: 1599,
        image: "images/image50.jpg"
      }
    ]
  },
  {
    id: 55,
    image: "images/image55.jpg",
    title: "Meenakari Floral Stud Earrings",
    originalPrice: 799,
    currentPrice: 399,
    discount: 50,
    type: "Stud",
    look: "Meenakari",
    price: 399,
    category: "Earring",
    stock: 50,
    images: [
      "images/image55.jpg"
    ],
    weight: "8.4",
    size: "1.5 inch",
    material: "Brass",
    plating: "Gold Plated",
    color: "Pink-Green",
    description: "Brighten up your day with these meenakari floral stud earrings! The vibrant pink and green enamel work is beautifully complemented by gold plating, capturing the essence of traditional Indian craftsmanship. These earrings are perfect for adding a whimsical, feminine touch to your look. Lightweight and comfortable, they’re suitable for extended wear at festive events or casual outings.",
    careInstructions: [
      "Store in a soft cloth pouch.",
      "Keep away from direct heat."
    ],
    frequentlyBought: [
      {
        title: "Red Enamelled Statement Ring",
        price: 399,
        mrp: 699,
        image: "images/image52.jpg"
      },
      {
        title: "Kundan Studded Necklace Set",
        price: 1199,
        mrp: 2199,
        image: "images/image53.jpg"
      }
    ]
  },
  {
    id: 56,
    image: "images/image56.jpg",
    title: "Antique Gold Plated Choker Set",
    originalPrice: 1899,
    currentPrice: 999,
    discount: 47,
    type: "Choker",
    look: "Antique",
    price: 999,
    category: "Necklace",
    stock: 50,
    images: [
      "images/image56.jpg",
      "images/image56_1.jpg"
    ],
    weight: "26.0",
    size: "16 inch",
    material: "Brass",
    plating: "Antique Gold",
    color: "Gold",
    description: "Step back in time with this antique gold plated choker set. Featuring intricate vintage motifs and a rich antique finish, this necklace is perfect for anyone who appreciates heritage jewelry. The set comes with matching earrings, making it ideal for festive occasions or classical dance performances. The sturdy clasp and soft backing ensure comfort while maintaining a regal appearance.",
    careInstructions: [
      "Avoid moisture.",
      "Polish with a dry cloth."
    ],
    frequentlyBought: [
      {
        title: "Gold Plated Traditional Jhumka Earrings",
        price: 749,
        mrp: 1499,
        image: "images/image49.jpg"
      },
      {
        title: "Classic Gold Plated Bangles Set",
        price: 899,
        mrp: 1599,
        image: "images/image50.jpg"
      }
    ]
  },
  {
    id: 57,
    image: "images/image57.jpg",
    title: "Oxidised Silver Anklet Pair",
    originalPrice: 1099,
    currentPrice: 599,
    discount: 45,
    type: "Anklet",
    look: "Oxidised",
    price: 599,
    category: "Anklet",
    stock: 50,
    images: [
      "images/image57.jpg"
    ],
    weight: "22.0",
    size: "10 inch",
    material: "Alloy",
    plating: "Silver Plated",
    color: "Silver",
    description: "This pair of oxidised silver anklets is a wonderful way to enhance your traditional look. Decorated with tiny ghungroo beads, they produce a soft, pleasant sound with every step. The oxidised finish makes them a great match for ethnic outfits, especially during cultural festivals. Adjustable and comfortable, these anklets are both durable and stylish for everyday or occasion wear.",
    careInstructions: [
      "Avoid direct contact with water.",
      "Store in a jewelry box."
    ],
    frequentlyBought: [
      {
        title: "Meenakari Floral Stud Earrings",
        price: 399,
        mrp: 799,
        image: "images/image55.jpg"
      },
      {
        title: "Gold Plated Traditional Jhumka Earrings",
        price: 749,
        mrp: 1499,
        image: "images/image49.jpg"
      }
    ]
  },
  {
    id: 58,
    image: "images/image58.jpg",
    title: "Peacock Design Adjustable Bracelet",
    originalPrice: 849,
    currentPrice: 499,
    discount: 41,
    type: "Bracelet",
    look: "Designer",
    price: 499,
    category: "Bracelet",
    stock: 50,
    images: [
      "images/image58.jpg"
    ],
    weight: "9.5",
    size: "Adjustable",
    material: "Brass",
    plating: "Gold Plated",
    color: "Blue-Gold",
    description: "Showcase your love for Indian artistry with this peacock design adjustable bracelet. The intricate peacock motif, highlighted with blue and gold accents, is both eye-catching and elegant. The adjustable clasp ensures a secure and comfortable fit for any wrist size. Perfect for festive occasions or as a thoughtful gift, this bracelet adds a touch of cultural sophistication to any look.",
    careInstructions: [
      "Avoid chemicals.",
      "Wipe after each use."
    ],
    frequentlyBought: [
      {
        title: "Classic Gold Plated Bangles Set",
        price: 899,
        mrp: 1599,
        image: "images/image50.jpg"
      },
      {
        title: "Pearl Drop Earrings",
        price: 349,
        mrp: 699,
        image: "images/image54.jpg"
      }
    ]
  },
  {
    id: 59,
    image: "images/image59.jpg",
    title: "Gold Plated Floral Brooch",
    originalPrice: 599,
    currentPrice: 299,
    discount: 50,
    type: "Brooch",
    look: "Floral",
    price: 299,
    category: "Brooch",
    stock: 50,
    images: [
      "images/image59.jpg"
    ],
    weight: "6.0",
    size: "2 inch",
    material: "Brass",
    plating: "Gold Plated",
    color: "Gold-Pink",
    description: "Add a delicate touch to your saree or scarf with this gold plated floral brooch. The design features a dainty flower with pink stone embellishments, making it an eye-catching accessory for both formal and semi-formal occasions. Its secure pin ensures it stays in place, while the gold finish adds a hint of luxury to any ensemble. This brooch also makes a charming gift for loved ones.",
    careInstructions: [
      "Pin carefully on fabric.",
      "Keep away from water."
    ],
    frequentlyBought: [
      {
        title: "Meenakari Floral Stud Earrings",
        price: 399,
        mrp: 799,
        image: "images/image55.jpg"
      },
      {
        title: "Red Enamelled Statement Ring",
        price: 399,
        mrp: 699,
        image: "images/image52.jpg"
      }
    ]
  },
  {
    id: 60,
    image: "images/image60.jpg",
    title: "Gold Plated Layered Chain Necklace",
    originalPrice: 1299,
    currentPrice: 699,
    discount: 46,
    type: "Layered",
    look: "Trendy",
    price: 699,
    category: "Necklace",
    stock: 50,
    images: [
      "images/image60.jpg"
    ],
    weight: "20.0",
    size: "22 inch",
    material: "Alloy",
    plating: "Gold Plated",
    color: "Gold",
    description: "Capture the essence of modern fashion with this gold plated layered chain necklace. Designed to add depth and interest to any outfit, the necklace features multiple delicate chains in one piece. The gold plating offers a radiant finish that pairs well with both day and night looks. Lightweight and easy to style, this accessory is perfect for layering with other necklaces or wearing solo.",
    careInstructions: [
      "Keep tangle free.",
      "Store flat."
    ],
    frequentlyBought: [
      {
        title: "Peacock Design Adjustable Bracelet",
        price: 499,
        mrp: 849,
        image: "images/image58.jpg"
      },
      {
        title: "Classic Gold Plated Bangles Set",
        price: 899,
        mrp: 1599,
        image: "images/image50.jpg"
      }
    ]
  },
  {
    id: 61,
    image: "images/image61.jpg",
    title: "Pearl and Kundan Matha Patti",
    originalPrice: 1899,
    currentPrice: 1099,
    discount: 42,
    type: "Matha Patti",
    look: "Kundan",
    price: 1099,
    category: "Headpiece",
    stock: 50,
    images: [
      "images/image61.jpg"
    ],
    weight: "18.5",
    size: "Adjustable",
    material: "Alloy",
    plating: "Gold Plated",
    color: "Gold-White",
    description: "Make a statement on your special day with this exquisite pearl and kundan matha patti. The headpiece features intricate kundan work interspersed with lustrous pearls, designed to bring out your inner queen. Adjustable and lightweight, it stays secure and comfortable throughout ceremonies. Ideal for brides or anyone wishing to add a royal touch to their festive ensemble.",
    careInstructions: [
      "Store flat.",
      "Avoid sharp bends."
    ],
    frequentlyBought: [
      {
        title: "Kundan Studded Necklace Set",
        price: 1199,
        mrp: 2199,
        image: "images/image53.jpg"
      },
      {
        title: "Traditional Pearl Maang Tikka",
        price: 499,
        mrp: 899,
        image: "images/image51.jpg"
      }
    ]
  },
  {
    id: 62,
    image: "images/image62.jpg",
    title: "Silver Plated Toe Rings Pair",
    originalPrice: 499,
    currentPrice: 249,
    discount: 50,
    type: "Toe Ring",
    look: "Simple",
    price: 249,
    category: "Toe Ring",
    stock: 50,
    images: [
      "images/image62.jpg"
    ],
    weight: "4.8",
    size: "Adjustable",
    material: "Alloy",
    plating: "Silver Plated",
    color: "Silver",
    description: "This pair of silver plated toe rings is a charming accessory for any woman who loves traditional jewelry. Their simple yet elegant design makes them versatile enough for daily wear or festive occasions. The adjustable band ensures a comfortable fit for all sizes. Durable and rust-resistant, these toe rings are a subtle way to add a touch of tradition to your everyday look.",
    careInstructions: [
      "Do not twist excessively.",
      "Remove before bathing."
    ],
    frequentlyBought: [
      {
        title: "Oxidised Silver Anklet Pair",
        price: 599,
        mrp: 1099,
        image: "images/image57.jpg"
      },
      {
        title: "Meenakari Floral Stud Earrings",
        price: 399,
        mrp: 799,
        image: "images/image55.jpg"
      }
    ]
  },
  {
    id: 63,
    image: "images/image63.jpg",
    title: "CZ Studded Adjustable Bracelet",
    originalPrice: 1099,
    currentPrice: 599,
    discount: 45,
    type: "Bracelet",
    look: "CZ",
    price: 599,
    category: "Bracelet",
    stock: 50,
    images: [
      "images/image63.jpg"
    ],
    weight: "10.5",
    size: "Adjustable",
    material: "Alloy",
    plating: "Rose Gold Plated",
    color: "Rose Gold",
    description: "Add sparkle to your wrist with this CZ studded adjustable bracelet. The rose gold plating and shimmering cubic zirconia stones offer a contemporary yet luxurious feel. Its adjustable design ensures a perfect fit for any wrist size. Ideal for parties or as a thoughtful gift, this bracelet will become your go-to accessory for a bit of everyday glamour.",
    careInstructions: [
      "Avoid water and perfumes.",
      "Clean with a soft cloth."
    ],
    frequentlyBought: [
      {
        title: "Gold Plated Layered Chain Necklace",
        price: 699,
        mrp: 1299,
        image: "images/image60.jpg"
      },
      {
        title: "Silver Plated Toe Rings Pair",
        price: 249,
        mrp: 499,
        image: "images/image62.jpg"
      }
    ]
  },
  {
    id: 64,
    image: "images/image64.jpg",
    title: "Antique Finish Long Necklace Set",
    originalPrice: 2199,
    currentPrice: 1249,
    discount: 43,
    type: "Long Necklace",
    look: "Antique",
    price: 1249,
    category: "Necklace",
    stock: 50,
    images: [
      "images/image64.jpg",
      "images/image64_1.jpg"
    ],
    weight: "29.5",
    size: "24 inch",
    material: "Brass",
    plating: "Antique Gold",
    color: "Antique Gold",
    description: "This antique finish long necklace set is a tribute to timeless craftsmanship. The extended length and intricate detailing make it a standout accessory for sarees and lehengas. The set comes with matching earrings for a coordinated look. Durable and beautifully finished, this necklace set is perfect for those who want to blend tradition with a touch of vintage glamour at weddings, parties, or festive gatherings.",
    careInstructions: [
      "Keep away from moisture.",
      "Store in a box."
    ],
    frequentlyBought: [
      {
        title: "Antique Gold Plated Choker Set",
        price: 999,
        mrp: 1899,
        image: "images/image56.jpg"
      },
      {
        title: "Gold Plated Traditional Jhumka Earrings",
        price: 749,
        mrp: 1499,
        image: "images/image49.jpg"
      }
    ]
  },
  {
    id: 65,
    image: "images/sterling65.jpg",
    title: "925 Sterling Silver Infinity Pendant",
    originalPrice: 2499,
    currentPrice: 1499,
    discount: 40,
    type: "Pendant",
    look: "Minimal",
    price: 1499,
    category: "Necklace",
    stock: 30,
    images: [
      "images/sterling65.jpg",
      "images/sterling65_1.jpg"
    ],
    weight: "7.2",
    size: "18 inch",
    material: "925 Sterling Silver",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "Celebrate endless love and timeless style with this 925 Sterling Silver Infinity Pendant. Crafted with precision, its minimalistic design makes it a perfect everyday piece or a thoughtful gift. The rhodium plating ensures a lasting shine, while its lightweight feel offers comfort for daily wear. Whether paired with casual or formal outfits, this pendant adds a subtle touch of elegance to your look.",
    careInstructions: [
      "Keep away from chemicals.",
      "Store in a soft pouch.",
      "Clean with a silver cloth."
    ],
    frequentlyBought: [
      {
        title: "Sterling Silver Stud Earrings",
        price: 799,
        mrp: 1599,
        image: "images/sterling66.jpg"
      },
      {
        title: "Silver Adjustable Chain",
        price: 999,
        mrp: 1999,
        image: "images/sterling67.jpg"
      }
    ]
  },
  {
    id: 66,
    image: "images/sterling66.jpg",
    title: "Sterling Silver Stud Earrings",
    originalPrice: 1599,
    currentPrice: 799,
    discount: 50,
    type: "Stud",
    look: "Classic",
    price: 799,
    category: "Earring",
    stock: 45,
    images: [
      "images/sterling66.jpg"
    ],
    weight: "3.5",
    size: "0.6 inch",
    material: "925 Sterling Silver",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "Simple and elegant, these Sterling Silver Stud Earrings are ideal for both everyday wear and special occasions. Their timeless round design makes them a universal accessory, while the rhodium plating prevents tarnish and keeps them shining bright. Hypoallergenic and lightweight, they are perfect for sensitive ears and all-day comfort.",
    careInstructions: [
      "Remove before bathing.",
      "Wipe with a soft cloth.",
      "Store in a dry place."
    ],
    frequentlyBought: [
      {
        title: "925 Sterling Silver Infinity Pendant",
        price: 1499,
        mrp: 2499,
        image: "images/sterling65.jpg"
      },
      {
        title: "Silver Adjustable Chain",
        price: 999,
        mrp: 1999,
        image: "images/sterling67.jpg"
      }
    ]
  },
  {
    id: 67,
    image: "images/sterling67.jpg",
    title: "Silver Adjustable Chain",
    originalPrice: 1999,
    currentPrice: 999,
    discount: 50,
    type: "Chain",
    look: "Minimal",
    price: 999,
    category: "Necklace",
    stock: 50,
    images: [
      "images/sterling67.jpg"
    ],
    weight: "6.2",
    size: "Adjustable up to 20 inch",
    material: "925 Sterling Silver",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "Designed for versatility, this Silver Adjustable Chain is a must-have for any jewelry collection. Made from pure 925 sterling silver, it can be worn solo for a minimal look or paired with your favorite pendants. The adjustable clasp allows for easy length customization, making it suitable for layering or standalone wear.",
    careInstructions: [
      "Store flat to prevent tangling.",
      "Clean with mild soap and water.",
      "Dry thoroughly before storing."
    ],
    frequentlyBought: [
      {
        title: "Sterling Silver Stud Earrings",
        price: 799,
        mrp: 1599,
        image: "images/sterling66.jpg"
      },
      {
        title: "Dainty Silver Heart Pendant",
        price: 1399,
        mrp: 2299,
        image: "images/sterling68.jpg"
      }
    ]
  },
  {
    id: 68,
    image: "images/sterling68.jpg",
    title: "Dainty Silver Heart Pendant",
    originalPrice: 2299,
    currentPrice: 1399,
    discount: 39,
    type: "Pendant",
    look: "Romantic",
    price: 1399,
    category: "Necklace",
    stock: 35,
    images: [
      "images/sterling68.jpg"
    ],
    weight: "5.6",
    size: "17 inch",
    material: "925 Sterling Silver",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "Express your affection with this Dainty Silver Heart Pendant. Crafted with premium 925 sterling silver and finished with rhodium for extra shine, its delicate design is both charming and durable. Perfect for gifting to a loved one or wearing as a daily symbol of love and care.",
    careInstructions: [
      "Avoid direct perfume contact.",
      "Store in provided box.",
      "Clean regularly for best shine."
    ],
    frequentlyBought: [
      {
        title: "Silver Adjustable Chain",
        price: 999,
        mrp: 1999,
        image: "images/sterling67.jpg"
      },
      {
        title: "Silver Solitaire Ring",
        price: 1699,
        mrp: 2899,
        image: "images/sterling69.jpg"
      }
    ]
  },
  {
    id: 69,
    image: "images/sterling69.jpg",
    title: "Silver Solitaire Ring",
    originalPrice: 2899,
    currentPrice: 1699,
    discount: 41,
    type: "Ring",
    look: "Elegant",
    price: 1699,
    category: "Ring",
    stock: 40,
    images: [
      "images/sterling69.jpg"
    ],
    weight: "4.1",
    size: "Adjustable",
    material: "925 Sterling Silver, CZ",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "Showcase timeless elegance with this Silver Solitaire Ring, featuring a brilliant cubic zirconia at its center. The sleek sterling silver band is adjustable for comfort and fit. Its classic design is perfect for proposals, anniversaries, or simply adding a touch of sophistication to your wardrobe.",
    careInstructions: [
      "Remove during heavy work.",
      "Avoid chlorine and harsh chemicals.",
      "Wipe gently after wear."
    ],
    frequentlyBought: [
      {
        title: "Dainty Silver Heart Pendant",
        price: 1399,
        mrp: 2299,
        image: "images/sterling68.jpg"
      },
      {
        title: "Sterling Silver Hoop Earrings",
        price: 999,
        mrp: 1999,
        image: "images/sterling70.jpg"
      }
    ]
  },
  {
    id: 70,
    image: "images/sterling70.jpg",
    title: "Sterling Silver Hoop Earrings",
    originalPrice: 1999,
    currentPrice: 999,
    discount: 50,
    type: "Hoop",
    look: "Modern",
    price: 999,
    category: "Earring",
    stock: 36,
    images: [
      "images/sterling70.jpg"
    ],
    weight: "6.8",
    size: "1.5 inch",
    material: "925 Sterling Silver",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "Upgrade your accessory collection with these Sterling Silver Hoop Earrings. Their modern, minimalist design is perfect for all occasions, while the strong clasp and lightweight feel provide both security and comfort. Tarnish-resistant and hypoallergenic, they are a true everyday essential.",
    careInstructions: [
      "Remove before swimming.",
      "Clean with a silver wipe.",
      "Store separately to avoid scratches."
    ],
    frequentlyBought: [
      {
        title: "Silver Solitaire Ring",
        price: 1699,
        mrp: 2899,
        image: "images/sterling69.jpg"
      },
      {
        title: "Sterling Silver Stud Earrings",
        price: 799,
        mrp: 1599,
        image: "images/sterling66.jpg"
      }
    ]
  },
  {
    id: 71,
    image: "images/sterling71.jpg",
    title: "Classic Silver Chain Bracelet",
    originalPrice: 1599,
    currentPrice: 849,
    discount: 47,
    type: "Bracelet",
    look: "Classic",
    price: 849,
    category: "Bracelet",
    stock: 42,
    images: [
      "images/sterling71.jpg"
    ],
    weight: "8.0",
    size: "7.5 inch",
    material: "925 Sterling Silver",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "The Classic Silver Chain Bracelet is a timeless piece that seamlessly fits into any jewelry collection. Made from pure sterling silver, its subtle shine and sturdy links make it suitable for both men and women. Its secure clasp ensures all-day wear without worry.",
    careInstructions: [
      "Clean regularly for shine.",
      "Avoid chemical cleaners.",
      "Store flat to prevent kinks."
    ],
    frequentlyBought: [
      {
        title: "Sterling Silver Hoop Earrings",
        price: 999,
        mrp: 1999,
        image: "images/sterling70.jpg"
      },
      {
        title: "925 Sterling Silver Infinity Pendant",
        price: 1499,
        mrp: 2499,
        image: "images/sterling65.jpg"
      }
    ]
  },
  {
    id: 72,
    image: "images/sterling72.jpg",
    title: "Sterling Silver Toe Ring Pair",
    originalPrice: 799,
    currentPrice: 399,
    discount: 50,
    type: "Toe Ring",
    look: "Simple",
    price: 399,
    category: "Toe Ring",
    stock: 55,
    images: [
      "images/sterling72.jpg"
    ],
    weight: "3.2",
    size: "Adjustable",
    material: "925 Sterling Silver",
    plating: "None",
    color: "Silver",
    description: "This pair of Sterling Silver Toe Rings is a subtle way to celebrate tradition and style. Their adjustable design ensures a comfortable fit, while the pure silver build offers durability and shine. Wear them daily for a touch of understated elegance.",
    careInstructions: [
      "Remove before bathing.",
      "Clean with a damp cloth.",
      "Store in a dry pouch."
    ],
    frequentlyBought: [
      {
        title: "Classic Silver Chain Bracelet",
        price: 849,
        mrp: 1599,
        image: "images/sterling71.jpg"
      },
      {
        title: "Sterling Silver Anklet",
        price: 1199,
        mrp: 1999,
        image: "images/sterling73.jpg"
      }
    ]
  },
  {
    id: 73,
    image: "images/sterling73.jpg",
    title: "Sterling Silver Anklet",
    originalPrice: 1999,
    currentPrice: 1199,
    discount: 40,
    type: "Anklet",
    look: "Minimal",
    price: 1199,
    category: "Anklet",
    stock: 38,
    images: [
      "images/sterling73.jpg"
    ],
    weight: "9.7",
    size: "10 inch",
    material: "925 Sterling Silver",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "Adorn your ankles with this elegant Sterling Silver Anklet. Its sleek and minimal design makes it suitable for both traditional and western attire. The strong clasp ensures secure wear, while the high-quality silver construction provides a brilliant shine that lasts.",
    careInstructions: [
      "Keep away from moisture.",
      "Store in original packaging.",
      "Polish gently when needed."
    ],
    frequentlyBought: [
      {
        title: "Sterling Silver Toe Ring Pair",
        price: 399,
        mrp: 799,
        image: "images/sterling72.jpg"
      },
      {
        title: "Classic Silver Chain Bracelet",
        price: 849,
        mrp: 1599,
        image: "images/sterling71.jpg"
      }
    ]
  },
  {
    id: 74,
    image: "images/sterling74.jpg",
    title: "Sterling Silver Evil Eye Pendant",
    originalPrice: 2299,
    currentPrice: 1399,
    discount: 39,
    type: "Pendant",
    look: "Trendy",
    price: 1399,
    category: "Necklace",
    stock: 30,
    images: [
      "images/sterling74.jpg"
    ],
    weight: "6.3",
    size: "16 inch",
    material: "925 Sterling Silver, Enamel",
    plating: "Rhodium Plated",
    color: "Silver-Blue",
    description: "Ward off negativity with the Sterling Silver Evil Eye Pendant. Featuring a vibrant blue enamel centerpiece, this pendant is both trendy and meaningful. Crafted from pure sterling silver, it is lightweight, comfortable, and adds a striking touch to any look.",
    careInstructions: [
      "Avoid harsh detergents.",
      "Clean gently with a cloth.",
      "Store separately to prevent scratches."
    ],
    frequentlyBought: [
      {
        title: "Dainty Silver Heart Pendant",
        price: 1399,
        mrp: 2299,
        image: "images/sterling68.jpg"
      },
      {
        title: "Sterling Silver Stud Earrings",
        price: 799,
        mrp: 1599,
        image: "images/sterling66.jpg"
      }
    ]
  },
  {
    id: 75,
    image: "images/sterling75.jpg",
    title: "Sterling Silver Leaf Ring",
    originalPrice: 1899,
    currentPrice: 1099,
    discount: 42,
    type: "Ring",
    look: "Nature",
    price: 1099,
    category: "Ring",
    stock: 32,
    images: [
      "images/sterling75.jpg"
    ],
    weight: "3.9",
    size: "Adjustable",
    material: "925 Sterling Silver",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "Inspired by the beauty of nature, this Sterling Silver Leaf Ring features delicate leaf motifs wrapped around your finger. Adjustable for comfort, the ring's fine details and bright finish make it a unique accessory for everyday wear or gifting.",
    careInstructions: [
      "Remove before physical work.",
      "Clean with silver polish.",
      "Store in a ring box."
    ],
    frequentlyBought: [
      {
        title: "Sterling Silver Toe Ring Pair",
        price: 399,
        mrp: 799,
        image: "images/sterling72.jpg"
      },
      {
        title: "Sterling Silver Anklet",
        price: 1199,
        mrp: 1999,
        image: "images/sterling73.jpg"
      }
    ]
  },
  {
    id: 76,
    image: "images/sterling76.jpg",
    title: "Sterling Silver Adjustable Bangle",
    originalPrice: 2499,
    currentPrice: 1499,
    discount: 40,
    type: "Bangle",
    look: "Classic",
    price: 1499,
    category: "Bangle",
    stock: 27,
    images: [
      "images/sterling76.jpg"
    ],
    weight: "13.5",
    size: "Adjustable",
    material: "925 Sterling Silver",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "This classic Sterling Silver Adjustable Bangle is both elegant and comfortable. The smooth, polished finish and sturdy build make it a lasting addition to your jewelry collection. Its adjustable design ensures a perfect fit, making it a suitable gift for any occasion.",
    careInstructions: [
      "Keep away from harsh chemicals.",
      "Wipe clean after wear.",
      "Store flat."
    ],
    frequentlyBought: [
      {
        title: "Sterling Silver Leaf Ring",
        price: 1099,
        mrp: 1899,
        image: "images/sterling75.jpg"
      },
      {
        title: "Sterling Silver Hoop Earrings",
        price: 999,
        mrp: 1999,
        image: "images/sterling70.jpg"
      }
    ]
  },
  {
    id: 77,
    image: "images/sterling77.jpg",
    title: "Sterling Silver Butterfly Necklace",
    originalPrice: 2599,
    currentPrice: 1599,
    discount: 38,
    type: "Pendant",
    look: "Trendy",
    price: 1599,
    category: "Necklace",
    stock: 22,
    images: [
      "images/sterling77.jpg",
      "images/sterling77_1.jpg"
    ],
    weight: "8.2",
    size: "18 inch",
    material: "925 Sterling Silver, Enamel",
    plating: "Rhodium Plated",
    color: "Silver-Pink",
    description: "Charming and youthful, this Sterling Silver Butterfly Necklace features a hand-enameled butterfly on a delicate chain. The playful design is perfect for all ages, while the sterling silver ensures lasting shine and durability. Great as a gift or for adding a pop of color to your ensemble.",
    careInstructions: [
      "Clean with a soft cloth.",
      "Store in its box.",
      "Avoid abrasive surfaces."
    ],
    frequentlyBought: [
      {
        title: "Dainty Silver Heart Pendant",
        price: 1399,
        mrp: 2299,
        image: "images/sterling68.jpg"
      },
      {
        title: "Sterling Silver Stud Earrings",
        price: 799,
        mrp: 1599,
        image: "images/sterling66.jpg"
      }
    ]
  },
  {
    id: 78,
    image: "images/sterling78.jpg",
    title: "Sterling Silver Ball Chain",
    originalPrice: 1799,
    currentPrice: 1099,
    discount: 39,
    type: "Chain",
    look: "Contemporary",
    price: 1099,
    category: "Necklace",
    stock: 28,
    images: [
      "images/sterling78.jpg"
    ],
    weight: "7.8",
    size: "20 inch",
    material: "925 Sterling Silver",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "With its modern ball-link design, this Sterling Silver Ball Chain adds a contemporary flair to any pendant or can be worn alone for a chic look. Durable and easy to maintain, it is an ideal everyday accessory for men and women alike.",
    careInstructions: [
      "Avoid chemicals and perfumes.",
      "Store flat when not in use.",
      "Wipe after every wear."
    ],
    frequentlyBought: [
      {
        title: "Sterling Silver Stud Earrings",
        price: 799,
        mrp: 1599,
        image: "images/sterling66.jpg"
      },
      {
        title: "Sterling Silver Adjustable Bangle",
        price: 1499,
        mrp: 2499,
        image: "images/sterling76.jpg"
      }
    ]
  },
  {
    id: 79,
    image: "images/sterling79.jpg",
    title: "Sterling Silver CZ Bracelet",
    originalPrice: 2299,
    currentPrice: 1399,
    discount: 39,
    type: "Bracelet",
    look: "Elegant",
    price: 1399,
    category: "Bracelet",
    stock: 30,
    images: [
      "images/sterling79.jpg"
    ],
    weight: "7.3",
    size: "7 inch",
    material: "925 Sterling Silver, CZ",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "Add a touch of sparkle to your wrist with this Sterling Silver CZ Bracelet. Studded with high-quality cubic zirconia stones, it offers luxurious shine and sophistication. The secure clasp and comfortable fit make it perfect for both daily and occassional wear.",
    careInstructions: [
      "Keep dry and clean.",
      "Wipe gently after use.",
      "Store away from direct sunlight."
    ],
    frequentlyBought: [
      {
        title: "Sterling Silver Ball Chain",
        price: 1099,
        mrp: 1799,
        image: "images/sterling78.jpg"
      },
      {
        title: "Sterling Silver Leaf Ring",
        price: 1099,
        mrp: 1899,
        image: "images/sterling75.jpg"
      }
    ]
  },
  {
    id: 80,
    image: "images/sterling80.jpg",
    title: "Sterling Silver Solitaire Pendant",
    originalPrice: 2899,
    currentPrice: 1799,
    discount: 38,
    type: "Pendant",
    look: "Elegant",
    price: 1799,
    category: "Necklace",
    stock: 19,
    images: [
      "images/sterling80.jpg"
    ],
    weight: "5.8",
    size: "18 inch",
    material: "925 Sterling Silver, CZ",
    plating: "Rhodium Plated",
    color: "Silver",
    description: "Radiate elegance and style with this Sterling Silver Solitaire Pendant. Featuring a single dazzling cubic zirconia, it is set in a sleek sterling silver frame for timeless appeal. The piece is rhodium plated for extra brilliance and protection, making it a wonderful gift or addition to your personal collection.",
    careInstructions: [
      "Avoid contact with lotions.",
      "Clean gently with a silver cloth.",
      "Store in a soft pouch."
    ],
    frequentlyBought: [
      {
        title: "Sterling Silver CZ Bracelet",
        price: 1399,
        mrp: 2299,
        image: "images/sterling79.jpg"
      },
      {
        title: "Sterling Silver Stud Earrings",
        price: 799,
        mrp: 1599,
        image: "images/sterling66.jpg"
      }
    ]
  },
  {
    id: 81,
    image: "images/fringe1.jpg",
    title: "Fringes Bloom In Fringe Statement Choker Set",
    originalPrice: 1999,
    currentPrice: 1199,
    discount: 40,
    type: "Choker Set",
    look: "Statement",
    price: 1199,
    category: "Necklace",
    stock: 10,
    images: [
      "images/fringe1.jpg",
      "images/fringe11.jpg",
      "images/fringe12.jpg"
    ],
    weight: "22.5",
    size: "Adjustable",
    material: "Alloy, Beads",
    plating: "Gold Plated",
    color: "Multicolor",
    description: "Make a bold entrance with the Fringes Bloom In Fringe Statement Choker Set. Vibrant beads and gold plating create a playful, dramatic neckline accent with a festival vibe.",
    careInstructions: [
      "Avoid contact with perfumes.",
      "Wipe gently with a soft cloth.",
      "Store in a dry, cool place."
    ],
    frequentlyBought: [
      {
        title: "Fringes Stay Connected Statement Ring",
        price: 649,
        mrp: 999,
        image: "images/fringe2.jpg"
      },
      {
        title: "Fringes Dramatic Fringe Pendant Set",
        price: 999,
        mrp: 1599,
        image: "images/fringe5.jpg"
      }
    ]
},
{
    id: 82,
    image: "images/fringe2.jpg",
    title: "Fringes Stay Connected Statement Ring",
    originalPrice: 999,
    currentPrice: 649,
    discount: 35,
    type: "Ring",
    look: "Statement",
    price: 649,
    category: "Ring",
    stock: 15,
    images: [
      "images/fringe2.jpg",
      "images/fringe21.jpg",
      "images/fringe22.jpg"
    ],
    weight: "7.2",
    size: "Adjustable",
    material: "Alloy",
    plating: "Gold Plated",
    color: "Gold",
    description: "A bold statement ring with connecting fringe details, perfect for stacking or wearing solo for a standout look.",
    careInstructions: [
      "Remove before washing hands.",
      "Keep away from harsh chemicals.",
      "Store separately."
    ],
    frequentlyBought: [
      {
        title: "Fringes Weaved Fringe Choker Set",
        price: 1099,
        mrp: 1899,
        image: "images/fringe3.jpg"
      },
      {
        title: "Fringes Dangling Ring",
        price: 559,
        mrp: 799,
        image: "images/fringe4.jpg"
      }
    ]
},
{
    id: 83,
    image: "images/fringe3.jpg",
    title: "Fringes Weaved Fringe Choker Set",
    originalPrice: 1899,
    currentPrice: 1099,
    discount: 42,
    type: "Choker Set",
    look: "Trendy",
    price: 1099,
    category: "Necklace",
    stock: 8,
    images: [
      "images/fringe3.jpg",
      "images/fringe31.jpg",
      "images/fringe33.jpg"
      

    ],
    weight: "17.0",
    size: "Adjustable",
    material: "Alloy, Fabric",
    plating: "Gold Plated",
    color: "Multicolor",
    description: "Weaved with playful fringes, this choker set brings together boho flair and contemporary style for a chic festival look.",
    careInstructions: [
      "Avoid direct sunlight.",
      "Clean gently with a dry cloth.",
      "Do not bend."
    ],
    frequentlyBought: [
      {
        title: "Fringes Floral Necklace Set",
        price: 1099,
        mrp: 1799,
        image: "images/fringe6.jpg"
      },
      {
        title: "Fringes Dramatic Fringe Pendant Set",
        price: 999,
        mrp: 1599,
        image: "images/fringe5.jpg"
      }
    ]
},
{
    id: 84,
    image: "images/fringe4.jpg",
    title: "Fringes Dangling Ring",
    originalPrice: 799,
    currentPrice: 559,
    discount: 30,
    type: "Ring",
    look: "Minimal",
    price: 559,
    category: "Ring",
    stock: 12,
    images: [
      "images/fringe4.jpg",
      "images/fringe41.jpg",
      "images/fringe42.jpg"
    ],
    weight: "3.8",
    size: "Adjustable",
    material: "Alloy",
    plating: "Silver Plated",
    color: "Silver",
    description: "Subtle yet playful, the Dangling Ring features swinging fringe elements for a touch of movement and shine.",
    careInstructions: [
      "Avoid impact.",
      "Keep away from water.",
      "Polish with a soft cloth."
    ],
    frequentlyBought: [
      {
        title: "Fringes Bloom In Fringe Statement Choker Set",
        price: 1199,
        mrp: 1999,
        image: "images/fringe1.jpg"
      }
    ]
},
{
    id: 85,
    image: "images/fringe5.jpg",
    title: "Fringes Dramatic Fringe Pendant Set",
    originalPrice: 1599,
    currentPrice: 999,
    discount: 37,
    type: "Pendant Set",
    look: "Dramatic",
    price: 999,
    category: "Necklace",
    stock: 7,
    images: [
      "images/fringe5.jpg",
      "images/fringe51.jpg",
      "images/fringe52.jpg"
    ],
    weight: "13.5",
    size: "20 inch",
    material: "Alloy, Glass",
    plating: "Gold Plated",
    color: "Red",
    description: "Dramatic fringe pendant set in vibrant red for making a statement at any party or festive occasion.",
    careInstructions: [
      "Store in a box.",
      "Avoid contact with makeup.",
      "Handle with care."
    ],
    frequentlyBought: [
      {
        title: "Fringes Stay Connected Statement Ring",
        price: 649,
        mrp: 999,
        image: "images/fringe2.jpg"
      }
    ]
},
{
    id: 86,
    image: "images/fringe6.jpg",
    title: "Fringes Floral Necklace Set",
    originalPrice: 1799,
    currentPrice: 1099,
    discount: 39,
    type: "Necklace Set",
    look: "Floral",
    price: 1099,
    category: "Necklace",
    stock: 9,
    images: [
      "images/fringe6.jpg",
      "images/fringe61.jpg",
      "images/fringe62.jpg"
    ],
    weight: "19.6",
    size: "18 inch",
    material: "Alloy, Enamel",
    plating: "Gold Plated",
    color: "Pink",
    description: "A delicate floral necklace set with fringe accents, perfect for adding a feminine touch to any outfit.",
    careInstructions: [
      "Keep away from sweat.",
      "Wipe after use.",
      "Store in a pouch."
    ],
    frequentlyBought: [
      {
        title: "Fringes Weaved Fringe Choker Set",
        price: 1099,
        mrp: 1899,
        image: "images/fringe3.jpg"
      }
    ]
}

];
window.products = products;
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('productSearchInput');
  const resultsDiv = document.getElementById('productSearchResults');

  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    resultsDiv.innerHTML = '';
    if (!query) {
      resultsDiv.style.display = 'none';
      return;
    }

    // Search in product title
    const matched = products.filter(p => p.title.toLowerCase().includes(query));
    if (matched.length === 0) {
      resultsDiv.innerHTML = '<div class="result-item">No products found.</div>';
      resultsDiv.style.display = 'block';
      return;
    }

    matched.forEach(product => {
      const item = document.createElement('div');
      item.className = 'result-item';
      item.innerHTML = `<img src="${product.image}" alt="${product.title}"><span>${product.title}</span>`;
      item.addEventListener('click', function() {
        window.location.href = `product.html?id=${product.id}`;
      });
      resultsDiv.appendChild(item);
    });
    resultsDiv.style.display = 'block';
  });

  // Hide results when user clicks outside
  document.addEventListener('click', function(e) {
    if (!resultsDiv.contains(e.target) && e.target !== searchInput) {
      resultsDiv.style.display = 'none';
    }
  });
});
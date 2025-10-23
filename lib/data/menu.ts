export type MenuItem = {
  name: string;
  price?: number;
  description?: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const sauces = [
  "Superlit Sauce ★★★★",
  "The Money Sauce",
  "Weak Azz Sauce",
  "Hotter Than Me Sauce",
  "Chef's Honey BBQ",
  "Superlit Smoke Sauce"
];

export const categories: MenuCategory[] = [
  {
    id: "wings",
    title: "The Fire Wings",
    items: [
      { name: "8 Wings", price: 12 },
      { name: "10 Wings", price: 14 },
      { name: "12 Wings", price: 18 },
      { name: "15 Wings", price: 24 },
      { name: "Add Fries", price: 3, note: "Cajun Fries +$6" }
    ]
  },
  {
    id: "superlits",
    title: "Superlit's",
    items: [
      { 
        name: "Smoked Onion Burger", 
        price: 18,
        description: "Smoked beef patty with lettuce, tomato, onions, and American cheese with our Superlit Fries"
      },
      { 
        name: "Superlit Burger", 
        price: 16,
        description: "Our signature burger with Superlit sauce"
      },
      { 
        name: "Cheese Quesadilla", 
        price: 10,
        description: "Grilled with house special cheesy sauce"
      },
      { 
        name: "Steak Quesadilla", 
        price: 14,
        description: "Grilled steak with house special cheesy sauce and Superlit fries"
      },
      { 
        name: "Chicken Quesadilla", 
        price: 12,
        description: "Grilled chicken combined with house special cheesy sauce with our Superlit fries"
      }
    ]
  },
  {
    id: "sandwiches",
    title: "Sandwiches & Plates",
    items: [
      { 
        name: "Pork Chop Sandwich", 
        price: 14,
        description: "Scrumptious grilled smoked smoked paprika sauce pork chops with our Superlit Fries"
      },
      { 
        name: "Rib Sandwich", 
        price: 16,
        description: "2 Smoked paprika sauce ribs with Hawaii bread with our Superlit fries"
      },
      { 
        name: "Rib Plate", 
        price: 18,
        description: "House smoked rib with our Superlit seasonin/smoked paprika sauce served with our Superlit fries"
      },
      { 
        name: "Superlit's Salad", 
        price: 14,
        description: "Shredded iceburg lettuce with strawberries, honey, walnut raspberry vinaigrette topped with sun-dried raisin"
      }
    ]
  },
  {
    id: "snacks",
    title: "Snacks",
    items: [
      { name: "Superlit Loaded Fries", price: 12 },
      { name: "Catfish Nuggets", price: 16 },
      { name: "Crispy Fries", price: 6 },
      { name: "Jumbo Mozzarella Sticks", price: 10 }
    ]
  }
];

export const menuNotes = [
  "All dishes served with Chef's signature sauces",
  "Vegetarian, vegan, and gluten-free options available upon request",
  "Prices and availability may vary by event and location"
];

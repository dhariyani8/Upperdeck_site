export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  subcategories?: { title: string; items: MenuItem[] }[];
}

export const menuData: MenuCategory[] = [
  {
    title: "we Love Coffee...",
    items: [
      { name: "Cappuccino", price: 130 },
      { name: "Cappuccino (Double Shot)", price: 180 },
      { name: "Café Latte", price: 130 },
      { name: "Café Latte (Double Shot)", price: 180 },
      { name: "Café Mocha", price: 160 },
      { name: "Café Macchiato", price: 130 },
      { name: "Espresso Romano", price: 110 },
      { name: "Espresso Lemonade", price: 150 },
      { name: "Espresso (Single Shot)", price: 100 },
      { name: "Espresso (Double Shot)", price: 160 },
      { name: "Espresso Affogato", price: 160 },
      { name: "Americano (Black Coffee)", price: 110 },
      { name: "Hot Chocolate", price: 120 },
      { name: "Hot Boost", price: 120 },
      { name: "Iced Americano", price: 120 },
      { name: "Cold Coffee", price: 160 },
      { name: "Cold Mocha", price: 180 },
      { name: "Vietnamese Ice Coffee", price: 200 },
      { name: "Extra add on", price: 40 },
    ]
  },
  {
    title: "TEA",
    items: [
      { name: "Regular Tea", price: 60 },
      { name: "Black Tea", price: 80 },
      { name: "Green Tea", price: 90 },
      { name: "Hot Lemon Ginger", price: 80 },
    ]
  },
  {
    title: "Mocktails Below the Sky",
    items: [],
    subcategories: [
      {
        title: "REGULAR MOCKTAIL",
        items: [
          { name: "Mint", price: 90 },
          { name: "Black Current", price: 90 },
          { name: "Strawberry", price: 90 },
          { name: "Blue Lagoon", price: 90 },
          { name: "Green Apple", price: 90 },
          { name: "Orange", price: 90 },
        ]
      },
      {
        title: "BAR SPECIAL",
        items: [
          { name: "Red Wine", price: 110 },
          { name: "Malt", price: 110 },
          { name: "Rum", price: 110 },
          { name: "White & Pink Jin", price: 110 },
        ]
      },
      {
        title: "UD SPECIAL",
        items: [
          { name: "Bubble Gum", price: 120 },
          { name: "Pina Colada", price: 120 },
          { name: "Blue Sea", price: 120 },
          { name: "Paan Mojito", price: 120 },
          { name: "Saffron", price: 120 },
          { name: "Spicy Mango", price: 120 },
          { name: "Chilli Guava", price: 120 },
        ]
      },
      {
        title: "MARGARITA",
        items: [
          { name: "Bubble Gum", price: 130 },
          { name: "Strawberry Crush", price: 130 },
          { name: "Blue Berry", price: 130 },
          { name: "Black Current", price: 130 },
          { name: "Kiwi Crush", price: 130 },
          { name: "Cranberry", price: 130 },
        ]
      },
      {
        title: "ENERGETIC",
        items: [
          { name: "Red Bull Mocktail", price: 240 },
          { name: "Red Bull with Espresso", price: 240 },
          { name: "Hell Mocktail", price: 180 },
          { name: "Hell with Espresso", price: 180 },
        ]
      }
    ]
  },
  {
    title: "the Hustle Frape & Smoothie",
    items: [],
    subcategories: [
      {
        title: "FRAPE",
        items: [
          { name: "Strawberry", price: 160 },
          { name: "Pan", price: 160 },
          { name: "Kiwi", price: 160 },
          { name: "Mango", price: 160 },
          { name: "Lichi", price: 160 },
        ]
      },
      {
        title: "SMOOTHIE",
        items: [
          { name: "Watermelon Smoothie", price: 180 },
          { name: "Very Berry Smoothie", price: 180 },
          { name: "Mango Smoothie", price: 180 },
          { name: "Lichi Smoothie", price: 180 },
          { name: "Strawberry Smoothie", price: 180 },
          { name: "Banana Smoothie", price: 180 },
          { name: "Pina Colada Smoothie", price: 180 },
          { name: "Kiwi Pan Smoothie", price: 180 },
        ]
      },
      {
        title: "FRESHEN UP",
        items: [
          { name: "Fanta Ice Cream Float", price: 120 },
          { name: "Coca Cola Ice Cream Float", price: 120 },
          { name: "Thums Up Ice Cream Float", price: 120 },
          { name: "Lemon Ice Tea", price: 120 },
        ]
      }
    ]
  },
  {
    title: "Shakes & Ice cream",
    items: [],
    subcategories: [
      {
        title: "SHAKE IT UP",
        items: [
          { name: "Biskoff Shake", price: 230 },
          { name: "Brownie Shake", price: 200 },
          { name: "Kit Kat Shake", price: 190 },
          { name: "Oreo Shake", price: 180 },
          { name: "Waffy Shake", price: 180 },
          { name: "Cold Boost Shake", price: 170 },
          { name: "Chocolate Shake", price: 170 },
          { name: "Vanilla Shake", price: 150 },
        ]
      },
      {
        title: "ICE CREAM SUNDAYS",
        items: [
          { name: "Vanilla", price: 100 },
          { name: "Chocolate", price: 110 },
          { name: "Sinful Brownie", price: 200 },
          { name: "Sizzling Brownie", price: 180 },
          { name: "Black Magic", price: 180 },
        ]
      },
      {
        title: "TORNADO'S",
        items: [
          { name: "Classic Potatoes Tornados", price: 100 },
          { name: "Peri Peri Potatoes Tornados", price: 120 },
          { name: "Schezwan Potatoes Tornados", price: 130 },
          { name: "Cheese Potatoes Tornados", price: 140 },
        ]
      }
    ]
  },
  {
    title: "For Pizza",
    items: [
      { name: "Margarita Pizza", price: 150, description: "Served with Red Sauce & Fresh Mozzarella Cheese" },
      { name: "Veg. Pizza", price: 190, description: "Served with Red Sauce, Vegies - Onion, Capsicum & Tomato & Mozzarella Cheese" },
      { name: "Cheese Golden Corn Pizza", price: 190, description: "Served with Red Sauce & Fresh Corn & Mozzarella Cheese" },
      { name: "Maxican Pizza", price: 200, description: "Served with Red Sauce Fresh Vegies - Onion, Capsicum, Jalapeno & Mozzarella Cheese" },
      { name: "Hot Mama Pizza", price: 200, description: "Served with Red Sauce & Schezwan Sauce, Green Chili, Capsicum & Mozzarella Cheese" },
      { name: "Maggie Pizza", price: 210, description: "Served with Red Sauce, Maggie & Fresh Mozzarella Cheese" },
      { name: "True Italian Pizza", price: 210, description: "Served with Red Sauce, Tomato, Capsicum, Corn, Black Olive & Mozzarella Cheese" },
      { name: "Tandoori Paneer Pizza", price: 220, description: "Served with Red Sauce & Tandoori Sauce, Paneer & Mozzarella Cheese" },
      { name: "Triple Cheese Pizza", price: 230, description: "Served with Red Sauce, Cheese Burst, Fresh Mozzarella Cheese & Cheese Cubes" },
      { name: "Peppy Paneer Pizza", price: 250, description: "Served with Red Sauce & Olive Oil, Red Jalapeno, Paneer, Cheese Filling & Mozzarella Cheese" },
      { name: "The UD Special Pizza", price: 260, description: "Served with Coriander & Mint Grindings, Capsicum, Onion, Tomato, Black Paper, Cheese Burst & Mozzarella Cheese" },
    ]
  },
  {
    title: "Sandwich & Grill",
    items: [],
    subcategories: [
      {
        title: "SANDWICH",
        items: [
          { name: "Veg. Sandwich", price: 80 },
          { name: "Veg. Cheese Sandwich", price: 100 },
          { name: "Bread Butter", price: 80 },
          { name: "Cheese Chatni", price: 80 },
          { name: "Cheese Jam", price: 90 },
          { name: "Cheese Chocolate", price: 100 },
          { name: "Cheese & Chips", price: 130 },
          { name: "Kit-kat Sandwich", price: 140 },
        ]
      },
      {
        title: "GRILL SANDWICH",
        items: [
          { name: "Cheese Grill", price: 150 },
          { name: "Veg. Cheese Grill", price: 200 },
          { name: "Choco Grill", price: 160 },
          { name: "Cheese Onion & Capsicum Grill", price: 200 },
          { name: "Aaloo Peti Grill", price: 220 },
          { name: "Tandoori Paneer Grill", price: 230 },
          { name: "Hulk Grill", price: 280 },
          { name: "Jungali Grill", price: 230 },
          { name: "U.D. Spe. Grill", price: 230 },
          { name: "Paneer & Corn Grill", price: 220 },
          { name: "Cheese & Chips Grill Sandwich", price: 210 },
        ]
      }
    ]
  },
  {
    title: "Pasta, Burger, Hot Dog & Frankie",
    items: [],
    subcategories: [
      {
        title: "PASTA",
        items: [
          { name: "Red Sauce with Cheese", price: 180 },
          { name: "Pink Sauce with Cheese", price: 180 },
          { name: "White Sauce with Cheese", price: 190 },
          { name: "Beked Cheese Loaded Pasta", price: 230 },
        ]
      },
      {
        title: "BURGERS",
        items: [
          { name: "Veg. Burger", price: 100 },
          { name: "Mexican Burger", price: 130 },
          { name: "The UD Special Maharaja Burger", price: 160 },
        ]
      },
      {
        title: "HOT DOGS",
        items: [
          { name: "Veg. Hot Dog", price: 110 },
          { name: "Veg. Cheese Hot Dog", price: 130 },
        ]
      },
      {
        title: "FRANKIE",
        items: [
          { name: "Veg. Frankie", price: 120 },
          { name: "Schezwan Frankie", price: 130 },
          { name: "Cheese Corn Frankie", price: 130 },
          { name: "Aaloo Tikki Frankie", price: 140 },
          { name: "Paneer Frankie", price: 140 },
        ]
      }
    ]
  },
  {
    title: "Maggie, Fries & Snacks",
    items: [],
    subcategories: [
      {
        title: "MAGGIE",
        items: [
          { name: "Masala Maggie", price: 70 },
          { name: "Hot & Spicy Maggie", price: 90 },
          { name: "Cheese Maggie", price: 90 },
          { name: "Veg. Maggie", price: 90 },
          { name: "Veg. Cheese Maggie", price: 110 },
          { name: "Schezwan Cheese Maggie", price: 110 },
          { name: "Tandoori Maggie", price: 120 },
          { name: "The UD Special Maggie", price: 140 },
        ]
      },
      {
        title: "FRIES & SNACKS",
        items: [
          { name: "French Fries Black & White", price: 100 },
          { name: "Peri Peri French Fries", price: 120 },
          { name: "Cheese Nachos", price: 110 },
          { name: "Chilli Garlic Nachos", price: 130 },
          { name: "Pizza Fries", price: 180 },
          { name: "Peri Peri Pizza Fries", price: 200 },
          { name: "The UD Special Loaded Fries", price: 170 },
          { name: "Chilli Garlic Bite", price: 100 },
          { name: "Veg. Finger", price: 130 },
          { name: "Cheese Ball", price: 140 },
        ]
      }
    ]
  },
  {
    title: "Garlic Bread & Toasts & Momos",
    items: [],
    subcategories: [
      {
        title: "GARLIC BREADS",
        items: [
          { name: "Cheese Garlic Bread", price: 110 },
          { name: "Cheese Corn Garlic Bread", price: 120 },
          { name: "Cheese Chili Bread", price: 120 },
          { name: "Cheese Masala Garlic Bread", price: 140 },
          { name: "Cheese Burst Garlic Bread", price: 140 },
        ]
      },
      {
        title: "GARLIC TOASTS",
        items: [
          { name: "Cheese Garlic Toast", price: 120 },
          { name: "Cheese Chili Toast", price: 130 },
          { name: "Cheese Corn Toast", price: 140 },
          { name: "Cheese Masala Toast", price: 140 },
          { name: "Cheese Paneer Toast", price: 150 },
          { name: "Cheese Cube Toast", price: 150 },
        ]
      },
      {
        title: "MOMOS",
        items: [
          { name: "Veg. Momos", price: 110 },
          { name: "Cheese Corn Momos", price: 120 },
          { name: "Schezwan Momos", price: 120 },
          { name: "Cheese Paneer Momos", price: 130 },
        ]
      }
    ]
  }
];

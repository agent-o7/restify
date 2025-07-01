import type { MenuItem } from '../types';

export const menuCategories = [
  'Appetizers',
  'Main Courses',
  'Beverages',
  'Desserts'
];

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: '1',
    name: 'Grilled Plantain',
    description: 'Traditional grilled plantain with spicy sauce',
    price: 2500,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '2',
    name: 'Akassa Salad',
    description: 'Fresh corn-based salad with vegetables',
    price: 3000,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '3',
    name: 'Beef Brochettes',
    description: 'Grilled beef skewers with local spices',
    price: 4500,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },

  // Main Courses
  {
    id: '4',
    name: 'Jollof Rice with Chicken',
    description: 'Spicy rice with tender grilled chicken and vegetables',
    price: 6500,
    category: 'Main Courses',
    image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '5',
    name: 'Fufu with Palm Nut Soup',
    description: 'Traditional cassava fufu with rich palm nut soup',
    price: 5500,
    category: 'Main Courses',
    image: 'https://images.pexels.com/photos/5966631/pexels-photo-5966631.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '6',
    name: 'Grilled Tilapia',
    description: 'Fresh tilapia grilled with local herbs and spices',
    price: 7000,
    category: 'Main Courses',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '7',
    name: 'Pork Stew with Yam',
    description: 'Slow-cooked pork stew served with boiled yam',
    price: 6000,
    category: 'Main Courses',
    image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },

  // Beverages
  {
    id: '8',
    name: 'Fresh Coconut Water',
    description: 'Natural coconut water served fresh',
    price: 1500,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '9',
    name: 'Bissap Juice',
    description: 'Traditional hibiscus flower drink',
    price: 2000,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '10',
    name: 'Local Beer',
    description: 'Cold local beer',
    price: 2500,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },

  // Desserts
  {
    id: '11',
    name: 'Coconut Cake',
    description: 'Traditional coconut cake with local honey',
    price: 2000,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  },
  {
    id: '12',
    name: 'Fruit Salad',
    description: 'Fresh seasonal fruits with mint',
    price: 2500,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
    available: true
  }
];
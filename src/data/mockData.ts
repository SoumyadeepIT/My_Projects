import { Artist, Product, Order, Review } from '../types';

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    phone: '+91 98765 43210',
    bio: 'Creating traditional handwoven textiles using age-old techniques from Rajasthan',
    location: 'Jaipur, Rajasthan',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    coverImage: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    reviewCount: 124,
    joinedDate: '2022-03-15',
  },
  {
    id: '2',
    name: 'Rajesh Patel',
    email: 'rajesh@example.com',
    phone: '+91 87654 32109',
    bio: 'Master potter specializing in traditional Gujarat pottery designs',
    location: 'Bhuj, Gujarat',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    coverImage: 'https://images.pexels.com/photos/6192365/pexels-photo-6192365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    reviewCount: 87,
    joinedDate: '2021-11-03',
  },
  {
    id: '3',
    name: 'Meera Krishnan',
    email: 'meera@example.com',
    phone: '+91 76543 21098',
    bio: 'Creating contemporary jewelry inspired by traditional South Indian designs',
    location: 'Chennai, Tamil Nadu',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
    coverImage: 'https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    reviewCount: 156,
    joinedDate: '2023-01-22',
  },
];

export const mockProducts: Product[] = [
  {
    id: '101',
    artistId: '1',
    title: 'Hand Block Printed Cotton Saree',
    description: 'Traditional Rajasthani hand block printed cotton saree with natural dyes. Each piece is unique with intricate patterns.',
    price: 3499,
    images: [
      'https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Textiles',
    tags: ['saree', 'handloom', 'block print', 'cotton'],
    inStock: true,
    stockQuantity: 15,
    createdAt: '2023-09-10',
    rating: 4.7,
    reviewCount: 42,
  },
  {
    id: '102',
    artistId: '1',
    title: 'Handwoven Pashmina Shawl',
    description: 'Luxurious handwoven pashmina shawl with traditional Kashmiri embroidery.',
    price: 8999,
    images: [
      'https://images.pexels.com/photos/4051320/pexels-photo-4051320.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Textiles',
    tags: ['shawl', 'pashmina', 'handwoven', 'winter'],
    inStock: true,
    stockQuantity: 8,
    createdAt: '2023-10-05',
    rating: 4.9,
    reviewCount: 18,
  },
  {
    id: '201',
    artistId: '2',
    title: 'Traditional Clay Water Pot',
    description: 'Handcrafted clay water pot with traditional Gujarati designs. Keeps water naturally cool.',
    price: 1299,
    images: [
      'https://images.pexels.com/photos/6431618/pexels-photo-6431618.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6311241/pexels-photo-6311241.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Pottery',
    tags: ['clay', 'pot', 'traditional', 'home decor'],
    inStock: true,
    stockQuantity: 5,
    createdAt: '2023-11-15',
    rating: 4.8,
    reviewCount: 23,
  },
  {
    id: '301',
    artistId: '3',
    title: 'Temple Design Silver Necklace',
    description: 'Handcrafted pure silver necklace inspired by South Indian temple architecture.',
    price: 12499,
    images: [
      'https://images.pexels.com/photos/10969529/pexels-photo-10969529.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/9428290/pexels-photo-9428290.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Jewelry',
    tags: ['necklace', 'silver', 'temple jewelry', 'traditional'],
    inStock: true,
    stockQuantity: 12,
    createdAt: '2023-12-01',
    rating: 4.6,
    reviewCount: 31,
  },
  {
    id: '302',
    artistId: '3',
    title: 'Kemp Stone Jhumkas',
    description: 'Traditional South Indian jhumkas with kemp stones and gold plating.',
    price: 2499,
    images: [
      'https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/10130152/pexels-photo-10130152.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Jewelry',
    tags: ['earrings', 'jhumkas', 'traditional', 'kemp'],
    inStock: true,
    stockQuantity: 20,
    createdAt: '2024-01-10',
    rating: 4.5,
    reviewCount: 15,
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ord-001',
    customerId: 'cus-001',
    artistId: '1',
    products: [
      {
        productId: '101',
        title: 'Hand Block Printed Cotton Saree',
        price: 3499,
        quantity: 2,
        totalPrice: 6998,
      },
    ],
    status: 'delivered',
    totalAmount: 6998,
    paymentMethod: 'upi',
    paymentStatus: 'completed',
    shippingAddress: {
      name: 'Anita Desai',
      street: '42, Shanti Nagar',
      city: 'Mumbai',
      state: 'Maharashtra',
      postalCode: '400076',
      country: 'India',
      phone: '+91 98765 43210',
    },
    createdAt: '2024-02-15T10:30:00Z',
    updatedAt: '2024-02-18T14:45:00Z',
  },
  {
    id: 'ord-002',
    customerId: 'cus-002',
    artistId: '1',
    products: [
      {
        productId: '102',
        title: 'Handwoven Pashmina Shawl',
        price: 8999,
        quantity: 1,
        totalPrice: 8999,
      },
    ],
    status: 'shipped',
    totalAmount: 8999,
    paymentMethod: 'upi',
    paymentStatus: 'completed',
    shippingAddress: {
      name: 'Rahul Verma',
      street: '15, Green Park',
      city: 'New Delhi',
      state: 'Delhi',
      postalCode: '110016',
      country: 'India',
      phone: '+91 87654 32109',
    },
    createdAt: '2024-03-10T09:15:00Z',
    updatedAt: '2024-03-12T11:20:00Z',
  },
  {
    id: 'ord-003',
    customerId: 'cus-003',
    artistId: '3',
    products: [
      {
        productId: '301',
        title: 'Temple Design Silver Necklace',
        price: 12499,
        quantity: 1,
        totalPrice: 12499,
      },
      {
        productId: '302',
        title: 'Kemp Stone Jhumkas',
        price: 2499,
        quantity: 1,
        totalPrice: 2499,
      },
    ],
    status: 'processing',
    totalAmount: 14998,
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    shippingAddress: {
      name: 'Kavita Iyer',
      street: '7, Temple Street',
      city: 'Bangalore',
      state: 'Karnataka',
      postalCode: '560001',
      country: 'India',
      phone: '+91 76543 21098',
    },
    createdAt: '2024-03-20T15:45:00Z',
    updatedAt: '2024-03-21T10:10:00Z',
  },
];

export const mockReviews: Review[] = [
  {
    id: 'rev-001',
    productId: '101',
    customerId: 'cus-001',
    rating: 5,
    comment: 'Beautiful saree! The block print work is exquisite and the cotton quality is excellent.',
    createdAt: '2024-02-25T08:30:00Z',
  },
  {
    id: 'rev-002',
    productId: '101',
    customerId: 'cus-004',
    rating: 4,
    comment: 'Lovely traditional design. The natural dyes give it a unique look. Shipping was quick too.',
    createdAt: '2024-03-05T14:15:00Z',
  },
  {
    id: 'rev-003',
    productId: '301',
    customerId: 'cus-005',
    rating: 5,
    comment: 'Stunning temple jewelry! The craftsmanship is remarkable. Worth every rupee.',
    createdAt: '2024-03-18T17:40:00Z',
  },
];

export const getProductsByArtist = (artistId: string): Product[] => {
  return mockProducts.filter(product => product.artistId === artistId);
};

export const getOrdersByArtist = (artistId: string): Order[] => {
  return mockOrders.filter(order => order.artistId === artistId);
};

export const getReviewsByProduct = (productId: string): Review[] => {
  return mockReviews.filter(review => review.productId === productId);
};
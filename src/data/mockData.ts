import { Artist, Product, Order, Review } from '../types';

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Jane Crafts',
    email: 'jane@example.com',
    phone: '+1234567890',
    bio: 'Creating handmade pottery for over 10 years',
    location: 'Portland, OR',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    coverImage: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    reviewCount: 124,
    joinedDate: '2022-03-15',
  },
  {
    id: '2',
    name: 'Miguel Textiles',
    email: 'miguel@example.com',
    phone: '+1987654321',
    bio: 'Specializing in handwoven textiles using traditional methods',
    location: 'Santa Fe, NM',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    coverImage: 'https://images.pexels.com/photos/6192365/pexels-photo-6192365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    reviewCount: 87,
    joinedDate: '2021-11-03',
  },
  {
    id: '3',
    name: 'Amara Jewelry',
    email: 'amara@example.com',
    phone: '+1567891234',
    bio: 'Handcrafted jewelry inspired by nature and geometric forms',
    location: 'Austin, TX',
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
    title: 'Handcrafted Ceramic Mug',
    description: 'Beautifully crafted ceramic mug, perfect for your morning coffee or tea. Each piece is unique with slight variations in glaze.',
    price: 28,
    images: [
      'https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Pottery',
    tags: ['mug', 'ceramic', 'handmade', 'kitchen'],
    inStock: true,
    stockQuantity: 15,
    createdAt: '2023-09-10',
    rating: 4.7,
    reviewCount: 42,
  },
  {
    id: '102',
    artistId: '1',
    title: 'Ceramic Serving Bowl Set',
    description: 'Set of 3 nesting ceramic bowls with matte finish. Perfect for serving or as a decorative piece.',
    price: 89,
    images: [
      'https://images.pexels.com/photos/4051320/pexels-photo-4051320.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Pottery',
    tags: ['bowl', 'ceramic', 'handmade', 'kitchen', 'set'],
    inStock: true,
    stockQuantity: 8,
    createdAt: '2023-10-05',
    rating: 4.9,
    reviewCount: 18,
  },
  {
    id: '201',
    artistId: '2',
    title: 'Hand-Woven Cotton Throw',
    description: 'Beautifully woven cotton throw blanket with intricate patterns. Perfect for adding warmth and style to any room.',
    price: 120,
    images: [
      'https://images.pexels.com/photos/6431618/pexels-photo-6431618.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6311241/pexels-photo-6311241.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Textiles',
    tags: ['blanket', 'cotton', 'woven', 'home decor'],
    inStock: true,
    stockQuantity: 5,
    createdAt: '2023-11-15',
    rating: 4.8,
    reviewCount: 23,
  },
  {
    id: '301',
    artistId: '3',
    title: 'Silver Leaf Pendant Necklace',
    description: 'Handcrafted silver pendant in the shape of a delicate leaf. Comes with an 18-inch sterling silver chain.',
    price: 75,
    images: [
      'https://images.pexels.com/photos/10969529/pexels-photo-10969529.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/9428290/pexels-photo-9428290.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Jewelry',
    tags: ['necklace', 'silver', 'pendant', 'handmade', 'jewelry'],
    inStock: true,
    stockQuantity: 12,
    createdAt: '2023-12-01',
    rating: 4.6,
    reviewCount: 31,
  },
  {
    id: '302',
    artistId: '3',
    title: 'Geometric Brass Earrings',
    description: 'Modern geometric brass earrings with minimalist design. Light and comfortable for everyday wear.',
    price: 45,
    images: [
      'https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/10130152/pexels-photo-10130152.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Jewelry',
    tags: ['earrings', 'brass', 'geometric', 'handmade', 'jewelry'],
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
        title: 'Handcrafted Ceramic Mug',
        price: 28,
        quantity: 2,
        totalPrice: 56,
      },
    ],
    status: 'delivered',
    totalAmount: 56,
    paymentMethod: 'card',
    paymentStatus: 'completed',
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'Seattle',
      state: 'WA',
      postalCode: '98101',
      country: 'USA',
      phone: '+12065551234',
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
        title: 'Ceramic Serving Bowl Set',
        price: 89,
        quantity: 1,
        totalPrice: 89,
      },
    ],
    status: 'shipped',
    totalAmount: 89,
    paymentMethod: 'upi',
    paymentStatus: 'completed',
    shippingAddress: {
      name: 'Emma Wilson',
      street: '456 Oak Ave',
      city: 'Portland',
      state: 'OR',
      postalCode: '97201',
      country: 'USA',
      phone: '+15035559876',
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
        title: 'Silver Leaf Pendant Necklace',
        price: 75,
        quantity: 1,
        totalPrice: 75,
      },
      {
        productId: '302',
        title: 'Geometric Brass Earrings',
        price: 45,
        quantity: 1,
        totalPrice: 45,
      },
    ],
    status: 'processing',
    totalAmount: 120,
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    shippingAddress: {
      name: 'Ravi Patel',
      street: '789 Maple Dr',
      city: 'Austin',
      state: 'TX',
      postalCode: '78701',
      country: 'USA',
      phone: '+15125557654',
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
    comment: 'Beautiful mug! The glaze is even more stunning in person. I use it every morning.',
    createdAt: '2024-02-25T08:30:00Z',
  },
  {
    id: 'rev-002',
    productId: '101',
    customerId: 'cus-004',
    rating: 4,
    comment: 'Love the design and quality. Shipping was quick too. Would have given 5 stars but it\'s slightly smaller than I expected.',
    createdAt: '2024-03-05T14:15:00Z',
  },
  {
    id: 'rev-003',
    productId: '301',
    customerId: 'cus-005',
    rating: 5,
    comment: 'Absolutely gorgeous pendant! I receive compliments every time I wear it. The craftsmanship is excellent.',
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
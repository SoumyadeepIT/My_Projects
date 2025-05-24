import { Artist, Product, Order, Review } from '../types';

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    phone: '+91 9876543210',
    bio: 'Creating traditional pottery with modern aesthetics for over 10 years',
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
    phone: '+91 8765432109',
    bio: 'Specializing in handwoven textiles using traditional Gujarat techniques',
    location: 'Ahmedabad, Gujarat',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    coverImage: 'https://images.pexels.com/photos/6192365/pexels-photo-6192365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    reviewCount: 87,
    joinedDate: '2021-11-03',
  },
  {
    id: '3',
    name: 'Anjali Mehta',
    email: 'anjali@example.com',
    phone: '+91 7654321098',
    bio: 'Handcrafted jewelry inspired by ancient Indian designs and modern minimalism',
    location: 'Mumbai, Maharashtra',
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
    title: 'Handcrafted Clay Kulhad Set',
    description: 'Traditional clay tea cups with modern artistic touches. Perfect for serving chai or as decorative pieces. Each piece is unique with natural variations.',
    price: 1499,
    images: [
      'https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Pottery',
    tags: ['kulhad', 'ceramic', 'handmade', 'kitchen'],
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
    description: 'Set of 3 nesting ceramic bowls with traditional Rajasthani patterns. Perfect for serving or as decorative pieces.',
    price: 3999,
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
    title: 'Handwoven Patola Dupatta',
    description: 'Intricately woven cotton dupatta with traditional Gujarati Patola patterns. Each piece takes weeks to complete.',
    price: 5999,
    images: [
      'https://images.pexels.com/photos/6431618/pexels-photo-6431618.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6311241/pexels-photo-6311241.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Textiles',
    tags: ['dupatta', 'patola', 'handwoven', 'traditional'],
    inStock: true,
    stockQuantity: 5,
    createdAt: '2023-11-15',
    rating: 4.8,
    reviewCount: 23,
  },
  {
    id: '301',
    artistId: '3',
    title: 'Silver Peacock Pendant',
    description: 'Handcrafted 92.5 sterling silver pendant inspired by traditional peacock motifs. Comes with an 18-inch silver chain.',
    price: 4499,
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
    title: 'Tribal Silver Earrings',
    description: 'Modern interpretation of tribal silver earrings. Light and comfortable for everyday wear.',
    price: 2499,
    images: [
      'https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/10130152/pexels-photo-10130152.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    category: 'Jewelry',
    tags: ['earrings', 'silver', 'tribal', 'handmade', 'jewelry'],
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
        title: 'Handcrafted Clay Kulhad Set',
        price: 1499,
        quantity: 2,
        totalPrice: 2998,
      },
    ],
    status: 'delivered',
    totalAmount: 2998,
    paymentMethod: 'upi',
    paymentStatus: 'completed',
    shippingAddress: {
      name: 'Amit Kumar',
      street: '123 MG Road',
      city: 'Bangalore',
      state: 'Karnataka',
      postalCode: '560001',
      country: 'India',
      phone: '+91 9876543210',
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
        price: 3999,
        quantity: 1,
        totalPrice: 3999,
      },
    ],
    status: 'shipped',
    totalAmount: 3999,
    paymentMethod: 'upi',
    paymentStatus: 'completed',
    shippingAddress: {
      name: 'Sneha Reddy',
      street: '456 Anna Salai',
      city: 'Chennai',
      state: 'Tamil Nadu',
      postalCode: '600002',
      country: 'India',
      phone: '+91 8765432109',
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
        title: 'Silver Peacock Pendant',
        price: 4499,
        quantity: 1,
        totalPrice: 4499,
      },
      {
        productId: '302',
        title: 'Tribal Silver Earrings',
        price: 2499,
        quantity: 1,
        totalPrice: 2499,
      },
    ],
    status: 'processing',
    totalAmount: 6998,
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    shippingAddress: {
      name: 'Ravi Verma',
      street: '789 Civil Lines',
      city: 'Delhi',
      state: 'Delhi',
      postalCode: '110001',
      country: 'India',
      phone: '+91 7654321098',
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
    comment: 'Beautiful kulhads! The craftsmanship is excellent. Perfect for my evening chai.',
    createdAt: '2024-02-25T08:30:00Z',
  },
  {
    id: 'rev-002',
    productId: '101',
    customerId: 'cus-004',
    rating: 4,
    comment: 'Love the traditional design with modern touches. Shipping was quick too.',
    createdAt: '2024-03-05T14:15:00Z',
  },
  {
    id: 'rev-003',
    productId: '301',
    customerId: 'cus-005',
    rating: 5,
    comment: 'The peacock pendant is absolutely stunning! The detail work is incredible.',
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
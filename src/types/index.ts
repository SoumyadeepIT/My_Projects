export interface Artist {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  avatar: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  joinedDate: string;
}

export interface Product {
  id: string;
  artistId: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  inStock: boolean;
  stockQuantity: number;
  createdAt: string;
  rating: number;
  reviewCount: number;
}

export interface Order {
  id: string;
  customerId: string;
  artistId: string;
  products: OrderItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  paymentMethod: 'upi' | 'card' | 'cod';
  paymentStatus: 'pending' | 'completed' | 'failed';
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface Review {
  id: string;
  productId: string;
  customerId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}
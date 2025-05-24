import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { mockProducts, mockArtists } from '../data/mockData';
import ProductCard from '../components/product/ProductCard';
import ArtistCard from '../components/artist/ArtistCard';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  const featuredProducts = mockProducts.slice(0, 4);
  const featuredArtists = mockArtists.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80 z-10"></div>
        <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}></div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
                Discover Unique Handcrafted Treasures
              </h1>
              <p className="mt-4 text-xl text-white/90">
                Connect with talented artisans and find one-of-a-kind pieces that tell a story.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/explore">
                  <Button size="lg">
                    Explore Crafts
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                    Join as Artist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search for handcrafted items..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Button>Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900">Popular Categories</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of handcrafted treasures across various categories
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Pottery */}
            <div className="group relative rounded-lg overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Pottery" 
                  className="h-36 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-primary-900/70 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-medium text-lg">Pottery</span>
                </div>
              </div>
            </div>
            
            {/* Jewelry */}
            <div className="group relative rounded-lg overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/965981/pexels-photo-965981.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Jewelry" 
                  className="h-36 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-primary-900/70 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-medium text-lg">Jewelry</span>
                </div>
              </div>
            </div>
            
            {/* Textiles */}
            <div className="group relative rounded-lg overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/6431618/pexels-photo-6431618.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Textiles" 
                  className="h-36 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-primary-900/70 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-medium text-lg">Textiles</span>
                </div>
              </div>
            </div>
            
            {/* Woodwork */}
            <div className="group relative rounded-lg overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/6498998/pexels-photo-6498998.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Woodwork" 
                  className="h-36 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-primary-900/70 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-medium text-lg">Woodwork</span>
                </div>
              </div>
            </div>
            
            {/* Paper Crafts */}
            <div className="group relative rounded-lg overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/6044257/pexels-photo-6044257.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Paper Crafts" 
                  className="h-36 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-primary-900/70 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-medium text-lg">Paper Crafts</span>
                </div>
              </div>
            </div>
            
            {/* Glass Art */}
            <div className="group relative rounded-lg overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/1573236/pexels-photo-1573236.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Glass Art" 
                  className="h-36 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-primary-900/70 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-medium text-lg">Glass Art</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/categories">
              <Button variant="outline" icon={<ArrowRight size={16} />} iconPosition="right">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-display font-bold text-gray-900">Featured Products</h2>
            <Link to="/explore" className="text-primary-600 hover:text-primary-700 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Artists */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900">Meet Our Artists</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover talented artisans who pour their heart and soul into creating beautiful handcrafted pieces
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArtists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/artists">
              <Button variant="outline" icon={<ArrowRight size={16} />} iconPosition="right">
                Meet More Artists
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900">Why Choose CraftMarket</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're dedicated to supporting artisans and bringing unique handcrafted products to appreciative customers
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Unique Handcrafted Items</h3>
              <p className="mt-2 text-gray-600">
                Each product is handmade with care and passion, ensuring you receive a one-of-a-kind piece.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Support Small Artists</h3>
              <p className="mt-2 text-gray-600">
                Every purchase directly supports independent artists and traditional craft communities.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Secure Payments</h3>
              <p className="mt-2 text-gray-600">
                Multiple payment options including UPI, cards, and cash on delivery with secure transaction processing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-white">Ready to Share Your Craft with the World?</h2>
            <p className="mt-4 text-xl text-white/90">
              Join our community of artisans and reach customers who value handmade quality.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Register as an Artist
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="outline" size="lg" className="text-white border-white/50 hover:bg-primary-700">
                  Explore Handcrafts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
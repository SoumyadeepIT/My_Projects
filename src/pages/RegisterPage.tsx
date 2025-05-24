import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    password: '',
    confirmPassword: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
      isValid = false;
    }

    if (!formData.bio.trim()) {
      newErrors.bio = 'Brief bio is required';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const { confirmPassword, ...userData } = formData;
        await register(userData, formData.password);
        navigate('/dashboard');
      } catch (error) {
        console.error('Registration error:', error);
        // Handle registration error
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900">Join as an Artist</h2>
          <p className="mt-2 text-sm text-gray-600">
            Create your artist profile and start showcasing your handcrafted products
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              id="name"
              name="name"
              type="text"
              label="Full Name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              leftIcon={<User size={18} className="text-gray-400" />}
              fullWidth
            />
            
            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              leftIcon={<Mail size={18} className="text-gray-400" />}
              fullWidth
            />
            
            <Input
              id="phone"
              name="phone"
              type="tel"
              label="Phone Number"
              placeholder="+1234567890"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              leftIcon={<Phone size={18} className="text-gray-400" />}
              fullWidth
            />
            
            <Input
              id="location"
              name="location"
              type="text"
              label="Location"
              placeholder="City, State"
              value={formData.location}
              onChange={handleChange}
              error={errors.location}
              leftIcon={<MapPin size={18} className="text-gray-400" />}
              fullWidth
            />
            
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Brief Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                className={`
                  block w-full rounded-md shadow-sm border-gray-300 focus:border-primary-500 focus:ring-primary-500
                  ${errors.bio ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : 'border-gray-300'}
                  px-4 py-2 text-gray-900
                `}
                placeholder="Tell us about your craft and experience"
                value={formData.bio}
                onChange={handleChange}
              ></textarea>
              {errors.bio && <p className="mt-1 text-sm text-error-500">{errors.bio}</p>}
            </div>
            
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="••••••"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              leftIcon={<Lock size={18} className="text-gray-400" />}
              fullWidth
            />
            
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              placeholder="••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              leftIcon={<Lock size={18} className="text-gray-400" />}
              fullWidth
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the <Link to="/terms" className="text-primary-600 hover:text-primary-500">Terms of Service</Link> and <Link to="/privacy" className="text-primary-600 hover:text-primary-500">Privacy Policy</Link>
            </label>
          </div>

          <div>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              loading={loading}
            >
              Create Account
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
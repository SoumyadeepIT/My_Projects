import React, { useState } from 'react';
import { CreditCard, DollarSign, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onCancel: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onCancel }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });
  const [upiId, setUpiId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [processing, setProcessing] = useState(false);

  const validateCardPayment = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (!cardDetails.number.trim()) {
      newErrors.cardNumber = 'Card number is required';
      isValid = false;
    } else if (!/^\d{16}$/.test(cardDetails.number.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Invalid card number';
      isValid = false;
    }

    if (!cardDetails.name.trim()) {
      newErrors.cardName = 'Name on card is required';
      isValid = false;
    }

    if (!cardDetails.expiry.trim()) {
      newErrors.cardExpiry = 'Expiry date is required';
      isValid = false;
    } else if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) {
      newErrors.cardExpiry = 'Invalid format (MM/YY)';
      isValid = false;
    }

    if (!cardDetails.cvv.trim()) {
      newErrors.cardCvv = 'CVV is required';
      isValid = false;
    } else if (!/^\d{3,4}$/.test(cardDetails.cvv)) {
      newErrors.cardCvv = 'Invalid CVV';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateUpiPayment = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (!upiId.trim()) {
      newErrors.upiId = 'UPI ID is required';
      isValid = false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/.test(upiId)) {
      newErrors.upiId = 'Invalid UPI ID format';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format card number with spaces every 4 digits
    const value = e.target.value.replace(/\s/g, '');
    const formattedValue = value
      .replace(/[^\d]/g, '')
      .substring(0, 16)
      .match(/.{1,4}/g)
      ?.join(' ') || '';
    
    setCardDetails({ ...cardDetails, number: formattedValue });
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 2) {
      setCardDetails({ ...cardDetails, expiry: value });
    } else {
      const month = value.substring(0, 2);
      const year = value.substring(2, 4);
      setCardDetails({ ...cardDetails, expiry: `${month}/${year}` });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let isValid = false;
    
    if (paymentMethod === 'card') {
      isValid = validateCardPayment();
    } else if (paymentMethod === 'upi') {
      isValid = validateUpiPayment();
    } else if (paymentMethod === 'cod') {
      isValid = true;
    }
    
    if (isValid) {
      setProcessing(true);
      
      // Simulate payment processing
      setTimeout(() => {
        setProcessing(false);
        onSuccess();
      }, 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Payment Details</h2>
      
      <div className="mb-6">
        <p className="text-gray-700 mb-2">Total Amount:</p>
        <p className="text-2xl font-bold text-primary-600">${amount.toFixed(2)}</p>
      </div>
      
      <div className="mb-6">
        <div className="text-gray-700 mb-2">Select Payment Method:</div>
        <div className="grid grid-cols-3 gap-4">
          <button
            type="button"
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-colors ${
              paymentMethod === 'card'
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setPaymentMethod('card')}
          >
            <CreditCard className={paymentMethod === 'card' ? 'text-primary-500' : 'text-gray-500'} />
            <span className={`mt-2 text-sm font-medium ${paymentMethod === 'card' ? 'text-primary-600' : 'text-gray-700'}`}>
              Card
            </span>
          </button>
          
          <button
            type="button"
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-colors ${
              paymentMethod === 'upi'
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setPaymentMethod('upi')}
          >
            <DollarSign className={paymentMethod === 'upi' ? 'text-primary-500' : 'text-gray-500'} />
            <span className={`mt-2 text-sm font-medium ${paymentMethod === 'upi' ? 'text-primary-600' : 'text-gray-700'}`}>
              UPI
            </span>
          </button>
          
          <button
            type="button"
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-colors ${
              paymentMethod === 'cod'
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setPaymentMethod('cod')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${paymentMethod === 'cod' ? 'text-primary-500' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className={`mt-2 text-sm font-medium ${paymentMethod === 'cod' ? 'text-primary-600' : 'text-gray-700'}`}>
              Cash on Delivery
            </span>
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {paymentMethod === 'card' && (
          <div className="space-y-4">
            <Input
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              value={cardDetails.number}
              onChange={handleCardNumberChange}
              error={errors.cardNumber}
              fullWidth
            />
            
            <Input
              label="Name on Card"
              placeholder="John Doe"
              value={cardDetails.name}
              onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
              error={errors.cardName}
              fullWidth
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Expiry Date"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={handleExpiryChange}
                error={errors.cardExpiry}
                fullWidth
              />
              
              <Input
                label="CVV"
                placeholder="123"
                type="password"
                maxLength={4}
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value.replace(/\D/g, '') })}
                error={errors.cardCvv}
                fullWidth
              />
            </div>
          </div>
        )}
        
        {paymentMethod === 'upi' && (
          <div className="space-y-4">
            <Input
              label="UPI ID"
              placeholder="name@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              error={errors.upiId}
              fullWidth
            />
            
            <div className="bg-blue-50 p-4 rounded-md flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
              <p className="text-sm text-blue-700">
                You will receive a payment request on your UPI app after you place the order.
              </p>
            </div>
          </div>
        )}
        
        {paymentMethod === 'cod' && (
          <div className="bg-yellow-50 p-4 rounded-md mb-4 flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="text-sm text-yellow-700 font-medium">Cash on Delivery</p>
              <p className="text-sm text-yellow-600">
                Pay with cash when your order is delivered. Additional COD fee may apply.
              </p>
            </div>
          </div>
        )}
        
        <div className="mt-6 flex space-x-4">
          <Button variant="outline" onClick={onCancel} fullWidth>
            Cancel
          </Button>
          <Button type="submit" loading={processing} fullWidth>
            {processing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
import React, { useState } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { CartItem } from '../types';

interface TableSelectionViewProps {
  cart: CartItem[];
  onBack: () => void;
  onConfirmTable: (tableNumber: number) => void;
}

export default function TableSelectionView({ cart, onBack, onConfirmTable }: TableSelectionViewProps) {
  const [tableNumber, setTableNumber] = useState<string>('');
  const [error, setError] = useState<string>('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(price);
  };

  const generateWhatsAppMessage = (tableNum: number) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    let message = `🍽️ *New Order - AfricaEats*\n\n`;
    message += `📍 *Table Number:* ${tableNum}\n\n`;
    message += `📋 *Order Details:*\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `💰 *Total Amount: ${formatPrice(total)}*\n\n`;
    message += `⏰ Order placed at: ${new Date().toLocaleString('fr-FR')}\n\n`;
    message += `Thank you for choosing AfricaEats! 🙏`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const num = parseInt(tableNumber);
    if (!tableNumber || isNaN(num) || num < 1 || num > 50) {
      setError('Please enter a valid table number (1-50)');
      return;
    }

    setError('');
    
    // Generate WhatsApp message
    const whatsappMessage = generateWhatsAppMessage(num);
    
    // Restaurant's WhatsApp number (replace with actual number)
    const restaurantWhatsApp = '22890000000'; // Replace with restaurant's actual WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${restaurantWhatsApp}?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Call the original confirmation handler
    onConfirmTable(num);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900 ml-2">Select Your Table</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center mb-6">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Which table are you at?
            </h2>
            <p className="text-gray-600">
              Enter your table number and we'll send your order to the restaurant via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="tableNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Table Number
              </label>
              <input
                type="number"
                id="tableNumber"
                value={tableNumber}
                onChange={(e) => {
                  setTableNumber(e.target.value);
                  setError('');
                }}
                placeholder="Enter table number (1-50)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-center text-2xl font-semibold"
                min="1"
                max="50"
              />
              {error && (
                <p className="text-red-600 text-sm mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>📱</span>
              <span>Send Order via WhatsApp</span>
            </button>
          </form>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>How it works:</strong> After clicking the button, WhatsApp will open with your order details pre-filled. Just send the message to place your order!
            </p>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Can't find your table number?</strong> It's usually displayed on a small card on your table or ask any staff member for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Trash2, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCartUpdate?: () => void;
}

interface CartItem {
  id: string;
  user_id: string;
  course_id: string;
  created_at: string;
  course: {
    id: string;
    title: string;
    description: string;
    image_url: string;
    price: number;
    original_price: number;
  };
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, onCartUpdate }) => {
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && isAuthenticated && user) {
      fetchCartItems();
    }
  }, [isOpen, isAuthenticated, user]);

  const fetchCartItems = async () => {
    if (!user?.id) return;

    try {
      // Use direct query instead of RPC to avoid TypeScript issues
      const { data: cartData, error: cartError } = await supabase
        .from('cart_items')
        .select(`
          id,
          user_id,
          course_id,
          created_at,
          course:courses (
            id,
            title,
            description,
            image_url,
            price,
            original_price
          )
        `)
        .eq('user_id', user.id);

      if (cartError) {
        console.error('Error fetching cart items:', cartError);
        setCartItems([]);
      } else {
        setCartItems(cartData || []);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (cartItemId: string) => {
    if (!user?.id) return;

    try {
      // Use direct delete instead of RPC to avoid TypeScript issues
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', cartItemId)
        .eq('user_id', user.id);

      if (error) {
        console.error('Error removing from cart:', error);
        toast({
          title: "Error",
          description: "Failed to remove item from cart.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Removed",
          description: "Course removed from cart.",
        });
        fetchCartItems();
        onCartUpdate?.();
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast({
        title: "Error",
        description: "Failed to remove item from cart.",
        variant: "destructive",
      });
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.course.price, 0);
  };

  const handleCheckout = () => {
    toast({
      title: "Coming Soon",
      description: "Checkout functionality will be implemented next!",
    });
  };

  if (loading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-2xl bg-white border-0 shadow-2xl">
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-kiki-purple-600" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-white border-0 shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center space-y-4 pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-kiki-purple-500 to-kiki-blue-500 rounded-full flex items-center justify-center">
            <ShoppingCart className="text-white w-8 h-8" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            My Cart ({cartItems.length})
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <ShoppingCart className="mx-auto w-12 h-12 text-gray-300 mb-4" />
              <p>Your cart is empty</p>
              <p className="text-sm">Add some courses to get started!</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.course.image_url}
                        alt={item.course.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.course.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {item.course.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-kiki-purple-600">
                              ₹{item.course.price}
                            </span>
                            {item.course.original_price && (
                              <span className="text-sm text-gray-500 line-through">
                                ₹{item.course.original_price}
                              </span>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="border-t pt-4 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-kiki-purple-600">
                    ₹{getTotalPrice()}
                  </span>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-kiki-purple-600 hover:bg-kiki-purple-700"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;

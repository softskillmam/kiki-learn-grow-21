
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
  course_id: string;
  course: {
    id: string;
    title: string;
    description: string;
    image_url: string;
    price: number;
    original_price: number;
  };
}

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (courseId: string) => Promise<void>;
  removeFromCart: (cartItemId: string) => Promise<void>;
  clearCart: () => void;
  refreshCart: () => Promise<void>;
  loading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (isAuthenticated && user) {
      refreshCart();
    } else {
      setCartItems([]);
    }
  }, [isAuthenticated, user]);

  const refreshCart = async () => {
    if (!user?.id) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          id,
          course_id,
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

      if (error) {
        console.error('Error fetching cart:', error);
      } else {
        setCartItems(data || []);
      }
    } catch (error) {
      console.error('Error refreshing cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (courseId: string) => {
    if (!user?.id) {
      toast({
        title: "Login Required",
        description: "Please login to add courses to cart.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('cart_items')
        .insert({
          user_id: user.id,
          course_id: courseId
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already in Cart",
            description: "This course is already in your cart.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Added to Cart",
          description: "Course added to cart successfully.",
        });
        refreshCart();
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add course to cart.",
        variant: "destructive",
      });
    }
  };

  const removeFromCart = async (cartItemId: string) => {
    if (!user?.id) return;

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', cartItemId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      } else {
        toast({
          title: "Removed",
          description: "Course removed from cart.",
        });
        refreshCart();
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast({
        title: "Error",
        description: "Failed to remove course from cart.",
        variant: "destructive",
      });
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    cartCount: cartItems.length,
    addToCart,
    removeFromCart,
    clearCart,
    refreshCart,
    loading,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

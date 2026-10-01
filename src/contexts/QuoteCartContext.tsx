import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from "react";

interface QuoteCartContextType {
  items: string[];
  addItem: (name: string) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
  hasItem: (name: string) => boolean;
}

const QuoteCartContext = createContext<QuoteCartContextType | undefined>(undefined);

const STORAGE_KEY = "quote-cart-items";

export const QuoteCartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const addItem = useCallback((name: string) => {
    setItems((prev) => (prev.includes(name) ? prev : [...prev, name]));
  }, []);

  const removeItem = useCallback((name: string) => {
    setItems((prev) => prev.filter((i) => i !== name));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const hasItem = useCallback((name: string) => items.includes(name), [items]);

  return (
    <QuoteCartContext.Provider value={{ items, addItem, removeItem, clearCart, hasItem }}>
      {children}
    </QuoteCartContext.Provider>
  );
};

export const useQuoteCart = () => {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) throw new Error("useQuoteCart must be used within QuoteCartProvider");
  return ctx;
};

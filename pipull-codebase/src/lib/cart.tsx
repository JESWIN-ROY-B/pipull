import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { Service } from "./pipull-data";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  duration: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  itemTotal: number;
  taxes: number;
  serviceFee: number;
  plusSavings: number;
  total: number;
  isPlus: boolean;
  togglePlus: () => void;
  add: (service: Service) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  qtyOf: (id: string) => number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isPlus, setIsPlus] = useState(false);

  const add = useCallback((service: Service) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === service.id);
      if (existing) {
        return prev.map((i) => (i.id === service.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [
        ...prev,
        {
          id: service.id,
          title: service.title,
          price: service.price,
          duration: service.duration,
          qty: 1,
        },
      ];
    });
    setDrawerOpen(true);
  }, []);

  const increment = useCallback((id: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  }, []);

  const decrement = useCallback((id: string) => {
    setItems((prev) =>
      prev.flatMap((i) =>
        i.id === id ? (i.qty <= 1 ? [] : [{ ...i, qty: i.qty - 1 }]) : [i],
      ),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const itemTotal = items.reduce((s, i) => s + i.qty * i.price, 0);
    const plusSavings = isPlus ? Math.round(itemTotal * 0.15 * 100) / 100 : 0;
    const taxable = itemTotal - plusSavings;
    const taxes = Math.round(taxable * 0.08 * 100) / 100;
    const serviceFee = itemTotal > 0 ? 2.5 : 0;
    const total = Math.round((taxable + taxes + serviceFee) * 100) / 100;

    return {
      items,
      count,
      itemTotal,
      taxes,
      serviceFee,
      plusSavings,
      total,
      isPlus,
      togglePlus: () => setIsPlus((p) => !p),
      add,
      increment,
      decrement,
      remove,
      clear,
      drawerOpen,
      setDrawerOpen,
      qtyOf: (id: string) => items.find((i) => i.id === id)?.qty ?? 0,
    };
  }, [items, isPlus, drawerOpen, add, increment, decrement, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export const money = (n: number) =>
  `₹${Math.round(n).toLocaleString("en-IN")}`;

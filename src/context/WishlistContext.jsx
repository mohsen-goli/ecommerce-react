import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("rosa-wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("rosa-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function toggleWishlist(product) {
    setWishlist((current) => {
      const exists = current.find((item) => item.id === product.id);

      if (exists) {
        return current.filter((item) => item.id !== product.id);
      }

      return [...current, product];
    });
  }

  function removeFromWishlist(productId) {
    setWishlist((current) => current.filter((item) => item.id !== productId));
  }

  function isInWishlist(productId) {
    return wishlist.some((item) => item.id === productId);
  }

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist باید داخل WishlistProvider استفاده بشه");
  }
  return context;
}

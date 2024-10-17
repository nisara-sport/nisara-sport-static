import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product, variant, quantity) =>
    set((state) => {
      // Kiểm tra xem sản phẩm với biến thể này đã có trong giỏ hàng chưa
      const existingItemIndex = state.cart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.variant.option === variant.option
      );

      if (existingItemIndex !== -1) {
        // Nếu có, chỉ cập nhật số lượng
        const updatedCart = state.cart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return { cart: updatedCart };
      } else {
        // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng
        return {
          cart: [
            ...state.cart,
            { product, variant, quantity, price: product.price },
          ],
        };
      }
    }),
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item, index) => index !== itemId),
    })),
}));

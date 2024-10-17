"use client";

import { useRef, useState } from "react";
import { useCartStore } from "@/store/cart";
import { formatNumber } from "@/utils/formatNumber";
import { LoaderCircle, Trash } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Cart() {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);
  const { toast } = useToast();
  const [isSendingOrder, setIsSendingOrder] = useState(false);
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const totalCartPrice = cart.reduce((total, item) => {
    return total + Number(item.price) * item.quantity;
  }, 0);

  const productDetails = cart
    .map((item) => {
      return `Sản phẩm: ${item.name}\nLoại: ${item.variantName}\nSố lượng: ${
        item.quantity
      }\nĐơn giá: ${formatNumber(item.price)}đ`;
    })
    .join("\n\n");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const form = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (user.user_name && user.user_email && user.user_phone) {
      setIsSendingOrder(true);

      const currentForm = form.current;

      if (currentForm == null) return;

      await emailjs
        .sendForm("service_lml1ego", "template_l9n65a9", currentForm, {
          publicKey: "nEemcZNM5Z9qkA2gd",
        })
        .then(
          () => {
            toast({
              title: "Đơn hàng đã được gửi đi !",
              description:
                "Nisara Sport sẽ liên hệ để xác nhận với bạn trong thời gian sớm nhất. Xin cảm ơn.",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast({
              title: "Đã xảy ra lỗi !",
              description:
                "Hệ thống của Nisara Sport đang gặp lỗi, vui lòng thử lại sau hoặc liên hệ ngay qua hotline.",
            });
          }
        )
        .finally(() => {
          setIsSendingOrder(false);
          setUser({
            user_name: "",
            user_email: "",
            user_phone: "",
            message: "",
          });
        });
    } else {
      toast({
        title: "Lỗi !",
        description: "Vui lòng nhập đầy đủ thông tin.",
      });
    }
  };

  return (
    <div className="container py-10">
      <h1 className="text-center text-2xl font-semibold uppercase mb-5">
        Giỏ hàng
      </h1>
      {cart.length === 0 ? (
        <p>
          Không có sản phẩm nào trong giỏ hàng. Vui lòng quay lại cửa hàng để
          tiếp tục mua sắm.
        </p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <span className="lg:rounded-full lg:bg-black lg:text-white lg:w-5 lg:h-5 lg:text-center lg:flex lg:justify-center lg:items-center lg:flex-col">{`${
                  index + 1
                }`}</span>
                <div>
                  <h3 className="font-semibold text-lg">{item.product.name}</h3>
                  <p className="italic text-gray-600">{item.variant.option}</p>
                  <p className="text-gray-600">
                    {formatNumber(item.price)}đ x {item.quantity}
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    removeFromCart(index);
                  }}
                >
                  <Trash size={15} />
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col-reverse lg:flex-row gap-4 pt-10">
            <div className="lg:flex-1">
              <h1 className="font-semibold text-lg mb-5">Thông tin liên hệ</h1>
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid w-full items-center gap-1.5 mb-2">
                  <Label htmlFor="name">Tên khách hàng</Label>
                  <Input
                    placeholder="Nhập tên..."
                    type="name"
                    id="name"
                    name="user_name"
                    value={user.user_name}
                    onChange={handleChange}
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-black hover:border-gray-400 transition-all"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 mb-2">
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input
                    placeholder="Nhập số điện thoại..."
                    type="phone"
                    id="phone"
                    name="user_phone"
                    value={user.user_phone}
                    onChange={handleChange}
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-black hover:border-gray-400 transition-all"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 mb-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    placeholder="Nhập email..."
                    type="email"
                    id="email"
                    name="user_email"
                    value={user.user_email}
                    onChange={handleChange}
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-black hover:border-gray-400 transition-all"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 mb-2">
                  <Label htmlFor="message">Ghi chú (nếu có)</Label>
                  <Textarea
                    placeholder="Nhập yêu cầu của khách hàng..."
                    id="message"
                    name="message"
                    value={user.message}
                    onChange={handleChange}
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-black hover:border-gray-400 transition-all"
                  />
                </div>
                <input type="hidden" name="products" value={productDetails} />
                <Button
                  className="block mx-auto"
                  size={"sm"}
                  type="submit"
                  value="Send"
                  disabled={isSendingOrder}
                >
                  {isSendingOrder ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Gửi"
                  )}
                </Button>
              </form>
            </div>
            <div className="lg:flex-1">
              <h3 className="font-semibold text-lg lg:text-right">
                Tổng giá trị giỏ hàng:{" "}
                <span className="text-red-600 text-2xl">
                  {formatNumber(String(totalCartPrice))}đ
                </span>
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

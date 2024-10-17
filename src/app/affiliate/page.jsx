"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { LoaderCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Affiliate() {
  const { toast } = useToast();
  const [isSendingOrder, setIsSendingOrder] = useState(false);
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

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
        .sendForm("service_lml1ego", "template_pu794ag", currentForm, {
          publicKey: "nEemcZNM5Z9qkA2gd",
        })
        .then(
          () => {
            toast({
              title: "Đăng ký đã được gửi đi !",
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
      <h1 className="text-xl lg:text-2xl font-bold text-center mb-10">
        TUYỂN ĐẠI LÝ TOÀN QUỐC
      </h1>

      <p className="mb-10">
        Kính gửi các nhà phân phối, cửa hàng, sân bóng trên toàn quốc,
        <br />
        <br />
        Thương hiệu thể thao <span className="font-bold">NISARA</span> đang có
        nhu cầu mở rộng kênh phân phối bán hàng trên toàn quốc. Khi hợp tác cùng{" "}
        <span className="font-bold">NISARA</span>, mỗi thành phần trong hệ thống
        phân phối của chúng ta sẽ cùng có được các quyền lợi sau:
        <br />
        <br />
        <span className="font-bold">
          1. Danh mục sản phẩm đa dạng, chất lượng
        </span>
        <br />
        Danh mục hiện tại với nhiều mẫu tất và phụ kiện thể thao NISARA đang có
        sẵn và được cập nhật liên tục đáp ứng linh hoạt nhu cầu của khách hàng.
        Chất lượng sản phẩm hiện đang cao nhất thị trường trong phân khúc. Với 4
        năm hoạt động trong lĩnh vực phụ kiện thể thao, NISARA hiểu được nhu cầu
        thị hiếu của khách hàng để có thể cho ra đời các sản phẩm, các thiết kế
        tinh tế, sát với nhu cầu thực tế của khách hàng.
        <br />
        <br />
        <span className="font-bold">
          2. Lợi nhuận cao, tương xứng với tiềm năng
        </span>
        <br />
        Chiết khấu cao, đặc biệt cộng thêm mức thưởng hàng tháng xứng đáng với
        khả năng phân phối hàng hóa của từng đại lý. Hiệu suất kinh doanh
        được đảm bảo thông qua đội ngũ giám sát thị trường với mục đích ổn định
        giá bán trên toàn hệ thống.
        <br />
        <br />
        <span className="font-bold">
          3. Đảm bảo thương hiệu phát triển bền vững
        </span>
        <br />
        NISARA cam kết hỗ trợ và hợp tác thường xuyên với đại lý để triển khai
        các chương trình quảng bá thương hiệu, giới thiệu sản phẩm tới khách
        hàng.
        <br />
        <br />
        Mọi chi tiết, quý đại lý vui lòng liên hệ theo hotline hoặc điền thông
        tin vào form bên dưới, <span className="font-bold">NISARA</span> sẽ liên
        hệ lại với quý khách sau 24h làm việc:
        <br />
        Mr. Thắng:{" "}
        <a href="tel:+84349258885" className="italic underline">
          034.925.8885
        </a>{" "}
        (zalo).
      </p>
      <div className="lg:w-2/5 mx-auto block border-4 border-dashed rounded-lg p-4 border-gray-600">
        <h1 className="font-semibold text-lg mb-5 text-center">
          Đăng ký đại lý
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid w-full items-center gap-1.5 mb-2">
            <Label htmlFor="name">Tên chủ đại lý</Label>
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
              placeholder="Nhập yêu cầu của đại lý..."
              id="message"
              name="message"
              value={user.message}
              onChange={handleChange}
              className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-black hover:border-gray-400 transition-all"
            />
          </div>
          <Button
            className="block mx-auto"
            size={"sm"}
            type="submit"
            value="Send"
            disabled={isSendingOrder}
          >
            {isSendingOrder ? <LoaderCircle className="animate-spin" /> : "Gửi"}
          </Button>
        </form>
      </div>
    </div>
  );
}

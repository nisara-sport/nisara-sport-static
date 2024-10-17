export const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src={`/assets/nisara-logo-white.png`}
              className="w-2/5"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg mb-5">NISARA</h1>
            <p className="mb-2">MST: 8890589694</p>
            <p className="mb-2">
              Địa chỉ: Số 3 ngõ 107 Ngọc Trục, Đại Mỗ, Nam Từ Liêm, Hà Nội
            </p>
            <p className="mb-2">
              Hotline:{" "}
              <a className="underline" href="tel:+84968677903">
                0968.677.903
              </a>
            </p>
            <p className="mb-2">
              Phân Phối Sỉ:{" "}
              <a className="underline" href="tel:+84349258885">
                034.925.8885
              </a>
            </p>
            <p className="mb-2">
              Email:{" "}
              <a className="underline" href="mailto:nisara.sale@gmail.com">
                nisara.sale@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-lg mb-5">Liên kết</h1>

            <p className="mb-2">Đăng ký đại lý</p>
            <p className="mb-2">Giới thiệu</p>
            <p className="mb-2">Liên hệ</p>
            <p className="mb-2">Giỏ hàng</p>
          </div>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNisara.Sports&tabs=posts&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%"
              height="130"
              style={{ border: "none", overflow: "hidden" }}
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="block mx-auto"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

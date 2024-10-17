import { useGetCustomerFeedbackBanner } from "@/api/queries";
import Marquee from "react-fast-marquee";

export const CustomMarquee = () => {
  const { data: banners } = useGetCustomerFeedbackBanner();

  return (
    <>
      <h1 className="text-center font-bold uppercase text-2xl mb-10">
        Nisara cùng khách hàng
      </h1>
      <Marquee>
        <div>
          <img
            className="h-80"
            src={`/images/Customers/customer-1.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-80"
            src={`/images/Customers/customer-2.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-80"
            src={`/images/Customers/customer-3.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-80"
            src={`/images/Customers/customer-2.jpg`}
            alt=""
          />
        </div>
      </Marquee>
    </>
  );
};

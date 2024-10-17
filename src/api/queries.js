import { useQuery } from "@tanstack/react-query";
import {
  getAllProduct,
  getCarouselBanner,
  getCustomerFeedbackBanner,
  getSingleProduct,
} from "./api";

export const useGetAllProduct = () => {
  return useQuery({
    queryKey: ["allProduct"],
    queryFn: () => getAllProduct(),
  });
};

export const useGetSingleProduct = (id) => {
  return useQuery({
    queryKey: ["getProduct", id],
    queryFn: () => getSingleProduct(id),
  });
};

export const useGetCarouselBanner = () => {
  return useQuery({
    queryKey: ["carouselBanner"],
    queryFn: () => getCarouselBanner(),
  });
};

export const useGetCustomerFeedbackBanner = () => {
  return useQuery({
    queryKey: ["customerFeedbackBanner"],
    queryFn: () => getCustomerFeedbackBanner(),
  });
};

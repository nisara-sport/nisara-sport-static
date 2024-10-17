export const BASE_URL = "https://nasara-be.onrender.com/api/";

export const getAllProduct = async () => {
  try {
    const response = await fetch(`${BASE_URL}products/?populate=*`);

    if (response.status !== 200) {
      const errorData = await response.json();
      console.error("Error fetching products:", errorData);
      throw new Error(`Error ${response.status}: ${errorData.error.message}`);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}products/${id}?populate=*`);
    if (response.status !== 200) {
      const errorData = await response.json();
      console.error("Error fetching products:", errorData);
      throw new Error(`Error ${response.status}: ${errorData.error.message}`);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getCarouselBanner = async () => {
  try {
    const response = await fetch(`${BASE_URL}banners?populate[0]=images`);
    if (response.status !== 200) {
      const errorData = await response.json();
      console.error("Error fetching products:", errorData);
      throw new Error(`Error ${response.status}: ${errorData.error.message}`);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getCustomerFeedbackBanner = async () => {
  try {
    const response = await fetch(`${BASE_URL}customer-feedbacks?populate=*`);
    if (response.status !== 200) {
      const errorData = await response.json();
      console.error("Error fetching products:", errorData);
      throw new Error(`Error ${response.status}: ${errorData.error.message}`);
    }

    const data = await response.json();
    // console.log(data)
    return data;
    // return customerFeedbackBannerSchema.parse(data);
  } catch (err) {
    console.error(err);
  }
};

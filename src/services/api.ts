import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood"
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => `restaurantes`
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    checkoutPurchase: builder.mutation<{ orderId: string }, Checkout>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body
      })
    })
  })
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useCheckoutPurchaseMutation
} = api;
export default api;

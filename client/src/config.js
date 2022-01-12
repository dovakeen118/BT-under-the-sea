export const config = {
  env: process.env.NODE_ENV || "development",
  apiClient: {
    baseUri: "/api/v1",
  },
  validation: {
    email: {
      regexp: {
        emailRegex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      },
    },
  },
};

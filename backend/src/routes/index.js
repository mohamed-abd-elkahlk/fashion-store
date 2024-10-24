// const categoryRoute = require("./category.routes");
// const subCategoryRoute = require("./subCategory.routes");
// const brandRoute = require("./brand.routes");
// const productRoute = require("./product.routes");
// const userRoute = require("./user.routes");
const authRoute = require("./auth.routes");
// const reviewRoute = require("./reviews.routes");
// const wishlistRoute = require("./wishlist.routes");
// const addressRoute = require("./address.routes");
// const cartRoute = require("./cart.routes");
// const couponRoute = require("./coupon.routes");
// const orderRoute = require("./orders.routes");

const mountRoutes = (app) => {
  app.use("/api/auth", authRoute);
  //   app.use("/api/categories", categoryRoute);
  //   app.use("/api/subcategories", subCategoryRoute);
  //   app.use("/api/brands", brandRoute);
  //   app.use("/api/products", productRoute);
  //   app.use("/api/users", userRoute);
  //   app.use("/api/reviews", reviewRoute);
  //   app.use("/api/wishlist", wishlistRoute);
  //   app.use("/api/addresses", addressRoute);
  //   app.use("/api/coupons", couponRoute);
  //   app.use("/api/cart", cartRoute);
  //   app.use("/api/orders", orderRoute);
};

module.exports = mountRoutes;

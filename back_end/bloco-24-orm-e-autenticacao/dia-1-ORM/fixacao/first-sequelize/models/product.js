const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
  });

  return Product;
};

module.exports = Product;
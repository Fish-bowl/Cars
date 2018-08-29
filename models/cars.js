'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define('Cars', {
    make: DataTypes.STRING,
    model: DataTypes.STRING
  }, {});
  Cars.associate = function(models) {
    // associations can be defined here
  };
  return Cars;
};
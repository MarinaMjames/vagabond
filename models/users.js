module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Burger", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      autoIncrement: true,
      notNull: true,
      primaryKey: true
    },
    burger_name: {
      type: DataTypes.STRING,
      notNull: true
    }, 
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  // },
  //   {
  //     // We're saying that we want our Author to have Posts
  //     classMethods: {
  //       associate: function(models) {
  //         // An Author (foreignKey) is required or a Post can't be made
  //         Post.belongsTo(models.Author, {
  //           foreignKey: {
  //             allowNull: false
  //           }
  //         });
  //       }
  //     }
  //   }
  });
  return Burger;
};

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      notNull: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      notNull: true
    }, 
    last_name: {
      type: DataTypes.STRING,
      notNull: true
    },
    email: {
      type: DataTypes.STRING,
      notNull: true
    },  
    username: {
      type: DataTypes.STRING,
      notNull: true
    }, 
    password: {
      type: DataTypes.STRING,
      notNull: true
    }, 
    location: {
      type: DataTypes.STRING,
      notNull: true
    }, 
    age: {
      type: DataTypes.INTEGER,
      notNull: true
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
  return User;
};

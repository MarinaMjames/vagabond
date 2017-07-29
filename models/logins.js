module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Login", { 
    username: {
      type: DataTypes.TEXT,
      notNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });
  return Login;
};


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
    age: {
      type: DataTypes.INTEGER,
      notNull: true
    }, 
    location: {
      type: DataTypes.STRING,
      notNull: true
    }, 
    email: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        isEmail: true
      },
    },  
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
  return User;
};


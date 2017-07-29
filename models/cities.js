module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define("City", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      notNull: true,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING,
      notNull: true
    }, 
    bio: {
      type: DataTypes.TEXT,
      notNull: true
    },
    landmark1: {
      type: DataTypes.STRING,
      notNull: true
    }, 
    landmark2: {
      type: DataTypes.STRING,
      notNull: true
    }, 
    landmark3: {
      type: DataTypes.STRING,
      notNull: true
    },  
    landmark4: {
      type: DataTypes.STRING,
      notNull: true
    },
    landmark5: {
      type: DataTypes.STRING,
      notNull: true
    }, 
    landmark6: {
      type: DataTypes.STRING,
      notNull: true
    },
    landmark7: {
      type: DataTypes.STRING,
      notNull: true
    },
    landmark8: {
      type: DataTypes.STRING,
      notNull: true
    },
    landmark9: {
      type: DataTypes.STRING,
      notNull: true
    },
    landmark10: {
      type: DataTypes.STRING,
      notNull: true
    },
    createdAt: {

      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
      
    }
  });
  return City;
};


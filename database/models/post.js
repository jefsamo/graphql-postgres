"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: "userId", as: "author" });
    Post.hasMany(models.Comment, { foreignKey: "postId", as: "comments" });
  };
  return Post;
};

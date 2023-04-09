"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init(
    {
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
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Posts",
          },
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "userId", as: "author" });
    Comment.belongsTo(models.Post, { foreignKey: "postId", as: "post" });
  };
  return Comment;
};

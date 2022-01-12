const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Establishes many-to-one relationship with Post
User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// Establishes one-to-many relationship with User
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// Establishes many-to-one relationship with Comment
User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// Establishes many-to-one relationship with User
Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// Establishes one-to-many relationship with Comment
Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

// Establishes one-to-many relationship with Post
Comment.belongsTo(Post, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Comment,
  Post,
};

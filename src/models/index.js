import { User } from "./User.js";
import { Favorite } from "./Favorite.js";

User.hasMany(Favorite, {
  as: "fan",
});

Favorite.belongsTo(User, { as: "author" });

export default { User, Favorite };

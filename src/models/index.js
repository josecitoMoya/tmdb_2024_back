import { User } from "./User.js";
import { Favorite } from "./Favorite.js";

const hasManyAs = process.env.MODEL_HAS_MANY;
const belongsToAs = process.env.MODEL_BELONGS_TO;

User.hasMany(Favorite, {
  as: hasManyAs,
});

Favorite.belongsTo(User, { as: belongsToAs });

export default { User, Favorite };

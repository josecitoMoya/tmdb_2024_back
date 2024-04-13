import { User } from "./User.js";
import { Favorite } from "./Favorite.js";

const { MODEL_HAS_MANY, MODEL_BELONGS_TO } = process.env;

User.hasMany(Favorite, {
  as: MODEL_HAS_MANY,
});

Favorite.belongsTo(User, { as: MODEL_BELONGS_TO });

export default { User, Favorite };

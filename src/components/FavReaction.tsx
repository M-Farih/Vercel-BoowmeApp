import { useState } from "react";
import { View } from "components";
import { StarIconHover, StarIconO } from "components/icons";

export const FavReaction = () => {
  const [fav, setFav] = useState(false);

  return (
    <View>
      {fav ? (
        <View onClick={() => setFav(!fav)}>
          <StarIconHover className="-ml-0.5 h-6 w-6 " />
        </View>
      ) : (
        <View onClick={() => setFav(!fav)}>
          <StarIconO className="-ml-0.5 h-6 w-6 " />
        </View>
      )}
    </View>
  );
};

import { useState } from "react";
import { View } from "components";
import { UnlockIcon, UnlockIconO } from "components/icons";

export const Unlock = () => {
  const [Unlock, setUnlock] = useState(false);

  return (
    <View>
      {Unlock ? (
        <View className="text-[#3d2f5b]" onClick={() => setUnlock(!Unlock)}>
          <UnlockIcon className="-ml-0.5 h-6 w-6 " />
        </View>
      ) : (
        <View onClick={() => setUnlock(!Unlock)}>
          <UnlockIconO className="-ml-0.5 h-6 w-6" />
        </View>
      )}
    </View>
  );
};

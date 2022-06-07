import { MenuBarItem } from "components/header/MenuBarItem";
import { HomeIcon, LockIcon, WallIcon } from "components/icons";
import { View } from "components/View";

export function MenuBar() {
  return (
    <View className="right_side">
      <View className="header_widgets rounded-t-2xl">
        <MenuBarItem href="/" title="Acceuil" icon={<HomeIcon />} />
        <MenuBarItem href="/wall" title="Wall" icon={<WallIcon />} />
        <MenuBarItem
          href="/conversation"
          title="Lock"
          icon={<LockIcon />}
          badge={3}
        />
        {/* <Profile /> */}
      </View>
    </View>
  );
}

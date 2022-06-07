// import Link from "next/link";
// import React from "react";

// type HeaderProps = {
//   email: string | null;
//   signOut: () => void;
// };
// export const Header = ({ email, signOut }: HeaderProps) => (
//   <div>
//     {email ? (
//       <>
//         <p>Signed in as {email}</p>
//         <button
//           type="button"
//           onClick={() => {
//             signOut();
//           }}
//         >
//           Sign out
//         </button>
//       </>
//     ) : (
//       <>
//         <p>You are not signed in.</p>
//         <Link href="/auth">
//           <a>
//             <button type="button">Sign in</button>
//           </a>
//         </Link>
//       </>
//     )}
//   </div>
// );

import { FC, useState } from "react";
import type { HeaderProps } from "components/types";
import { View } from "components";
import { ChevronLeft } from "components/icons";
import Image from "next/image";
import stepslogowhite from "../../public/images/stepslogowhite.png";
import logoBoowme from "../../public/images/logo-boowme.webp";
import cn from "classnames";
import { useRouter } from "next/dist/client/router";
import { MenuIcon } from "@heroicons/react/outline";
import { Sidebar } from "layouts/sidebar";
import { useAuthUser } from "next-firebase-auth";
const calculClass = ({ variant }: HeaderProps) => {
  return cn({
    "is_header sticky top-0 -mb-16 z-40 h-14 w-full flex flex-wrap justify-between border-b border-b-white rounded-b-3xl bg-white bg-opacity-10 items-center backdrop-filter backdrop-blur-md":
      variant === "blur",
    "is_header sticky top-0 z-40 h-14 w-full flex justify-between rounded-b-3xl bg-white items-center shadow-sm":
      variant === "default",
    "is_header sticky top-0 z-40 h-12 w-full flex justify-between bg-white items-center":
      variant === "flat",
  });
};

export const Header: FC<HeaderProps> = ({
  variant,
  backLink,
  setting,
  justify = "justify-center",
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const AuthUser = useAuthUser();

  return (
    <View className={calculClass({ variant })}>
      {backLink && (
        <View className="absolute" onClick={() => router.back()}>
          <ChevronLeft color={variant === "blur" ? "white" : "#3C2E59"} />
        </View>
      )}

      <View className={`flex w-full ${justify} items-center`}>
        <Image
          src={variant === "blur" ? stepslogowhite : logoBoowme}
          alt="Picture of the author"
          width={110}
          height={50}
          objectFit="contain"
          objectPosition="center"
        />
        {setting && (
          <MenuIcon onClick={() => setOpen(true)} className="h-6 w-6 text-c1" />
        )}
      </View>
      <Sidebar
        show={open}
        onClick={() => setOpen(false)}
        signOut={AuthUser.signOut}
        displayName={AuthUser.displayName}
        photoURL={AuthUser.photoURL}
      />
    </View>
  );
};

import { FC, useState } from "react";
import Image from "next/image";
import { Button, Col, Popup, View } from "components";
import { AvatarProps } from "components/types";
import {
  CameraIcon,
  Pencil,
  PictureIcon,
  FacebookLightIcon,
} from "components/icons";

export const Avatar: FC<AvatarProps> = ({
  image,
  rounded,
  blured,
  height,
  width,
  edit,
  onClick,
  bgBorder,
}) => {
  let [isOpen, setIsOpen] = useState(false);
  console.log(image + "hello");

  return (
    <View className={`relative ${rounded} ${height} ${width}`}>
      <View
        className={`${rounded} ${height} ${width} shadow-md ${
          bgBorder
            ? "bg-gradient-to-r p-[3px] from-c1 via-c2 to-c4"
            : "border-2 border-white "
        }`}
      >
        <Popup
          show={isOpen}
          onClose={() => setIsOpen(false)}
          title={"Modify your picture"}
        >
          <Col className="self-center space-y-2">
            <Button
              icon={<CameraIcon iconPosition="left" />}
              label="Take a picture"
              variant="primary"
              width="w-64"
              alignSelf="self-center"
            />
            <Button
              icon={<PictureIcon iconPosition="left" />}
              label="Upload from gallery"
              variant="primary"
              width="w-64"
              alignSelf="self-center"
            />
            <Button
              icon={<FacebookLightIcon iconPosition="left" />}
              label="Upload from Facebook"
              variant="primary"
              width="w-64"
              alignSelf="self-center"
            />
          </Col>
        </Popup>
        <Image
          src={image}
          width={200}
          height={200}
          layout="responsive"
          loading="lazy"
          objectFit="cover"
          className={
            `is_avatar bg-white ${rounded}` +
            ` ${blured ? "filter blur-md" : ""}`
          }
        />
      </View>

      {edit && (
        <View className="absolute right-0 bottom-0">
          <Button icon={<Pencil />} variant="circle" onClick={onClick} />
        </View>
      )}
    </View>
  );
};

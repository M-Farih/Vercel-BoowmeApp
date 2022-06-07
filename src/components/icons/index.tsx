import {
  ChevronLeftIcon,
  ArrowRightIcon,
  ArrowNarrowRightIcon,
  ChevronDownIcon,
  LocationMarkerIcon,
  CheckCircleIcon,
  CakeIcon,
  MusicNoteIcon,
  PuzzleIcon,
  UserIcon,
  ChevronRightIcon,
  XIcon,
} from "components/icons/solid";
import Verified from "../../../public/images/icons/verified.svg";
import { PencilIcon, ShieldCheckIcon } from "components/icons/outline";
import type { IconProps } from "components/types";
import type { FC } from "react";
import Image from "next/image";
import Facebook from "../../../public/images/icons/facebook.svg";
import Travel from "../../../public/images/icons/around.svg";
import Cooking from "../../../public/images/icons/cooking.svg";
import Sport from "../../../public/images/icons/sport.svg";
import Clothes from "../../../public/images/icons/clothes.svg";
import Sewing from "../../../public/images/icons/sewing.svg";
import Movies from "../../../public/images/icons/clapperboard.svg";
import HangOut from "../../../public/images/icons/hang-out.svg";
import Music from "../../../public/images/icons/music.svg";
import RoadTrip from "../../../public/images/icons/road-trip.svg";
import Dancing from "../../../public/images/icons/live-music.svg";
import Sleeping from "../../../public/images/icons/rest.svg";
import Pets from "../../../public/images/icons/pets.svg";
import Hunting from "../../../public/images/icons/hunter.svg";
import Shopping from "../../../public/images/icons/shopping.svg";
import Yoga from "../../../public/images/icons/yoga.svg";
import Singing from "../../../public/images/icons/singing.svg";
import Reading from "../../../public/images/icons/reading.svg";
import Writing from "../../../public/images/icons/writing-tool.svg";
import Food from "../../../public/images/icons/food.svg";
import Car from "../../../public/images/icons/car.svg";
import Photography from "../../../public/images/icons/camera.svg";
import Videogame from "../../../public/images/icons/videogame.svg";
import Male from "../../../public/images/icons/male.svg";
import Female from "../../../public/images/icons/female.svg";
import Nogosting from "../../../public/images/icons/nogosting.svg";
import Noharassment from "../../../public/images/icons/noharassment.svg";
import Cleanenvironment from "../../../public/images/icons/clean.svg";
import Timesaver from "../../../public/images/icons/timesaver.svg";
import Safeenvironment from "../../../public/images/icons/safeenvironment.svg";
import Nomultidating from "../../../public/images/icons/nomultidating.svg";
import Craft from "../../../public/images/icons/craft.svg";
import Google from "../../../public/images/icons/googleIcon.webp";
import Phone from "../../../public/images/icons/phoneIcon.webp";
import Position from "../../../public/images/icons/position.svg";

export const ChevronLeft: FC<IconProps> = (props) => (
  <ChevronLeftIcon color={props.color} className={`w-10 h-10`} />
);
export const XCircle: FC<IconProps> = (props) => (
  <XIcon color={props.color} className={`w-6 h-6 absolute top-3 right-3`} />
);

{
  /** centered icon page*/
}
export const ShieldCheck: FC<IconProps> = (props) => (
  <ShieldCheckIcon
    color={props.color}
    className={`w-16 ${props.iconPosition}-5`}
  />
);
export const LocationMarkerImg: FC<IconProps> = (props) => (
  <LocationMarkerIcon
    color={props.color}
    className={`w-16 ${props.iconPosition}-5`}
  />
);
{
  /** button icon */
}
export const ArrowDown: FC<IconProps> = (props) => (
  <ChevronDownIcon className={`w-4 h-4 absolute ${props.iconPosition}-5`} />
);
export const ArrowRight: FC<IconProps> = (props) => (
  <ArrowRightIcon className={`w-5 absolute ${props.iconPosition}`} />
);
export const LocationMarker: FC<IconProps> = (props) => (
  <LocationMarkerIcon className={`w-5 absolute ${props.iconPosition}`} />
);
export const ArrowNarrowRight: FC<IconProps> = (props) => (
  <ArrowNarrowRightIcon className={`w-5 absolute ${props.iconPosition}`} />
);
export const CheckCircle: FC<IconProps> = (props) => (
  <CheckCircleIcon color={props.color} className={`w-6 pr-2`} />
);
export const Pencil: FC<IconProps> = (props) => (
  <PencilIcon color={props.color} className={`w-4`} />
);
{
  /** image icon */
}

export const ReadingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Reading}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const TravelIcon: FC<IconProps> = (_props) => (
  <Image
    src={Travel}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const CookingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Cooking}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const SportIcon: FC<IconProps> = (_props) => (
  <Image
    src={Sport}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const ClothesIcon: FC<IconProps> = (_props) => (
  <Image
    src={Clothes}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const SewingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Sewing}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const MoviesIcon: FC<IconProps> = (_props) => (
  <Image
    src={Movies}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const HangOutIcon: FC<IconProps> = (_props) => (
  <Image
    src={HangOut}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const MusicIcon: FC<IconProps> = (_props) => (
  <Image
    src={Music}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const RoadTripIcon: FC<IconProps> = (_props) => (
  <Image
    src={RoadTrip}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const DancingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Dancing}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const PetsIcon: FC<IconProps> = (_props) => (
  <Image
    src={Pets}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const SleepingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Sleeping}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const HuntingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Hunting}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const VerifiedIcon: FC<IconProps> = (_props) => (
  <Image
    src={Verified}
    alt="Picture of the author"
    width={55}
    height={55}
    objectFit="contain"
    objectPosition="center"
  />
);

export const ShoppingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Shopping}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const YogaIcon: FC<IconProps> = (_props) => (
  <Image
    src={Yoga}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const SingingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Singing}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const WritingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Writing}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const FoodIcon: FC<IconProps> = (_props) => (
  <Image
    src={Food}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const CarIcon: FC<IconProps> = (_props) => (
  <Image
    src={Car}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const PhotographyIcon: FC<IconProps> = (_props) => (
  <Image
    src={Photography}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const VideogameIcon: FC<IconProps> = (_props) => (
  <Image
    src={Videogame}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const MaleIcon: FC<IconProps> = (_props) => (
  <Image
    src={Male}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const FemaleIcon: FC<IconProps> = (_props) => (
  <Image
    src={Female}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const NogostingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Nogosting}
    alt="Picture of the author"
    width={40}
    height={40}
    objectFit="contain"
    objectPosition="center"
  />
);

export const NoharassmentIcon: FC<IconProps> = (_props) => (
  <Image
    src={Noharassment}
    alt="Picture of the author"
    width={40}
    height={40}
    objectFit="contain"
    objectPosition="center"
  />
);

export const SelecteNotificationsIcon: FC<IconProps> = (_props) => (
  <Image
    src={Cleanenvironment}
    alt="Picture of the author"
    width={40}
    height={40}
    objectFit="contain"
    objectPosition="center"
  />
);

export const TimesaverIcon: FC<IconProps> = (_props) => (
  <Image
    src={Timesaver}
    alt="Picture of the author"
    width={40}
    height={40}
    objectFit="contain"
    objectPosition="center"
  />
);

export const SafeenvironmentIcon: FC<IconProps> = (_props) => (
  <Image
    src={Safeenvironment}
    alt="Picture of the author"
    width={40}
    height={40}
    objectFit="contain"
    objectPosition="center"
  />
);

export const NomultidatingIcon: FC<IconProps> = (_props) => (
  <Image
    src={Nomultidating}
    alt="Picture of the author"
    width={40}
    height={40}
    objectFit="contain"
    objectPosition="center"
  />
);

export const FacebookIcon: FC<IconProps> = (props) => (
  <div className={`w-4 h-4 absolute ${props.iconPosition} inline-flex`}>
    <Image
      // src="/images/icons/facebookIcon.png"
      src={Facebook}
      alt="Picture of the author"
      width={16}
      height={16}
      objectFit="contain"
      objectPosition="center"
    />
  </div>
);
export const FacebookLightIcon: FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19.721"
    height="19.72"
    viewBox="0 0 19.721 19.72"
    className={`w-4 h-4 absolute ${props.iconPosition} inline-flex`}
  >
    <g
      id="Group_115"
      data-name="Group 115"
      transform="translate(-426.742 -298.392)"
    >
      <path
        id="Path_360"
        data-name="Path 360"
        d="M439.747,318.112v-8.2h2.422l.3-3.274h-2.6c0-.166,0-.3,0-.443,0-.306,0-.613,0-.919a.681.681,0,0,1,.773-.75c.515,0,1.031,0,1.546,0h.229v-2.8a.541.541,0,0,0-.089-.015c-.9,0-1.793-.025-2.688,0a3.066,3.066,0,0,0-2.558,1.248,3.783,3.783,0,0,0-.645,2.221c-.006.4,0,.792,0,1.187,0,.074,0,.148,0,.247h-1.61V309.9h1.617v8.2c-.076,0-.154.01-.232.01q-3.428,0-6.856,0a2.509,2.509,0,0,1-2.611-2.608q0-7.248,0-14.5a2.507,2.507,0,0,1,2.605-2.614q7.248,0,14.5,0a2.508,2.508,0,0,1,2.617,2.624q0,7.237,0,14.474a2.508,2.508,0,0,1-2.622,2.62q-1.927,0-3.854,0Z"
        transform="translate(0)"
        fill="CurrentColor"
      />
    </g>
  </svg>
);

export const PictureIcon: FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23.573"
    height="17.68"
    viewBox="0 0 23.573 17.68"
    className={`w-4 h-4 absolute ${props.iconPosition} inline-flex`}
  >
    <g id="card-image" transform="translate(0 -4.5)">
      <path
        id="Path_77"
        data-name="Path 77"
        d="M21.363,5.973H2.21a.737.737,0,0,0-.737.737V19.97a.737.737,0,0,0,.737.737H21.363a.737.737,0,0,0,.737-.737V6.71A.737.737,0,0,0,21.363,5.973ZM2.21,4.5A2.21,2.21,0,0,0,0,6.71V19.97a2.21,2.21,0,0,0,2.21,2.21H21.363a2.21,2.21,0,0,0,2.21-2.21V6.71a2.21,2.21,0,0,0-2.21-2.21Z"
        transform="translate(0 0)"
        fill="CurrentColor"
        fill-rule="evenodd"
      />
      <path
        id="Path_78"
        data-name="Path 78"
        d="M16.466,17.09a.737.737,0,0,1,.85-.137l5.565,2.869v5.157H2.255V23.5l3.9-3.468a.737.737,0,0,1,.928-.092L11,22.557l5.466-5.466Z"
        transform="translate(-0.778 -4.272)"
        fill="CurrentColor"
      />
      <path
        id="Path_79"
        data-name="Path 79"
        d="M8.965,13.42a2.21,2.21,0,1,0-2.21-2.21,2.21,2.21,0,0,0,2.21,2.21Z"
        transform="translate(-2.332 -1.553)"
        fill="CurrentColor"
        fill-rule="evenodd"
      />
    </g>
  </svg>
);

export const CameraIcon: FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23.573"
    height="17.68"
    viewBox="0 0 23.573 17.68"
    className={`w-4 h-4 absolute ${props.iconPosition} inline-flex`}
  >
    <g id="camera-fill" transform="translate(0 -4.5)">
      <path
        id="Path_75"
        data-name="Path 75"
        d="M19.742,17.183A3.683,3.683,0,1,1,16.058,13.5a3.683,3.683,0,0,1,3.683,3.683Z"
        transform="translate(-4.272 -3.107)"
        fill="CurrentColor"
      />
      <path
        id="Path_76"
        data-name="Path 76"
        d="M2.947,7.447A2.947,2.947,0,0,0,0,10.393v8.84A2.947,2.947,0,0,0,2.947,22.18h17.68a2.947,2.947,0,0,0,2.947-2.947v-8.84a2.947,2.947,0,0,0-2.947-2.947H18.9a2.947,2.947,0,0,1-2.083-.864L15.6,5.363A2.947,2.947,0,0,0,13.513,4.5H10.06a2.947,2.947,0,0,0-2.083.864l-1.22,1.22a2.947,2.947,0,0,1-2.084.863Zm.737,2.947a.737.737,0,1,0-.737-.737A.737.737,0,0,0,3.683,10.393Zm13.26,3.683A5.157,5.157,0,1,1,11.786,8.92,5.157,5.157,0,0,1,16.943,14.077Z"
        transform="translate(0 0)"
        fill="CurrentColor"
        fill-rule="evenodd"
      />
    </g>
  </svg>
);

export const GoogleIcon: FC<IconProps> = (props) => (
  <div className={`w-4 h-4 absolute ${props.iconPosition} inline-flex`}>
    <Image
      // src="/images/icons/googleIcon.png"
      src={Google}
      alt="Picture of the author"
      width={16}
      height={16}
      objectFit="contain"
      objectPosition="center"
    />
  </div>
);

export const PhoneIcon: FC<IconProps> = (props) => (
  <div className={`w-4 h-4 absolute ${props.iconPosition} inline-flex`}>
    <Image
      // src="/images/icons/phoneIcon.png"
      src={Phone}
      alt="Picture of the author"
      width={14}
      height={14}
      objectFit="contain"
      objectPosition="center"
    />
  </div>
);

export const CraftIcon: FC<IconProps> = (_props) => (
  <Image
    src={Craft}
    alt="Picture of the author"
    width={32}
    height={32}
    objectFit="contain"
    objectPosition="center"
  />
);

export const PositionIcon: FC<IconProps> = (_props) => (
  <Image
    src={Position}
    alt="Picture of the author"
    width={80}
    height={80}
    objectFit="contain"
    objectPosition="center"
  />
);

{
  /** bar menu icon */
}
export const HomeIcon: FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31.561"
    height="26.827"
    viewBox="0 0 31.561 26.827"
  >
    <path
      id="Path_2140"
      data-name="Path 2140"
      d="M46.947,14.67l7.89,7.1V34.1H51.681V24.628H42.212V34.1H39.056V21.771l7.89-7.1m0-4.245-15.781,14.2H35.9V37.252h9.468V27.784h3.156v9.468h9.468V24.628h4.734Z"
      transform="translate(-31.166 -10.425)"
      fill={props.color}
    />
  </svg>
);

export const SendMessageIcon: FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32.192"
    height="26.244"
    viewBox="0 0 32.192 26.244"
  >
    <g
      id="Group_471"
      data-name="Group 471"
      transform="translate(-206.262 135.096)"
    >
      <g id="Group_473" data-name="Group 473" transform="translate(14 -4)">
        <g
          id="Path_2141"
          data-name="Path 2141"
          transform="translate(0 131.742)"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M193.762-248.295l29.192-13.043-7.4,20.3-10.149-4.389L222.782-261.1l-20.436,14.883Z"
            stroke="none"
          />
          <path
            d="M 215.5571136474609 -241.0328979492188 L 222.9542541503906 -261.3377380371094 L 193.7622833251953 -248.2945251464844 L 202.3461456298828 -246.2121887207031 L 222.7818450927734 -261.0956420898438 L 205.4080200195312 -245.421875 L 215.5571136474609 -241.0328979492188 M 215.5571136474609 -239.5328979492188 C 215.3543701171875 -239.5328979492188 215.1516876220703 -239.573974609375 214.9617309570312 -239.6561126708984 L 204.8126220703125 -244.0451049804688 C 204.3440399169922 -244.2477416992188 204.0106811523438 -244.6748046875 203.9278717041016 -245.1785736083984 C 203.9104919433594 -245.2843780517578 203.9046478271484 -245.3905029296875 203.9097900390625 -245.4953308105469 L 203.2292327880859 -244.9996795654297 C 202.8730163574219 -244.7402496337891 202.4207763671875 -244.6505889892578 201.9925231933594 -244.7544708251953 L 193.4086608886719 -246.8368072509766 C 192.7851409912109 -246.9880676269531 192.3268737792969 -247.5191345214844 192.2685089111328 -248.1580505371094 C 192.2101287841797 -248.7969970703125 192.5645904541016 -249.4023132324219 193.1503753662109 -249.6640319824219 L 222.3423461914062 -262.7072448730469 C 222.8923187255859 -262.9530029296875 223.5359497070312 -262.8458557128906 223.9766998291016 -262.435302734375 C 224.4174499511719 -262.0246887207031 224.5698394775391 -261.3902893066406 224.3636474609375 -260.8242797851562 L 216.9665069580078 -240.5194549560547 C 216.8250885009766 -240.1312713623047 216.5298309326172 -239.8186187744141 216.150390625 -239.6552124023438 C 215.9610443115234 -239.5736694335938 215.7590484619141 -239.5328979492188 215.5571136474609 -239.5328979492188 Z"
            stroke="none"
            fill={props.color}
          />
        </g>
        <path
          id="Path_2142"
          data-name="Path 2142"
          d="M295.225-118.719l-4.559,5.294.523-7.2"
          transform="translate(-86.769 7.524)"
          fill="none"
          stroke={props.color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_2143"
          data-name="Path 2143"
          d="M269.779-127.39l2.423,7.875"
          transform="translate(-68.379 13.726)"
          fill="none"
          stroke={props.color}
          stroke-linecap="round"
          stroke-width="1.5"
        />
      </g>
    </g>
  </svg>
);

export const LockIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11.567"
    height="15.181"
    viewBox="0 0 11.567 15.181"
  >
    <path
      id="Icon_ionic-md-lock"
      data-name="Icon ionic-md-lock"
      d="M16.871,8.295h-.723V6.849a3.615,3.615,0,0,0-7.229,0V8.295H8.2A1.45,1.45,0,0,0,6.75,9.741V16.97A1.45,1.45,0,0,0,8.2,18.416h8.675a1.45,1.45,0,0,0,1.446-1.446V9.741A1.45,1.45,0,0,0,16.871,8.295Zm-4.338,6.579a1.446,1.446,0,1,1,1.446-1.446A1.45,1.45,0,0,1,12.533,14.874Zm2.241-6.579H10.292V6.849a2.241,2.241,0,1,1,4.482,0Z"
      transform="translate(-6.75 -3.234)"
      fill="CurrentColor"
    />
  </svg>
);

export const WallIcon: FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30.65"
    height="29.139"
    viewBox="0 0 30.65 29.139"
  >
    <g id="Group_460" data-name="Group 460" transform="translate(-46.7 -10.3)">
      <path
        id="Path_377"
        data-name="Path 377"
        d="M46.7,141.3h7.786s5.61,7.46,6.5,13.855h-7.39A42.65,42.65,0,0,0,46.7,141.3Z"
        transform="translate(0 -120.821)"
        fill={props.color}
      />
      <path
        id="Path_378"
        data-name="Path 378"
        d="M184.6,57.2h7.786s9.138,12.425,9.892,25.495h-7.141S193.435,68.055,184.6,57.2Z"
        transform="translate(-127.185 -43.256)"
        fill={props.color}
      />
      <path
        id="Path_379"
        data-name="Path 379"
        d="M320.1,10.3h7.786s3.644,15.067,0,27.1a50.007,50.007,0,0,0-6.356-18.323S321.351,13.082,320.1,10.3Z"
        transform="translate(-252.156 0)"
        fill={props.color}
      />
      <path
        id="Path_380"
        data-name="Path 380"
        d="M182.268,78.1a34.879,34.879,0,0,1-.668,7.631,27.859,27.859,0,0,1,4.367,10.179A26.3,26.3,0,0,0,188,89.08S187.171,85.474,182.268,78.1Z"
        transform="translate(-124.418 -62.532)"
        fill={props.color}
      />
    </g>
  </svg>
);

{
  /** bar menu icon */
}

export const MyProfile: FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16.047"
    viewBox="0 0 16 16.047"
  >
    <path
      id="account"
      d="M8,9.992A3.867,3.867,0,0,1,5.161,8.819,3.867,3.867,0,0,1,3.988,5.98,3.864,3.864,0,0,1,5.161,3.142,3.87,3.87,0,0,1,8,1.969a3.864,3.864,0,0,1,2.838,1.173,3.868,3.868,0,0,1,1.173,2.839A3.868,3.868,0,0,1,10.838,8.82,3.864,3.864,0,0,1,8,9.993ZM8,12.01a14.246,14.246,0,0,1,3.261.422,10.265,10.265,0,0,1,3.261,1.384A2.678,2.678,0,0,1,16,16v2.017H0V16a2.678,2.678,0,0,1,1.478-2.182,10.28,10.28,0,0,1,3.261-1.384A14.209,14.209,0,0,1,8,12.01Z"
      transform="translate(0 -1.969)"
      fill="currentColor"
    />
  </svg>
);
export const MyMatch: FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 34.215 21.402"
  >
    <g
      id="Group_485"
      data-name="Group 485"
      transform="translate(11.481 -17.256)"
    >
      <path
        id="Path_368"
        data-name="Path 368"
        d="M151.578,159.058a10.773,10.773,0,0,1-1.237,1.141c-.179.151-.357.275-.55.412a7.368,7.368,0,0,1,1.072,3.849,7.554,7.554,0,1,1-14.022-3.89,5.117,5.117,0,0,1,.385-.564,3.256,3.256,0,0,1,.44-.536,6.213,6.213,0,0,1,1.265-1.141,3.652,3.652,0,0,1,.646-.412,7.384,7.384,0,0,1,.729-.385,7.54,7.54,0,0,1,3-.619,7.65,7.65,0,0,1,3.038.632,3.807,3.807,0,0,0,.729-.412,6.583,6.583,0,0,0,1.333-1.127,3.263,3.263,0,0,0,.44-.536,10.479,10.479,0,0,0-11.025-.028,5.336,5.336,0,0,0-.591.371c-.179.138-.357.261-.536.412a9.457,9.457,0,0,0-1.21,1.141c-.165.165-.316.357-.467.536a4.381,4.381,0,0,0-.412.577,10.394,10.394,0,0,0-1.87,5.98,10.571,10.571,0,1,0,19.314-5.939C151.894,158.7,151.743,158.879,151.578,159.058Z"
        transform="translate(163.551 -115.247) rotate(90)"
        fill="currentColor"
      />
      <path
        id="Path_369"
        data-name="Path 369"
        d="M156.737,12.911a12.629,12.629,0,0,0-.281-1.561,11.67,11.67,0,0,0-.5-1.476,2.246,2.246,0,0,0-.207-.463,6.162,6.162,0,0,0-.342-.622c-.11-.207-.244-.4-.366-.6-.073-.1-.134-.207-.207-.3a1.314,1.314,0,0,0-.22-.293,5.72,5.72,0,0,0-.427-.525c0-.012-.012-.024-.024-.037l-.012-.012c-.061-.073-.122-.134-.183-.207a.565.565,0,0,0-.085-.085c-.183-.2-.366-.378-.561-.561a10.93,10.93,0,0,0-1.2-.939c-.146-.1-.281-.183-.427-.268-.293-.183-.586-.342-.89-.5a10.7,10.7,0,0,0-3.269-.951c-.22-.024-.427-.049-.634-.061-.232-.012-.451-.024-.683-.024s-.451.012-.683.024a9.656,9.656,0,0,0-2.122.354,5.411,5.411,0,0,0-.585.183c-.244.085-.488.171-.72.268-.207.085-.4.183-.6.281s-.427.22-.634.342a10.347,10.347,0,0,0-1.33.927c-.146.11-.28.232-.415.354-.183.171-.366.341-.537.512-.073.073-.159.159-.232.244l.012.012c-1.281,1.415-5.079,4.958-1.5,13.222l2.256-2.232c-1.3-5.551.427-7.721,1.317-8.782.159-.2.342-.378.512-.561q.256-.238.512-.439c.024-.024.061-.049.085-.073a2.417,2.417,0,0,1,.427-.293,1.543,1.543,0,0,1,.342-.232.254.254,0,0,1,.073-.049,7.23,7.23,0,0,1,1.915-.793c.146-.037.293-.073.439-.1a6.621,6.621,0,0,1,1.464-.146,6.426,6.426,0,0,1,.683.037.7.7,0,0,1,.159.012,5.913,5.913,0,0,1,.671.11c.244.049.476.11.72.183a4,4,0,0,1,.7.256,4.659,4.659,0,0,1,.659.317,3.607,3.607,0,0,1,.622.366,8.247,8.247,0,0,1,1.122.927,3.4,3.4,0,0,1,.488.537,4.207,4.207,0,0,1,.415.537.257.257,0,0,1,.049.073c.085.122.159.244.232.366.037.061.061.11.1.171a.435.435,0,0,1,.049.11,2.844,2.844,0,0,1,.232.476,1.078,1.078,0,0,1,.1.207,5.9,5.9,0,0,1,.22.6v.024c.073.244.134.476.183.708a.045.045,0,0,1,.012.036,7.1,7.1,0,0,1,.11.708v.024a6.853,6.853,0,0,1,.037.707v.134a2.8,2.8,0,0,1-.024.451,1.354,1.354,0,0,1-.024.232,1.546,1.546,0,0,1-.037.342,5.054,5.054,0,0,1-.159.768c-.037.159-.085.317-.134.476-.037.11-.073.22-.122.329a3.376,3.376,0,0,1-.244.573.746.746,0,0,1-.085.171,2.876,2.876,0,0,1-.183.329c-.012.024-.012.049-.037.073l-.037.073c-.037.061-.085.134-.122.2a.514.514,0,0,1-.061.085,2.374,2.374,0,0,1-.207.281c-.061.1-.134.183-.207.281a2.468,2.468,0,0,1-.171.2,4.406,4.406,0,0,1-.54.549,2.472,2.472,0,0,1-.278.256c.037-.024.061-.049.1-.073a2.548,2.548,0,0,1-.341.293c.085-.073.158-.134.232-.207a4.88,4.88,0,0,1-.5.378,2.666,2.666,0,0,1-.22.171.431.431,0,0,1-.159.1,2.711,2.711,0,0,1-.256.146,2.092,2.092,0,0,1-.281.159c-.11.061-.22.122-.329.171-.037.024-.085.037-.122.061l-.11.037a4.129,4.129,0,0,1-.5.183,3.211,3.211,0,0,1-.671.183,6.208,6.208,0,0,1-.829.159,7.134,7.134,0,0,1-.89.049,7.485,7.485,0,0,1-3.037-.634,7.273,7.273,0,0,0-.732.4,7.482,7.482,0,0,0-1.329,1.147,3.855,3.855,0,0,0-.451.549A10.523,10.523,0,0,0,146,24.559a1.119,1.119,0,0,0,.207.012,6.387,6.387,0,0,0,.683-.024,1.86,1.86,0,0,0,.366-.037,2.835,2.835,0,0,0,.451-.049,6.576,6.576,0,0,0,.707-.122c.183-.037.366-.085.549-.134a4.748,4.748,0,0,0,.549-.171,5.806,5.806,0,0,0,.768-.281c.146-.061.293-.122.439-.2s.256-.122.39-.2c.207-.11.415-.22.61-.342a1.386,1.386,0,0,0,.281-.183,3.3,3.3,0,0,0,.415-.3c.061-.049.134-.1.2-.146a2.5,2.5,0,0,0,.22-.159,6.3,6.3,0,0,0,.793-.72.288.288,0,0,0,.11-.1c.22-.22.427-.439.622-.671a.268.268,0,0,0,.049-.061.477.477,0,0,1,.1-.122.513.513,0,0,0,.061-.085c.085-.11.159-.207.244-.329.037-.049.073-.11.11-.171a11.391,11.391,0,0,0,.793-1.342c.11-.232.22-.476.317-.72a1.017,1.017,0,0,0,.073-.171c.061-.171.122-.342.183-.525a.11.11,0,0,0,.012-.061,10.153,10.153,0,0,0,.476-2.793,3.643,3.643,0,0,0,.012-.366v-.012C156.786,13.618,156.762,13.264,156.737,12.911Z"
        transform="translate(26.155 -118.128) rotate(90)"
        fill="currentColor"
      />
    </g>
  </svg>
);
export const Support: FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 13.264 16.235"
  >
    <path
      id="headset-mic"
      d="M6.632.375a6.368,6.368,0,0,1,4.7,1.951,6.412,6.412,0,0,1,1.934,4.681V14.4a2.153,2.153,0,0,1-.639,1.554,2.108,2.108,0,0,1-1.572.656H6.632V15.124h5.147V14.4H8.843V8.492h2.936V7.007a4.962,4.962,0,0,0-1.5-3.644,4.964,4.964,0,0,0-3.644-1.5,4.96,4.96,0,0,0-3.644,1.5,4.963,4.963,0,0,0-1.5,3.644V8.492H4.421V14.4H2.211a2.108,2.108,0,0,1-1.572-.656A2.151,2.151,0,0,1,0,12.188V7.007a6.412,6.412,0,0,1,1.934-4.68A6.369,6.369,0,0,1,6.632.375Z"
      transform="translate(0 -0.375)"
      fill="currentColor"
    />
  </svg>
);

// export const Filter: FC<IconProps> = () => (
//   <Image
//     src={FilterIcon}
//     alt="Picture of the author"
//     width={18}
//     height={18}
//     objectFit="contain"
//     objectPosition="center"
//   />
// );

{
  /** For test only */
}
export const Cake: FC<IconProps> = (props) => (
  <CakeIcon color={props.color} className={`w-16 ${props.iconPosition}-5`} />
);
export const MusicNote: FC<IconProps> = (props) => (
  <MusicNoteIcon
    color={props.color}
    className={`w-16 ${props.iconPosition}-5`}
  />
);
export const Puzzle: FC<IconProps> = (props) => (
  <PuzzleIcon color={props.color} className={`w-16 ${props.iconPosition}-5`} />
);
export const User: FC<IconProps> = (props) => (
  <UserIcon color={props.color} className={`w-5 float-left`} />
);
export const ChevronRight: FC<IconProps> = (props) => (
  <ChevronRightIcon className={`w-5 absolute ${props.iconPosition}`} />
);

//Conversation Header

export const Leave: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15.426"
    height="23.053"
    viewBox="0 0 15.426 23.053"
  >
    <g
      id="Group_161"
      data-name="Group 161"
      transform="translate(-310.822 -51.311)"
    >
      <path
        id="directions-run"
        d="M9.362,3.514A1.76,1.76,0,0,1,8.1,3a1.66,1.66,0,0,1-.538-1.24A1.66,1.66,0,0,1,8.1.516,1.758,1.758,0,0,1,9.362,0,1.7,1.7,0,0,1,10.6.517a1.688,1.688,0,0,1,.517,1.24A1.693,1.693,0,0,1,10.6,3a1.693,1.693,0,0,1-1.24.517Zm-3.2,12.235L0,14.55l.372-1.777,4.3.868L6.076,6.49l-1.571.62v3.018H2.728V5.994L7.316,4.051a2.1,2.1,0,0,0,.351-.042,2.1,2.1,0,0,1,.351-.042,1.731,1.731,0,0,1,1.488.868l.909,1.405a4.04,4.04,0,0,0,1.55,1.53,4.372,4.372,0,0,0,2.212.579v1.777A6.122,6.122,0,0,1,9.341,7.936L8.8,10.581l1.86,1.736v6.614H8.886V13.64L7.067,11.9Z"
        transform="translate(312.071 55.433)"
        fill="#989898"
      />
      <g id="chat" transform="translate(310.822 51.311)">
        <path
          id="Path_157"
          data-name="Path 157"
          d="M6.661,9.385q.171.034.344.062a.125.125,0,0,0,.132-.175q-.064-.151-.118-.307l0,0a5.042,5.042,0,0,1-.253-1.118,3.131,3.131,0,0,0,.95-2.218A3.64,3.64,0,0,0,3.857,2.25,3.64,3.64,0,0,0,0,5.625,3.64,3.64,0,0,0,3.857,9a4.368,4.368,0,0,0,1.132-.148,6.592,6.592,0,0,0,1.672.533Z"
          transform="translate(0 -2.25)"
          fill="#989898"
          fill-rule="evenodd"
        />
      </g>
      <g id="x" transform="translate(313.164 53.359)">
        <path
          id="Path_158"
          data-name="Path 158"
          d="M9.05,9.051a.178.178,0,0,0,0,.252l2.488,2.488a.178.178,0,1,0,.252-.252L9.3,9.051a.178.178,0,0,0-.252,0Z"
          transform="translate(-8.998 -8.998)"
          fill="#fff"
          fill-rule="evenodd"
        />
        <path
          id="Path_159"
          data-name="Path 159"
          d="M11.791,9.051a.178.178,0,0,1,0,.252L9.3,11.791a.178.178,0,0,1-.252-.252l2.488-2.488a.178.178,0,0,1,.252,0Z"
          transform="translate(-8.998 -8.998)"
          fill="#fff"
          fill-rule="evenodd"
        />
      </g>
    </g>
  </svg>
);

export const MenuChat: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3.495"
    height="15.144"
    viewBox="0 0 3.495 15.144"
  >
    <g id="three-dots-vertical" transform="translate(-14.625 -3.375)">
      <path
        id="Path_439"
        data-name="Path 439"
        d="M18.12,16.772a1.747,1.747,0,1,1-1.747-1.747,1.747,1.747,0,0,1,1.747,1.747Zm0-5.825A1.747,1.747,0,1,1,16.372,9.2,1.747,1.747,0,0,1,18.12,10.947Zm0-5.825a1.747,1.747,0,1,1-1.747-1.747A1.747,1.747,0,0,1,18.12,5.122Z"
        transform="translate(0)"
        fill="#989898"
        fill-rule="evenodd"
      />
    </g>
  </svg>
);

//wall

export const LikeOutlinIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 25.312 25.329"
    className="mr-2"
  >
    <g
      id="Group_476"
      data-name="Group 476"
      transform="translate(-1086.413 -147.884)"
    >
      <path
        id="Path_2148"
        data-name="Path 2148"
        d="M1090.59,168.272c-.675-.664-1.26-.366-1.751-1.142a11.95,11.95,0,0,1-1.88-7.568,12.147,12.147,0,1,1,14.852,12.838,11.923,11.923,0,0,1-2.72.312q-5.605,0-11.21,0a.6.6,0,0,1-.37-.143c-.126-.115-.069-.3.1-.465l2.506-2.378C1090.272,169.577,1090.423,168.432,1090.59,168.272Zm-2.031,3.805h.258q5.088,0,10.175,0a12.114,12.114,0,0,0,2.513-.264A11.513,11.513,0,1,0,1087.6,161.6a11.261,11.261,0,0,0,2.237,5.834c.418.554.916,1.049,1.387,1.562.191.209.2.36,0,.558-.05.049-.1.1-.153.145Z"
        transform="translate(0 0)"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1"
      />
      <path
        id="Path_2149"
        data-name="Path 2149"
        d="M1282.494,242.545c.573.848.481,1.426-.33,2.186.469,1,.327,1.508-.622,2.175a1.559,1.559,0,0,1,.2.973,1.361,1.361,0,0,1-1.33,1.161q-3.12.01-6.24,0a1.119,1.119,0,0,1-.873-.456,1.761,1.761,0,0,1-.4-1.157c0-1.939-.01-3.878.007-5.817a2.683,2.683,0,0,1,.191-.947,2.008,2.008,0,0,1,.456-.551,3.3,3.3,0,0,0,.4-.377c.336-.513.66-1.034.958-1.569a1.354,1.354,0,0,0,.136-.59c.021-.524.019-1.049.013-1.573a1.1,1.1,0,0,1,1.5-1.012,1.448,1.448,0,0,1,.939.968,4.613,4.613,0,0,1,.246,2c-.05.527-.138,1.051-.224,1.574-.061.369.047.513.428.514,1.171,0,2.342,0,3.513,0a1.423,1.423,0,0,1,1.467,1.009A1.3,1.3,0,0,1,1282.494,242.545Zm-5.2,5.861c1.017,0,2.034,0,3.052,0a.732.732,0,0,0,.771-.694.8.8,0,0,0-.326-.683.348.348,0,0,1-.172-.374c.04-.167.165-.221.323-.253a1.683,1.683,0,0,0,.432-.15.708.708,0,0,0,.385-.853.763.763,0,0,0-.341-.491.32.32,0,0,1-.176-.334.347.347,0,0,1,.263-.275,2.156,2.156,0,0,0,.35-.154.666.666,0,0,0,.352-.725.732.732,0,0,0-.495-.627.319.319,0,0,1,.045-.616c.049-.012.1-.027.147-.044a.639.639,0,0,0,.454-.764.8.8,0,0,0-.862-.684c-1.209,0-2.418,0-3.627,0a.96.96,0,0,1-.986-1.17c.08-.479.168-.957.221-1.439a4.264,4.264,0,0,0-.2-1.892.847.847,0,0,0-.554-.592.467.467,0,0,0-.653.493c0,.48.021.961-.016,1.439a2.535,2.535,0,0,1-.216.941,16.529,16.529,0,0,1-.971,1.6,2,2,0,0,1-.514.508.994.994,0,0,0-.435.731,3.8,3.8,0,0,0-.025.459q0,2.754,0,5.508a2.8,2.8,0,0,0,.023.344.792.792,0,0,0,.886.787Z"
        transform="translate(-175.46 -82.09)"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1"
      />
      <path
        id="Path_2150"
        data-name="Path 2150"
        d="M1182.2,341.171q0,1.766,0,3.532a.852.852,0,0,1-.919.924q-1.219,0-2.438,0a.862.862,0,0,1-.927-.939q0-3.542,0-7.083a.866.866,0,0,1,.933-.935q1.209-.006,2.419,0a.859.859,0,0,1,.932.951Q1182.2,339.4,1182.2,341.171Zm-.634-.02q0-1.746,0-3.493c0-.3-.062-.361-.358-.361h-2.3c-.284,0-.356.071-.356.348q0,3.5,0,7c0,.283.067.35.352.351q1.152,0,2.3,0c.3,0,.361-.059.361-.356Q1181.563,342.9,1181.563,341.151Z"
        transform="translate(-86.339 -178.621)"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1"
      />
    </g>
  </svg>
);

export const MatchIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 34.215 21.402"
    className="mr-2"
  >
    <g
      id="Group_485"
      data-name="Group 485"
      transform="translate(11.481 -17.256)"
    >
      <path
        id="Path_368"
        data-name="Path 368"
        d="M151.578,159.058a10.773,10.773,0,0,1-1.237,1.141c-.179.151-.357.275-.55.412a7.368,7.368,0,0,1,1.072,3.849,7.554,7.554,0,1,1-14.022-3.89,5.117,5.117,0,0,1,.385-.564,3.256,3.256,0,0,1,.44-.536,6.213,6.213,0,0,1,1.265-1.141,3.652,3.652,0,0,1,.646-.412,7.384,7.384,0,0,1,.729-.385,7.54,7.54,0,0,1,3-.619,7.65,7.65,0,0,1,3.038.632,3.807,3.807,0,0,0,.729-.412,6.583,6.583,0,0,0,1.333-1.127,3.263,3.263,0,0,0,.44-.536,10.479,10.479,0,0,0-11.025-.028,5.336,5.336,0,0,0-.591.371c-.179.138-.357.261-.536.412a9.457,9.457,0,0,0-1.21,1.141c-.165.165-.316.357-.467.536a4.381,4.381,0,0,0-.412.577,10.394,10.394,0,0,0-1.87,5.98,10.571,10.571,0,1,0,19.314-5.939C151.894,158.7,151.743,158.879,151.578,159.058Z"
        transform="translate(163.551 -115.247) rotate(90)"
        fill="currentColor"
      />
      <path
        id="Path_369"
        data-name="Path 369"
        d="M156.737,12.911a12.629,12.629,0,0,0-.281-1.561,11.67,11.67,0,0,0-.5-1.476,2.246,2.246,0,0,0-.207-.463,6.162,6.162,0,0,0-.342-.622c-.11-.207-.244-.4-.366-.6-.073-.1-.134-.207-.207-.3a1.314,1.314,0,0,0-.22-.293,5.72,5.72,0,0,0-.427-.525c0-.012-.012-.024-.024-.037l-.012-.012c-.061-.073-.122-.134-.183-.207a.565.565,0,0,0-.085-.085c-.183-.2-.366-.378-.561-.561a10.93,10.93,0,0,0-1.2-.939c-.146-.1-.281-.183-.427-.268-.293-.183-.586-.342-.89-.5a10.7,10.7,0,0,0-3.269-.951c-.22-.024-.427-.049-.634-.061-.232-.012-.451-.024-.683-.024s-.451.012-.683.024a9.656,9.656,0,0,0-2.122.354,5.411,5.411,0,0,0-.585.183c-.244.085-.488.171-.72.268-.207.085-.4.183-.6.281s-.427.22-.634.342a10.347,10.347,0,0,0-1.33.927c-.146.11-.28.232-.415.354-.183.171-.366.341-.537.512-.073.073-.159.159-.232.244l.012.012c-1.281,1.415-5.079,4.958-1.5,13.222l2.256-2.232c-1.3-5.551.427-7.721,1.317-8.782.159-.2.342-.378.512-.561q.256-.238.512-.439c.024-.024.061-.049.085-.073a2.417,2.417,0,0,1,.427-.293,1.543,1.543,0,0,1,.342-.232.254.254,0,0,1,.073-.049,7.23,7.23,0,0,1,1.915-.793c.146-.037.293-.073.439-.1a6.621,6.621,0,0,1,1.464-.146,6.426,6.426,0,0,1,.683.037.7.7,0,0,1,.159.012,5.913,5.913,0,0,1,.671.11c.244.049.476.11.72.183a4,4,0,0,1,.7.256,4.659,4.659,0,0,1,.659.317,3.607,3.607,0,0,1,.622.366,8.247,8.247,0,0,1,1.122.927,3.4,3.4,0,0,1,.488.537,4.207,4.207,0,0,1,.415.537.257.257,0,0,1,.049.073c.085.122.159.244.232.366.037.061.061.11.1.171a.435.435,0,0,1,.049.11,2.844,2.844,0,0,1,.232.476,1.078,1.078,0,0,1,.1.207,5.9,5.9,0,0,1,.22.6v.024c.073.244.134.476.183.708a.045.045,0,0,1,.012.036,7.1,7.1,0,0,1,.11.708v.024a6.853,6.853,0,0,1,.037.707v.134a2.8,2.8,0,0,1-.024.451,1.354,1.354,0,0,1-.024.232,1.546,1.546,0,0,1-.037.342,5.054,5.054,0,0,1-.159.768c-.037.159-.085.317-.134.476-.037.11-.073.22-.122.329a3.376,3.376,0,0,1-.244.573.746.746,0,0,1-.085.171,2.876,2.876,0,0,1-.183.329c-.012.024-.012.049-.037.073l-.037.073c-.037.061-.085.134-.122.2a.514.514,0,0,1-.061.085,2.374,2.374,0,0,1-.207.281c-.061.1-.134.183-.207.281a2.468,2.468,0,0,1-.171.2,4.406,4.406,0,0,1-.54.549,2.472,2.472,0,0,1-.278.256c.037-.024.061-.049.1-.073a2.548,2.548,0,0,1-.341.293c.085-.073.158-.134.232-.207a4.88,4.88,0,0,1-.5.378,2.666,2.666,0,0,1-.22.171.431.431,0,0,1-.159.1,2.711,2.711,0,0,1-.256.146,2.092,2.092,0,0,1-.281.159c-.11.061-.22.122-.329.171-.037.024-.085.037-.122.061l-.11.037a4.129,4.129,0,0,1-.5.183,3.211,3.211,0,0,1-.671.183,6.208,6.208,0,0,1-.829.159,7.134,7.134,0,0,1-.89.049,7.485,7.485,0,0,1-3.037-.634,7.273,7.273,0,0,0-.732.4,7.482,7.482,0,0,0-1.329,1.147,3.855,3.855,0,0,0-.451.549A10.523,10.523,0,0,0,146,24.559a1.119,1.119,0,0,0,.207.012,6.387,6.387,0,0,0,.683-.024,1.86,1.86,0,0,0,.366-.037,2.835,2.835,0,0,0,.451-.049,6.576,6.576,0,0,0,.707-.122c.183-.037.366-.085.549-.134a4.748,4.748,0,0,0,.549-.171,5.806,5.806,0,0,0,.768-.281c.146-.061.293-.122.439-.2s.256-.122.39-.2c.207-.11.415-.22.61-.342a1.386,1.386,0,0,0,.281-.183,3.3,3.3,0,0,0,.415-.3c.061-.049.134-.1.2-.146a2.5,2.5,0,0,0,.22-.159,6.3,6.3,0,0,0,.793-.72.288.288,0,0,0,.11-.1c.22-.22.427-.439.622-.671a.268.268,0,0,0,.049-.061.477.477,0,0,1,.1-.122.513.513,0,0,0,.061-.085c.085-.11.159-.207.244-.329.037-.049.073-.11.11-.171a11.391,11.391,0,0,0,.793-1.342c.11-.232.22-.476.317-.72a1.017,1.017,0,0,0,.073-.171c.061-.171.122-.342.183-.525a.11.11,0,0,0,.012-.061,10.153,10.153,0,0,0,.476-2.793,3.643,3.643,0,0,0,.012-.366v-.012C156.786,13.618,156.762,13.264,156.737,12.911Z"
        transform="translate(26.155 -118.128) rotate(90)"
        fill="currentColor"
      />
    </g>
  </svg>
);
export const StarIconTap: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 20.752 19.863"
    className="mr-2"
  >
    <path
      id="Icon_awesome-star"
      data-name="Icon awesome-star"
      d="M10.7.69,8.171,5.826,2.5,6.652A1.242,1.242,0,0,0,1.818,8.77l4.1,4-.97,5.644a1.241,1.241,0,0,0,1.8,1.307l5.07-2.665,5.07,2.665a1.241,1.241,0,0,0,1.8-1.307l-.97-5.644,4.1-4a1.242,1.242,0,0,0-.687-2.118l-5.667-.826L12.931.69A1.242,1.242,0,0,0,10.7.69Z"
      transform="translate(-1.441 0.001)"
      fill="currentColor"
    />
  </svg>
);
//post
export const LikeIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22.203"
    height="21.054"
    viewBox="0 0 22.203 21.054"
  >
    <g
      id="Group_479"
      data-name="Group 479"
      transform="translate(-1177.563 -234.567)"
    >
      <path
        id="Path_2151"
        data-name="Path 2151"
        d="M1286.677,245.865c.822,1.217.691,2.047-.473,3.138.674,1.439.469,2.165-.893,3.123a2.24,2.24,0,0,1,.28,1.4,1.954,1.954,0,0,1-1.909,1.667q-4.479.015-8.959,0a1.606,1.606,0,0,1-1.253-.655,2.528,2.528,0,0,1-.569-1.661c0-2.784-.014-5.568.01-8.352a3.856,3.856,0,0,1,.275-1.36,2.885,2.885,0,0,1,.655-.792,4.745,4.745,0,0,0,.577-.541c.482-.736.947-1.485,1.376-2.253a1.942,1.942,0,0,0,.2-.847c.03-.752.028-1.506.019-2.259a1.574,1.574,0,0,1,2.156-1.453,2.08,2.08,0,0,1,1.348,1.39,6.626,6.626,0,0,1,.353,2.876c-.072.757-.2,1.509-.322,2.26-.088.53.068.737.614.737,1.682,0,3.363,0,5.045,0a2.044,2.044,0,0,1,2.106,1.448A1.863,1.863,0,0,1,1286.677,245.865Zm-7.464,8.415c1.46,0,2.921,0,4.381,0a1.052,1.052,0,0,0,1.108-1,1.145,1.145,0,0,0-.468-.98.5.5,0,0,1-.247-.537c.057-.239.237-.317.464-.363a2.414,2.414,0,0,0,.62-.216,1.017,1.017,0,0,0,.553-1.224,1.1,1.1,0,0,0-.49-.705.459.459,0,0,1-.253-.48.5.5,0,0,1,.378-.394,3.1,3.1,0,0,0,.5-.221.956.956,0,0,0,.505-1.041,1.051,1.051,0,0,0-.71-.9.458.458,0,0,1,.065-.884c.071-.018.142-.038.211-.063a.917.917,0,0,0,.652-1.1,1.152,1.152,0,0,0-1.237-.982c-1.736,0-3.472,0-5.208,0a1.378,1.378,0,0,1-1.416-1.68c.115-.687.242-1.374.317-2.067a6.123,6.123,0,0,0-.282-2.717,1.216,1.216,0,0,0-.8-.849.671.671,0,0,0-.938.708c0,.689.03,1.38-.022,2.065a3.634,3.634,0,0,1-.31,1.351,23.766,23.766,0,0,1-1.394,2.3,2.875,2.875,0,0,1-.738.73,1.428,1.428,0,0,0-.624,1.05,5.459,5.459,0,0,0-.036.66q0,3.954,0,7.909a4.007,4.007,0,0,0,.033.494,1.138,1.138,0,0,0,1.273,1.131Z"
        transform="translate(-88.001 0)"
        stroke="currentColor"
        stroke-width="0.7"
      />
      <path
        id="Path_2152"
        data-name="Path 2152"
        d="M1184.065,343.135q0,2.536,0,5.071a1.223,1.223,0,0,1-1.319,1.326q-1.75.006-3.5,0a1.238,1.238,0,0,1-1.332-1.349q0-5.085,0-10.17a1.243,1.243,0,0,1,1.34-1.343q1.736-.008,3.473,0a1.233,1.233,0,0,1,1.339,1.365Q1184.065,340.585,1184.065,343.135Zm-.911-.029q0-2.507,0-5.015c0-.427-.089-.518-.513-.519q-1.653,0-3.307,0c-.408,0-.511.1-.511.5q0,5.029,0,10.057c0,.406.1.5.506.5q1.653,0,3.307,0c.435,0,.519-.084.519-.512Q1183.155,345.613,1183.154,343.105Z"
        transform="translate(0 -94.262)"
        stroke="currentColor"
        stroke-width="0.7"
      />
    </g>
  </svg>
);
export const UnlockIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.752"
    height="19.863"
    viewBox="0 0 22.625 23"
  >
    <defs>
      <linearGradient
        id="linear-gradient1"
        x1="0.893"
        y1="0.226"
        x2="-0.237"
        y2="1.283"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#e19abf" />
        <stop offset="1" stop-color="#536fa6" />
      </linearGradient>
    </defs>
    <g
      id="Groupe_541"
      data-name="Groupe 541"
      transform="translate(569.62 8.439)"
      fill="url(#linear-gradient1)"
    >
      <path
        id="Tracé_2175"
        data-name="Tracé 2175"
        d="M-199.437,4.245c.034-.037.06-.067.087-.094.4-.4.805-.793,1.2-1.194a.227.227,0,0,1,.243-.066,4.762,4.762,0,0,0,5.722-3.95A4.837,4.837,0,0,0-196.04-6.59a4.747,4.747,0,0,0-5.472,3.682A4.8,4.8,0,0,0-201.228.12a.142.142,0,0,1-.035.192c-.388.373-.772.751-1.157,1.128-.021.021-.045.04-.068.06a6.69,6.69,0,0,1,1.231-8.221,6.433,6.433,0,0,1,8.525-.2,6.683,6.683,0,0,1,1.31,8.682A6.428,6.428,0,0,1-199.437,4.245Z"
        transform="translate(-356.623 0)"
      />
      <path
        id="Tracé_2176"
        data-name="Tracé 2176"
        d="M-557.157,361.427a6.645,6.645,0,0,1-1.95,7.817,6.418,6.418,0,0,1-8.718-.648,6.678,6.678,0,0,1-.191-8.9,6.4,6.4,0,0,1,8.157-1.374c-.033.036-.064.071-.1.1-.372.364-.747.726-1.115,1.094a.185.185,0,0,1-.238.047,4.722,4.722,0,0,0-6.183,2.579,4.852,4.852,0,0,0,3.465,6.639,4.772,4.772,0,0,0,5.593-3.895,5.149,5.149,0,0,0-.063-2.027.188.188,0,0,1,.032-.15c.423-.426.851-.847,1.277-1.269A.157.157,0,0,1-557.157,361.427Z"
        transform="translate(0 -356.091)"
      />
      <path
        id="Tracé_2177"
        data-name="Tracé 2177"
        d="M19.37,593.371a.421.421,0,0,1-.691.293l-.988-.772q-.754-.589-1.508-1.179a.429.429,0,0,1-.148-.51.41.41,0,0,1,.429-.262.5.5,0,0,1,.226.093q1.257.974,2.507,1.956A.442.442,0,0,1,19.37,593.371Z"
        transform="translate(-570.242 -583.362)"
      />
      <path
        id="Tracé_2178"
        data-name="Tracé 2178"
        d="M-434.356,151.894a1.326,1.326,0,0,1-.254-.123q-1.257-.974-2.507-1.957a.427.427,0,0,1-.081-.6.41.41,0,0,1,.6-.07q1.256.976,2.506,1.958a.422.422,0,0,1,.151.486A.475.475,0,0,1-434.356,151.894Z"
        transform="translate(-128.855 -153.275)"
      />
      <path
        id="Tracé_2179"
        data-name="Tracé 2179"
        d="M52.665,535.746l.632.136c.466.1.932.2,1.4.3a.426.426,0,0,1,.358.4.413.413,0,0,1-.3.429.57.57,0,0,1-.245,0c-.642-.134-1.283-.274-1.924-.412a.43.43,0,0,1,.086-.856Z"
        transform="translate(-605.48 -529.646)"
      />
      <path
        id="Tracé_2180"
        data-name="Tracé 2180"
        d="M-451.772,263.311l-.816-.173-1.192-.259a.436.436,0,0,1-.369-.52.424.424,0,0,1,.535-.318q.968.208,1.937.417a.429.429,0,0,1,.364.533A.428.428,0,0,1-451.772,263.311Z"
        transform="translate(-112.428 -263.24)"
      />
      <path
        id="Tracé_2181"
        data-name="Tracé 2181"
        d="M-344.932,103.728a.381.381,0,0,1,.313.195c.366.6.733,1.19,1.094,1.789a.425.425,0,0,1-.132.585.412.412,0,0,1-.584-.14c-.365-.591-.729-1.182-1.085-1.779A.428.428,0,0,1-344.932,103.728Z"
        transform="translate(-218.338 -109.17)"
      />
      <path
        id="Tracé_2182"
        data-name="Tracé 2182"
        d="M-19.058,645.6a.466.466,0,0,1-.318.417.411.411,0,0,1-.477-.189c-.217-.349-.43-.7-.645-1.052-.141-.23-.283-.46-.422-.691a.434.434,0,0,1,.121-.627.419.419,0,0,1,.595.178q.524.854,1.043,1.711A1.688,1.688,0,0,1-19.058,645.6Z"
        transform="translate(-534.208 -634.42)"
      />
    </g>
  </svg>
);
export const UnlockIconO: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.752"
    height="19.863"
    viewBox="0 0 22.625 23"
  >
    <g
      id="Groupe_541"
      data-name="Groupe 541"
      transform="translate(569.62 8.439)"
      fill="currentColor"
    >
      <path
        id="Tracé_2175"
        data-name="Tracé 2175"
        d="M-199.437,4.245c.034-.037.06-.067.087-.094.4-.4.805-.793,1.2-1.194a.227.227,0,0,1,.243-.066,4.762,4.762,0,0,0,5.722-3.95A4.837,4.837,0,0,0-196.04-6.59a4.747,4.747,0,0,0-5.472,3.682A4.8,4.8,0,0,0-201.228.12a.142.142,0,0,1-.035.192c-.388.373-.772.751-1.157,1.128-.021.021-.045.04-.068.06a6.69,6.69,0,0,1,1.231-8.221,6.433,6.433,0,0,1,8.525-.2,6.683,6.683,0,0,1,1.31,8.682A6.428,6.428,0,0,1-199.437,4.245Z"
        transform="translate(-356.623 0)"
      />
      <path
        id="Tracé_2176"
        data-name="Tracé 2176"
        d="M-557.157,361.427a6.645,6.645,0,0,1-1.95,7.817,6.418,6.418,0,0,1-8.718-.648,6.678,6.678,0,0,1-.191-8.9,6.4,6.4,0,0,1,8.157-1.374c-.033.036-.064.071-.1.1-.372.364-.747.726-1.115,1.094a.185.185,0,0,1-.238.047,4.722,4.722,0,0,0-6.183,2.579,4.852,4.852,0,0,0,3.465,6.639,4.772,4.772,0,0,0,5.593-3.895,5.149,5.149,0,0,0-.063-2.027.188.188,0,0,1,.032-.15c.423-.426.851-.847,1.277-1.269A.157.157,0,0,1-557.157,361.427Z"
        transform="translate(0 -356.091)"
      />
      <path
        id="Tracé_2177"
        data-name="Tracé 2177"
        d="M19.37,593.371a.421.421,0,0,1-.691.293l-.988-.772q-.754-.589-1.508-1.179a.429.429,0,0,1-.148-.51.41.41,0,0,1,.429-.262.5.5,0,0,1,.226.093q1.257.974,2.507,1.956A.442.442,0,0,1,19.37,593.371Z"
        transform="translate(-570.242 -583.362)"
      />
      <path
        id="Tracé_2178"
        data-name="Tracé 2178"
        d="M-434.356,151.894a1.326,1.326,0,0,1-.254-.123q-1.257-.974-2.507-1.957a.427.427,0,0,1-.081-.6.41.41,0,0,1,.6-.07q1.256.976,2.506,1.958a.422.422,0,0,1,.151.486A.475.475,0,0,1-434.356,151.894Z"
        transform="translate(-128.855 -153.275)"
      />
      <path
        id="Tracé_2179"
        data-name="Tracé 2179"
        d="M52.665,535.746l.632.136c.466.1.932.2,1.4.3a.426.426,0,0,1,.358.4.413.413,0,0,1-.3.429.57.57,0,0,1-.245,0c-.642-.134-1.283-.274-1.924-.412a.43.43,0,0,1,.086-.856Z"
        transform="translate(-605.48 -529.646)"
      />
      <path
        id="Tracé_2180"
        data-name="Tracé 2180"
        d="M-451.772,263.311l-.816-.173-1.192-.259a.436.436,0,0,1-.369-.52.424.424,0,0,1,.535-.318q.968.208,1.937.417a.429.429,0,0,1,.364.533A.428.428,0,0,1-451.772,263.311Z"
        transform="translate(-112.428 -263.24)"
      />
      <path
        id="Tracé_2181"
        data-name="Tracé 2181"
        d="M-344.932,103.728a.381.381,0,0,1,.313.195c.366.6.733,1.19,1.094,1.789a.425.425,0,0,1-.132.585.412.412,0,0,1-.584-.14c-.365-.591-.729-1.182-1.085-1.779A.428.428,0,0,1-344.932,103.728Z"
        transform="translate(-218.338 -109.17)"
      />
      <path
        id="Tracé_2182"
        data-name="Tracé 2182"
        d="M-19.058,645.6a.466.466,0,0,1-.318.417.411.411,0,0,1-.477-.189c-.217-.349-.43-.7-.645-1.052-.141-.23-.283-.46-.422-.691a.434.434,0,0,1,.121-.627.419.419,0,0,1,.595.178q.524.854,1.043,1.711A1.688,1.688,0,0,1-19.058,645.6Z"
        transform="translate(-534.208 -634.42)"
      />
    </g>
  </svg>
);
export const ChatIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="1.16"
        y1="0.5"
        x2="0"
        y2="0.5"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#536fa6" />
        <stop offset="1" stop-color="#e19abf" />
      </linearGradient>
    </defs>
    <path
      id="message-circle"
      d="M21,11.5a8.38,8.38,0,0,1-.9,3.8A8.5,8.5,0,0,1,12.5,20a8.38,8.38,0,0,1-3.8-.9L3,21l1.9-5.7A8.38,8.38,0,0,1,4,11.5,8.5,8.5,0,0,1,8.7,3.9,8.38,8.38,0,0,1,12.5,3H13a8.48,8.48,0,0,1,8,8Z"
      transform="translate(-2 -2)"
      fill="url(#linear-gradient)"
      stroke="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
);
export const ChatIconO: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <path
      id="message-circle"
      d="M21,11.5a8.38,8.38,0,0,1-.9,3.8A8.5,8.5,0,0,1,12.5,20a8.38,8.38,0,0,1-3.8-.9L3,21l1.9-5.7A8.38,8.38,0,0,1,4,11.5,8.5,8.5,0,0,1,8.7,3.9,8.38,8.38,0,0,1,12.5,3H13a8.48,8.48,0,0,1,8,8Z"
      transform="translate(-2 -2)"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
);
export const StarIconO: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.752"
    height="19.863"
    viewBox="0 0 20.752 19.863"
  >
    <path
      id="Icon_awesome-star"
      data-name="Icon awesome-star"
      d="M10.7.69,8.171,5.826,2.5,6.652A1.242,1.242,0,0,0,1.818,8.77l4.1,4-.97,5.644a1.241,1.241,0,0,0,1.8,1.307l5.07-2.665,5.07,2.665a1.241,1.241,0,0,0,1.8-1.307l-.97-5.644,4.1-4a1.242,1.242,0,0,0-.687-2.118l-5.667-.826L12.931.69A1.242,1.242,0,0,0,10.7.69Z"
      transform="translate(-1.441 0.001)"
      fill="#777"
      opacity="0.51"
    />
  </svg>
);

export const StarIconHover: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.752"
    height="19.863"
    viewBox="0 0 20.752 19.863"
  >
    <path
      id="Icon_awesome-star"
      data-name="Icon awesome-star"
      d="M10.7.69,8.171,5.826,2.5,6.652A1.242,1.242,0,0,0,1.818,8.77l4.1,4-.97,5.644a1.241,1.241,0,0,0,1.8,1.307l5.07-2.665,5.07,2.665a1.241,1.241,0,0,0,1.8-1.307l-.97-5.644,4.1-4a1.242,1.242,0,0,0-.687-2.118l-5.667-.826L12.931.69A1.242,1.242,0,0,0,10.7.69Z"
      transform="translate(-1.441 0.001)"
      fill="#3d2f5b"
    />
  </svg>
);

export const KeyIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23.316 23.316"
    className="mr-2 w-4 h-4"
  >
    <path
      id="Icon_ionic-md-key"
      data-name="Icon ionic-md-key"
      d="M14.007,14.492a5.793,5.793,0,0,0-5.295-3.8,5.378,5.378,0,0,0-5.337,5.5,5.467,5.467,0,0,0,5.443,5.5,5.649,5.649,0,0,0,5.189-3.8h5.432v3.382H23.09V17.874h2.267V14.492ZM8.849,18.006a1.823,1.823,0,1,1,1.823-1.823A1.827,1.827,0,0,1,8.849,18.006Z"
      transform="translate(12.943 -9.944) rotate(45)"
      fill="currentColor"
    />
  </svg>
);
export const DoubleCheckIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className=" w-3 h-3"
    viewBox="0 0 12.32 7.096"
  >
    <path
      id="Icon_material-done"
      data-name="Icon material-done"
      d="M8.065,14.013,5.841,11.789,5.1,12.53,8.065,15.5,14.42,9.141,13.679,8.4Z"
      transform="translate(-2.1 -8.4)"
      fill="currentColor"
    />
    <path
      id="Icon_material-done-2"
      data-name="Icon material-done"
      d="M8.065,14.013,5.841,11.789,5.1,12.53,8.065,15.5,14.42,9.141,13.679,8.4Z"
      transform="translate(-5.1 -8.4)"
      fill="currentColor"
    />
  </svg>
);

//othmane

export const AttachementIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.49"
    height="21.977"
    viewBox="0 0 20.49 21.977"
  >
    <path
      id="attachment-alt"
      d="M8.694,4.583h1.371V15.076a4.873,4.873,0,0,1-1.477,3.576,4.843,4.843,0,0,1-3.555,1.477,4.849,4.849,0,0,1-3.555-1.477A4.872,4.872,0,0,1,0,15.076V3.683A3.555,3.555,0,0,1,1.071,1.071,3.529,3.529,0,0,1,3.662,0,3.531,3.531,0,0,1,6.253,1.071,3.552,3.552,0,0,1,7.324,3.683v9.594a2.155,2.155,0,0,1-.685,1.606,2.257,2.257,0,0,1-1.627.664A2.192,2.192,0,0,1,3.4,14.883a2.184,2.184,0,0,1-.664-1.606V4.583H4.112v8.694a.859.859,0,0,0,.278.621.881.881,0,0,0,1.285,0,.862.862,0,0,0,.279-.621V3.683a2.223,2.223,0,0,0-.685-1.627A2.223,2.223,0,0,0,3.64,1.37a2.153,2.153,0,0,0-1.606.685A2.262,2.262,0,0,0,1.37,3.683V15.076a3.656,3.656,0,0,0,3.662,3.683,3.656,3.656,0,0,0,3.662-3.683V4.583Z"
      transform="matrix(0.777, 0.629, -0.629, 0.777, 12.668, 0)"
      fill="currentColor"
    />
  </svg>
);

export const MicIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14.085"
    height="19.078"
    viewBox="0 0 14.085 19.078"
  >
    <path
      id="mic"
      d="M7.042,12.324A2.925,2.925,0,0,1,4.9,11.429,2.9,2.9,0,0,1,4,9.309V3.28A2.876,2.876,0,0,1,4.9,1.136,2.961,2.961,0,0,1,7.042.265a2.888,2.888,0,0,1,2.12.871,2.912,2.912,0,0,1,.871,2.143V9.309a2.937,2.937,0,0,1-.871,2.12A2.845,2.845,0,0,1,7.042,12.324Zm5.3-3.015h1.743a6.345,6.345,0,0,1-1.767,4.451,7.119,7.119,0,0,1-4.263,2.285v3.3H6.029v-3.3a7.067,7.067,0,0,1-4.263-2.308A6.372,6.372,0,0,1,0,9.309H1.7a4.709,4.709,0,0,0,1.6,3.627A5.383,5.383,0,0,0,7.042,14.4a5.3,5.3,0,0,0,3.722-1.46A4.741,4.741,0,0,0,12.342,9.309Z"
      transform="translate(0 -0.265)"
      fill="#989898"
    />
  </svg>
);

export const ImojiIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24.068"
    height="24.068"
    viewBox="0 0 24.068 24.068"
  >
    <g id="emoji-smile" transform="translate(0 0)">
      <path
        id="Path_153"
        data-name="Path 153"
        d="M12.034,22.564A10.53,10.53,0,1,0,1.5,12.034,10.53,10.53,0,0,0,12.034,22.564Zm0,1.5A12.034,12.034,0,1,0,0,12.034,12.034,12.034,0,0,0,12.034,24.068Z"
        transform="translate(0 0)"
        fill="#989898"
        fillRule="evenodd"
      />
      <path
        id="Path_154"
        data-name="Path 154"
        d="M9.454,21.476a.752.752,0,0,1,1.028.275,5.267,5.267,0,0,0,9.122,0,.752.752,0,1,1,1.3.752,6.771,6.771,0,0,1-11.727,0,.752.752,0,0,1,.275-1.028Z"
        transform="translate(-3.009 -7.085)"
        fill="#989898"
        fillRule="evenodd"
      />
      <path
        id="Path_155"
        data-name="Path 155"
        d="M14.259,13.506c0,1.246-.674,2.256-1.5,2.256s-1.5-1.011-1.5-2.256.674-2.256,1.5-2.256S14.259,12.261,14.259,13.506Zm6.017,0c0,1.246-.674,2.256-1.5,2.256s-1.5-1.011-1.5-2.256.674-2.256,1.5-2.256S20.276,12.261,20.276,13.506Z"
        transform="translate(-3.729 -3.729)"
        fill="#989898"
      />
    </g>
  </svg>
);

export const SendIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
  >
    <g
      id="Group_187"
      data-name="Group 187"
      transform="translate(-245.068 -474.068)"
    >
      <circle
        id="Ellipse_308"
        data-name="Ellipse 308"
        cx="13"
        cy="13"
        r="13"
        transform="translate(245.068 474.068)"
        fill="#f5f5f5"
      />
      <path
        id="paper-plane"
        d="M7.984,6.684,0,5.88V.8A.8.8,0,0,1,1.153.084l11.761,5.88a.8.8,0,0,1,0,1.424L1.154,13.269A.8.8,0,0,1,0,12.557V7.474l7.983-.789Z"
        transform="translate(249.585 485.577) rotate(-45)"
        fill="#a0b3d9"
      />
    </g>
  </svg>
);

export const BitmojiIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11.9"
    height="11.9"
    viewBox="0 0 11.9 11.9"
  >
    <g
      id="Group_158"
      data-name="Group 158"
      transform="translate(-324.43 -328.687)"
    >
      <g id="sticky-fill" transform="translate(324.43 328.687)">
        <path
          id="Path_442"
          data-name="Path 442"
          d="M3.525,2.25A1.275,1.275,0,0,0,2.25,3.525v9.35A1.275,1.275,0,0,0,3.525,14.15H8.7a1.275,1.275,0,0,0,.9-.374L13.777,9.6a1.275,1.275,0,0,0,.373-.9V3.525A1.275,1.275,0,0,0,12.875,2.25Zm5.1,7.225v3.737a.213.213,0,0,0,.363.15l4.374-4.374a.213.213,0,0,0-.15-.363H9.475a.85.85,0,0,0-.85.85Z"
          transform="translate(-2.25 -2.25)"
          fill="#fff"
          fill-rule="evenodd"
        />
      </g>
      <path
        id="Path_443"
        data-name="Path 443"
        d="M1663,4868.285s1.257,1.813,4.908,1.731"
        transform="translate(-1588.549 -4438.164) rotate(-3)"
        fill="none"
        stroke="#4f54af"
        stroke-linecap="round"
        stroke-width="0.7"
      />
      <path
        id="star"
        d="M5.391,5.9l-.55.288.105-.611L4.5,5.145l.615-.089L5.391,4.5l.275.555.615.089-.445.432.105.611Z"
        transform="translate(321.792 327.156)"
        fill="#4f54af"
      />
      <path
        id="star-2"
        data-name="star"
        d="M5.391,5.9l-.55.288.105-.611L4.5,5.145l.615-.089L5.391,4.5l.275.555.615.089-.445.432.105.611Z"
        transform="translate(327.927 327.156)"
        fill="#4f54af"
      />
    </g>
  </svg>
);

export const GalleryIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="10"
    viewBox="0 0 14 10"
  >
    <g id="Group_159" data-name="Group 159" transform="translate(-322 -444)">
      <rect
        id="Rectangle_610"
        data-name="Rectangle 610"
        width="14"
        height="10"
        rx="1"
        transform="translate(322 444)"
        fill="#fff"
      />
      <path
        id="picture"
        d="M7,11.322A1.319,1.319,0,1,0,5.684,10,1.319,1.319,0,0,0,7,11.322Zm-.44,2.638L8.322,12.2l1.759,1.759L13.6,10.443l2.638,2.638v2.638H6.563Z"
        transform="translate(317.649 436.653)"
        fill="#ae48cb"
      />
    </g>
  </svg>
);
export const FileIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9.934"
    height="11.589"
    viewBox="0 0 9.934 11.589"
  >
    <path
      id="file"
      d="M6.622,3.311V.259A1.353,1.353,0,0,1,6.855.44L9.493,3.079a1.375,1.375,0,0,1,.181.233H6.622Zm-.828.207a.619.619,0,0,0,.621.621H9.934v6.829a.619.619,0,0,1-.621.621H.621a.6.6,0,0,1-.44-.181A.6.6,0,0,1,0,10.968V.621A.6.6,0,0,1,.181.181.6.6,0,0,1,.621,0H5.795Z"
      fill="#fff"
    />
  </svg>
);

export const BirthdayIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10.245"
    height="11.894"
    viewBox="0 0 12.245 13.894"
  >
    <path
      id="Icon_awesome-birthday-cake"
      data-name="Icon awesome-birthday-cake"
      d="M11.545,9.9c-.722,0-.806-.825-1.92-.825S8.419,9.9,7.7,9.9s-.811-.825-1.926-.825S4.556,9.9,3.853,9.9c-.725,0-.8-.825-1.926-.825S.724,9.9,0,9.9V7.834A1.237,1.237,0,0,1,1.237,6.6h.412V2.886H3.3V6.6H4.948V2.886H6.6V6.6H8.247V2.886H9.9V6.6h.412a1.237,1.237,0,0,1,1.237,1.237Zm0,3.3H0V10.721c1.117,0,1.205-.825,1.926-.825s.805.825,1.926.825c1.1,0,1.217-.825,1.92-.825.725,0,.8.825,1.926.825S8.9,9.9,9.625,9.9s.805.825,1.92.825ZM2.474,2.474a.822.822,0,0,1-.825-.825c0-.8.825-.593.825-1.649C2.783,0,3.3.76,3.3,1.443S2.931,2.474,2.474,2.474Zm3.3,0a.822.822,0,0,1-.825-.825c0-.8.825-.593.825-1.649C6.082,0,6.6.76,6.6,1.443S6.23,2.474,5.773,2.474Zm3.3,0a.822.822,0,0,1-.825-.825c0-.8.825-.593.825-1.649C9.38,0,9.9.76,9.9,1.443S9.529,2.474,9.071,2.474Z"
      transform="translate(0.35 0.35)"
      fill="none"
      stroke="#fff"
      strokeWidth="0.7"
    />
  </svg>
);
export const DislikeIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="82"
    height="82"
    viewBox="0 0 82 82"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="0.203"
        y1="0.061"
        x2="0.785"
        y2="0.94"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stopColor="#ee6161" />
        <stop offset="1" stopColor="#940202" />
      </linearGradient>
      <filter
        id="Ellipse_50"
        x="0"
        y="0"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
      >
        <feOffset
          dy="3" //@ts-ignore
          input="SourceAlpha"
        />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodColor="#ff1919" floodOpacity="0.612" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Group_485" data-name="Group 485" transform="translate(-31 -652)">
      <g transform="matrix(1, 0, 0, 1, 31, 652)" filter="url(#Ellipse_50)">
        <circle
          id="Ellipse_50-2"
          data-name="Ellipse 50"
          cx="32"
          cy="32"
          r="32"
          transform="translate(9 6)"
          fill="url(#linear-gradient)"
        />
      </g>
      <g id="x" transform="translate(60.586 679.588)">
        <path
          id="Path_99"
          data-name="Path 99"
          d="M31.354,9.417a1.423,1.423,0,0,1,0,2.015L11.431,31.355A1.425,1.425,0,0,1,9.415,29.34L29.339,9.417a1.423,1.423,0,0,1,2.015,0Z"
          transform="translate(-8.998 -8.998)"
          fill="#fff"
          fillRule="evenodd"
        />
        <path
          id="Path_100"
          data-name="Path 100"
          d="M9.417,9.417a1.423,1.423,0,0,0,0,2.015L29.34,31.355a1.425,1.425,0,0,0,2.015-2.015L11.432,9.417a1.423,1.423,0,0,0-2.015,0Z"
          transform="translate(-8.998 -8.998)"
          fill="#fff"
          fillRule="evenodd"
        />
      </g>
    </g>
  </svg>
);

export const EducationIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13.171"
    height="7.629"
    viewBox="0 0 13.171 7.629"
  >
    <g id="Group_147" data-name="Group 147" transform="translate(0 0)">
      <path
        id="Path_386"
        data-name="Path 386"
        d="M61.691,90.17a.578.578,0,0,0-.44-.015c-.167.04-.2.128-.278.248l-1.392-.5c.066-.028.1-.046.141-.061q3.17-1.22,6.341-2.438a.314.314,0,0,1,.206,0q3.19,1.221,6.378,2.449c.028.011.054.024.106.047-.054.023-.09.039-.126.053-2.09.8-4.232,1.434-6.369,2.085a.268.268,0,0,1-.147.006Q64.1,91.425,62.09,90.8c-.048-.015-.095-.035-.169-.063l.57-.188c.125-.041.126-.041.164-.193-.294.066-.582.129-.868.2-.022.005-.043.058-.045.09-.055.952-.106,1.9-.163,2.856a.187.187,0,0,1-.087.134,1.225,1.225,0,0,1-1.1-.013.149.149,0,0,1-.066-.119,7,7,0,0,1,.094-.88,12.034,12.034,0,0,1,.7-2.027.526.526,0,0,1,.477-.4A.639.639,0,0,0,61.691,90.17Z"
        transform="translate(-59.581 -87.387)"
        fill="#fff"
      />
      <path
        id="Path_387"
        data-name="Path 387"
        d="M137.888,203.238c.1.029.186.052.271.078,1.184.365,2.367.731,3.552,1.091a.448.448,0,0,0,.246,0q1.839-.559,3.676-1.128c.04-.012.08-.021.134-.036v.451c0,.464-.015.928,0,1.391a1.138,1.138,0,0,1-.524,1.014,3.979,3.979,0,0,1-1.5.64,8.472,8.472,0,0,1-3.829,0,4.04,4.04,0,0,1-1.484-.625,1.171,1.171,0,0,1-.547-1.055c.021-.553,0-1.108,0-1.662Z"
        transform="translate(-135.237 -199.326)"
        fill="#fff"
      />
    </g>
  </svg>
);

export const HeightIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16.924"
    height="18.154"
    viewBox="0 0 16.924 18.154"
  >
    <path
      id="Icon_awesome-ruler"
      data-name="Icon awesome-ruler"
      d="M13.718,4.39,12,1.465a.7.7,0,0,0-.939-.248l-1.489.844,1.289,2.2a.168.168,0,0,1-.063.231l-.3.168a.173.173,0,0,1-.235-.063L8.976,2.4l-1.191.676.6,1.023a.168.168,0,0,1-.063.231l-.3.168a.173.173,0,0,1-.235-.063l-.6-1.021L6,4.09l1.291,2.2a.168.168,0,0,1-.063.231l-.3.168a.173.173,0,0,1-.235-.063L5.4,4.426,4.213,5.1l.6,1.023a.168.168,0,0,1-.063.231l-.3.168a.173.173,0,0,1-.235-.063l-.6-1.025-1.191.676,1.289,2.2a.168.168,0,0,1-.063.231l-.3.168a.173.173,0,0,1-.235-.063L1.83,6.455.34,7.3a.671.671,0,0,0-.253.924L1.806,11.15a.7.7,0,0,0,.939.248L13.468,5.313A.67.67,0,0,0,13.718,4.39Z"
      transform="translate(-0.452 11.902) rotate(-60)"
      fill="none"
      stroke="#fff"
      stroke-width="0.7"
    />
  </svg>
);

export const LocationIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8.7"
    height="12.261"
    viewBox="0 0 8.7 12.261"
  >
    <g
      id="Group_485"
      data-name="Group 485"
      transform="translate(-44.65 -621.579)"
    >
      <path
        id="Icon_material-add-location"
        data-name="Icon material-add-location"
        d="M11.5,3a3.992,3.992,0,0,0-4,3.975c0,2.981,4,7.382,4,7.382l2.85-3.939A11.646,11.646,0,0,0,15.5,6.975,3.992,3.992,0,0,0,11.5,3Z"
        transform="translate(37.5 618.929)"
        fill="none"
        stroke="#fff"
        strokeWidth="0.7"
      />
      <ellipse
        id="Ellipse_304"
        data-name="Ellipse 304"
        cx="1.744"
        cy="1.744"
        rx="1.744"
        ry="1.744"
        transform="translate(47.428 623.866)"
        fill="#fff"
      />
    </g>
  </svg>
);

export const ParameterIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="18"
    viewBox="0 0 27 18"
  >
    <path
      id="Icon_ionic-md-menu"
      data-name="Icon ionic-md-menu"
      d="M4.5,27h27V24H4.5Zm0-7.5h27v-3H4.5ZM4.5,9v3h27V9Z"
      transform="translate(-4.5 -9)"
      fill="#fff"
    />
  </svg>
);

export const MetierIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10.921"
    height="8.873"
    viewBox="0 0 10.921 8.873"
  >
    <g id="briefcase-fill" transform="translate(0)">
      <path
        id="Path_384"
        data-name="Path 384"
        d="M0,19.269a1.024,1.024,0,0,0,1.024,1.024H9.9a1.024,1.024,0,0,0,1.024-1.024V15.412L5.549,16.844a.341.341,0,0,1-.176,0L0,15.412Z"
        transform="translate(0 -11.419)"
        fill="#fff"
        fillRule="evenodd"
      />
      <path
        id="Path_385"
        data-name="Path 385"
        d="M0,4.639A1.024,1.024,0,0,1,1.024,3.615H9.9a1.024,1.024,0,0,1,1.024,1.024v.945l-5.2,1.385a1.024,1.024,0,0,1-.527,0L0,5.584ZM3.413,3.274A1.024,1.024,0,0,1,4.437,2.25H6.484A1.024,1.024,0,0,1,7.508,3.274v.341H6.826V3.274a.341.341,0,0,0-.341-.341H4.437a.341.341,0,0,0-.341.341v.341H3.413Z"
        transform="translate(0 -2.25)"
        fill="#fff"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export const SkipeIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="62"
    height="62"
    viewBox="0 0 62 62"
  >
    <defs>
      <filter
        id="Ellipse_177"
        x="0"
        y="0"
        width="62"
        height="62"
        filterUnits="userSpaceOnUse"
      >
        <feOffset
          dy="3" //@ts-ignore
          input="SourceAlpha"
        />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodColor="#ffa200" floodOpacity="0.639" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Group_487" data-name="Group 487" transform="translate(-182 -662)">
      <g transform="matrix(1, 0, 0, 1, 182, 662)" filter="url(#Ellipse_177)">
        <circle
          id="Ellipse_177-2"
          data-name="Ellipse 177"
          cx="22"
          cy="22"
          r="22"
          transform="translate(9 6)"
          fill="#e8edf4"
        />
      </g>
      <path
        id="Icon_open-media-skip-forward"
        data-name="Icon open-media-skip-forward"
        d="M0,0V15.818L10.545,7.909ZM10.545,7.909v7.909L21.09,7.909,10.545,0Z"
        transform="translate(204 682.6)"
        fill="#f5b002"
      />
    </g>
  </svg>
);
export const FlagIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9.131"
    height="10.957"
    viewBox="0 0 9.131 10.957"
  >
    <path
      id="Icon_ionic-md-flag"
      data-name="Icon ionic-md-flag"
      d="M15.31,5.048a11.232,11.232,0,0,1-1.415.12,11.4,11.4,0,0,1-2.325-.348,11.869,11.869,0,0,0-2.4-.32,4.551,4.551,0,0,0-2.3.382l-.12.083V15.457H8.12V10.372a8.656,8.656,0,0,1,1.053-.057,11.548,11.548,0,0,1,2.277.442,12.238,12.238,0,0,0,2.48.328,11.324,11.324,0,0,0,1.381-.114c.214-.026.4-.049.571-.077V4.962C15.738,4.991,15.524,5.022,15.31,5.048Z"
      transform="translate(-6.75 -4.5)"
      fill="#fff"
    />
  </svg>
);
export const UndoIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="62"
    height="62"
    viewBox="0 0 62 62"
  >
    <defs>
      <filter
        id="Ellipse_295"
        x="0"
        y="0"
        width="62"
        height="62"
        filterUnits="userSpaceOnUse"
      >
        <feOffset
          dy="3" //@ts-ignore
          input="SourceAlpha"
        />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodColor="#ffa200" floodOpacity="0.639" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Group_486" data-name="Group 486" transform="translate(-122 -662)">
      <g transform="matrix(1, 0, 0, 1, 122, 662)" filter="url(#Ellipse_295)">
        <circle
          id="Ellipse_295-2"
          data-name="Ellipse 295"
          cx="22"
          cy="22"
          r="22"
          transform="translate(9 6)"
          fill="#e8edf4"
        />
      </g>
      <path
        id="Icon_ionic-ios-undo"
        data-name="Icon ionic-ios-undo"
        d="M26.214,22.473a11.369,11.369,0,0,0-3.039-8.491c-2.162-2.178-4.917-3.3-8.742-3.5a.216.216,0,0,1-.2-.214V5.838a.216.216,0,0,0-.332-.182L2.346,13.265a.215.215,0,0,0,0,.358L13.9,21.231a.212.212,0,0,0,.332-.182V16.683a.214.214,0,0,1,.225-.214,12.581,12.581,0,0,1,5.2,1.241,13.175,13.175,0,0,1,5.056,4.468A11.457,11.457,0,0,1,25.85,24.3a.237.237,0,0,0,.219.15h.155C26.219,23.826,26.214,23.024,26.214,22.473Z"
        transform="translate(138.763 674.963)"
        fill="#f5b002"
      />
    </g>
  </svg>
);
export const InfoIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 9.673 9.673"
  >
    <path
      id="Icon_awesome-info-circle"
      data-name="Icon awesome-info-circle"
      d="M5.4.563A4.837,4.837,0,1,0,10.236,5.4,4.837,4.837,0,0,0,5.4.563Zm0,2.145a.819.819,0,1,1-.819.819A.819.819,0,0,1,5.4,2.708ZM6.491,7.661a.234.234,0,0,1-.234.234H4.541a.234.234,0,0,1-.234-.234V7.193a.234.234,0,0,1,.234-.234h.234V5.711H4.541a.234.234,0,0,1-.234-.234V5.009a.234.234,0,0,1,.234-.234H5.789a.234.234,0,0,1,.234.234v1.95h.234a.234.234,0,0,1,.234.234Z"
      transform="translate(-0.563 -0.563)"
      fill="#fff"
    />
  </svg>
);
export const EditIcon: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12.376"
    height="13.809"
    viewBox="0 0 12.376 13.809"
  >
    <g id="Account-01" transform="translate(-123.4 -60.801)">
      <g
        id="Group_487"
        data-name="Group 487"
        transform="translate(124.047 60.801)"
      >
        <path
          id="Path_2154"
          data-name="Path 2154"
          d="M292.736,63.289a1.38,1.38,0,0,1-.5.8c-.165.155-.326.321-.486.476L289,61.816a10.912,10.912,0,0,1,.773-.8.942.942,0,0,1,1.268.068c.476.466.943.943,1.419,1.414a1.092,1.092,0,0,1,.277.578Z"
          transform="translate(-281.601 -60.801)"
          fill="#ab83a1"
        />
        <path
          id="Path_2155"
          data-name="Path 2155"
          d="M136.976,222.56c-.248-.121-.3-.238-.224-.515.277-.967.554-1.939.831-2.906a.164.164,0,0,1,.015-.039l2.58,2.58c-.282.083-.573.165-.865.248-.714.2-1.424.408-2.138.607l-.049.019C137.078,222.56,137.025,222.56,136.976,222.56Z"
          transform="translate(-136.72 -211.408)"
          fill="#ab83a1"
        />
        <path
          id="Path_2156"
          data-name="Path 2156"
          d="M165.536,99.5,162.8,96.765c1.885-1.885,3.775-3.78,5.656-5.665l2.74,2.74Q168.383,96.661,165.536,99.5Z"
          transform="translate(-161.533 -89.628)"
          fill="#ab83a1"
        />
      </g>
      <rect
        id="Rectangle_1638"
        data-name="Rectangle 1638"
        width="12.376"
        height="1.273"
        transform="translate(123.4 73.337)"
        fill="#ab83a1"
      />
    </g>
  </svg>
);

export const LikeIconSwipe: FC<IconProps> = (_props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="82"
    height="82"
    viewBox="0 0 82 82"
  >
    <defs>
      <linearGradient
        id="green-linear-gradient"
        x1="0.203"
        y1="0.061"
        x2="0.785"
        y2="0.94"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stopColor="#7be250" />
        <stop offset="1" stopColor="#2d9402" />
      </linearGradient>
      <filter
        id="Ellipse_49"
        x="0"
        y="0"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
      >
        <feOffset
          dy="3" //@ts-ignore
          input="SourceAlpha"
        />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodColor="#5dff01" floodOpacity="0.51" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="Icon_material-done"
        x="26.754"
        y="27.589"
        width="28.442"
        height="22.654"
        filterUnits="userSpaceOnUse"
      >
        <feOffset
          dy="1" //@ts-ignore
          input="SourceAlpha"
        />
        <feGaussianBlur result="blur-2" />
        <feFlood floodOpacity="0.161" />
        <feComposite operator="in" in2="blur-2" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Group_488" data-name="Group 488" transform="translate(-260 -652)">
      <g transform="matrix(1, 0, 0, 1, 260, 652)" filter="url(#Ellipse_49)">
        <circle
          id="Ellipse_49-2"
          data-name="Ellipse 49"
          cx="32"
          cy="32"
          r="32"
          transform="translate(9 6)"
          fill="url(#green-linear-gradient)"
        />
      </g>
      <g
        transform="matrix(1, 0, 0, 1, 260, 652)"
        filter="url(#Icon_material-done)"
      >
        <path
          id="Icon_material-done-2"
          data-name="Icon material-done"
          d="M14.15,25.53,7.362,18.742,5.1,21l9.05,9.05L33.542,10.662,31.279,8.4Z"
          transform="translate(21.65 19.19)"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);

import CollectionIcon from "components/icons/CollectionIcon";
import HomeIcon from "components/icons/HomeIcon";
import LogoutIcon from "components/icons/LogoutIcon";
import ProfileIcon from "components/icons/ProfileIcon";
import RadioIcon from "components/icons/RadioIcon";
import VideoIcon from "components/icons/VideoIcon";
import { LIGHT_COLOR } from "utils/Theme";

export const topNavList = [
	{
		icon: <HomeIcon bg={LIGHT_COLOR} />,
		name: "Home",
		link: "/",
	},
	{
		icon: <CollectionIcon bg={LIGHT_COLOR} />,
		name: "My Collection",
		link: "/collections",
	},
	{
		icon: <RadioIcon bg={LIGHT_COLOR} />,
		name: "Radio",
		link: "/",
	},
	{
		icon: <VideoIcon bg={LIGHT_COLOR} />,
		name: "Music Videos",
		link: "/",
	},
];

export const bottomNavList = [
	{
		icon: <ProfileIcon bg={LIGHT_COLOR} />,
		name: "Profile",
		link: "/",
	},
	{
		icon: <LogoutIcon bg={LIGHT_COLOR} />,
		name: "Logout",
		link: "/",
	},
];

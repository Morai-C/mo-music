import * as React from "react";

const LogoutIcon: React.FC<{ bg: string }> = ({
	bg = "#efeee0",
	...props
}): JSX.Element => (
	<svg
		width={20}
		height={20}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M9.535.833c2.276 0 4.132 1.825 4.132 4.07v4.391H8.07a.707.707 0 0 0-.718.706c0 .385.317.706.718.706h5.596v4.382c0 2.245-1.856 4.079-4.15 4.079H4.973c-2.285 0-4.14-1.825-4.14-4.07V4.913c0-2.256 1.865-4.08 4.15-4.08h4.551Zm6.46 6.005a.7.7 0 0 1 1-.01l2.676 2.668a.7.7 0 0 1 0 1l-2.677 2.667a.71.71 0 0 1-.495.21.708.708 0 0 1-.504-1.21l1.467-1.457h-3.795V9.294h3.795l-1.467-1.457a.708.708 0 0 1 0-1Z"
			fill={bg}
		/>
	</svg>
);

export default LogoutIcon;

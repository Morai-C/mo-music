import * as React from "react";

const ProfileIcon: React.FC<{ bg: string }> = ({
	bg = "#efeee0",
	...props
}): JSX.Element => (
	<svg
		width={22}
		height={22}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M11 1.833a4.358 4.358 0 0 0-4.354 4.354c0 2.356 1.842 4.263 4.244 4.346a.737.737 0 0 1 .202 0h.064a4.343 4.343 0 0 0 4.198-4.346A4.358 4.358 0 0 0 11 1.833ZM15.657 12.97c-2.558-1.704-6.729-1.704-9.305 0-1.164.78-1.805 1.834-1.805 2.962 0 1.127.641 2.172 1.796 2.942 1.284.862 2.97 1.293 4.657 1.293 1.687 0 3.373-.431 4.657-1.293 1.155-.779 1.796-1.824 1.796-2.96-.009-1.128-.641-2.173-1.796-2.943Z"
			fill={bg}
		/>
	</svg>
);

export default ProfileIcon;
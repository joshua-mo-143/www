import { FC, SVGAttributes } from 'react'

const GithubLogo: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='23'
			viewBox='0 0 24 23'
			fill='currentColor'
			{...props}
		>
			<path d='M12 0C5.374 0 0 5.2793 0 11.7907C0 17.0003 3.438 21.4198 8.207 22.9791C8.806 23.0882 9 22.7227 9 22.4122V20.2172C5.662 20.9305 4.967 18.8259 4.967 18.8259C4.421 17.463 3.634 17.1005 3.634 17.1005C2.545 16.3685 3.717 16.3842 3.717 16.3842C4.922 16.4667 5.556 17.5996 5.556 17.5996C6.626 19.4016 8.363 18.8809 9.048 18.5792C9.155 17.8177 9.466 17.297 9.81 17.0032C7.145 16.7035 4.343 15.6925 4.343 11.1756C4.343 9.8875 4.812 8.83616 5.579 8.01081C5.455 7.7131 5.044 6.51339 5.696 4.8902C5.696 4.8902 6.704 4.57382 8.997 6.09875C9.954 5.83739 10.98 5.70671 12 5.7018C13.02 5.70671 14.047 5.83739 15.006 6.09875C17.297 4.57382 18.303 4.8902 18.303 4.8902C18.956 6.51438 18.545 7.71408 18.421 8.01081C19.191 8.83616 19.656 9.88849 19.656 11.1756C19.656 15.7043 16.849 16.7016 14.177 16.9934C14.607 17.3589 15 18.0762 15 19.1766V22.4122C15 22.7256 15.192 23.0941 15.801 22.9782C20.566 21.4169 24 16.9983 24 11.7907C24 5.2793 18.627 0 12 0Z' />
		</svg>
	)
}

export default GithubLogo
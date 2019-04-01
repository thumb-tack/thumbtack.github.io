declare module 'react-loader-spinner' {
	import * as React from 'react';

	export interface LoaderProps {
		color?: string;
		type?: string;
		height?: any;
		width?: any;
		style?: any;
	}

	export default class Loader extends React.Component<LoaderProps, any> {}
}

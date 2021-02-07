import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script async={true} place={"endOfHead"} rawKey={"60201e26ea5765629418294c"}>
				{"alert(\"Main page\")"}
			</script>
			<meta
				name={"keywords"}
				content={"HTML CSS JavaScript "}
				http-equiv={"some value"}
				place={"endOfHead"}
				rawKey={"60201e3181ffe1216a7c6b70"}
			/>
			<style place={"endOfHead"} rawKey={"60201e45fcbb32906690be8b"}>
				{"body {\nbackground-color: yellow}"}
			</style>
			<link
				href={"https://fontlibrary.org/face/gagliostro"}
				rel={"stylesheet"}
				sizes={"20px"}
				type={"text/css"}
				media={"screen"}
				place={"endOfHead"}
				rawKey={"60201e539c42d3cf29c3e9c3"}
			/>
		</RawHtml>
	</Theme>;
});
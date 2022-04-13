import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>

			{newsArticle("Heyoo its me IFEOLUWA", "Big news... 90999 readers")}
			{newsArticle("Heyoo its me IFEOLUWA", "Big news... 90999 readers")}
			{newsArticle("Heyoo its me IFEOLUWA", "Big news... 90999 readers")}
			{newsArticle("Built With Love", "Big news... 90999 readers")}
			{newsArticle("Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet")}
			{newsArticle("Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet")}
			{newsArticle("Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet")}
			{newsArticle("Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet")}
		</div>
	);
}

export default Widgets;

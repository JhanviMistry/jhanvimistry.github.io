import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Institute = () => {
	return (
		<div className="education">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="edu-body">
						 <div className="work">
							<img
								src="./vjtilogo.png"
								alt="VJTI"
								className="work-image"
							/>
							<div className="work-title">Veermata Jijabai Technological Institute</div>
							<div className="work-subtitle">
								BTech | Information Technology
							</div>
							<div className="work-duration">2016 - 2020</div>
				</div> 

					 <div className="work">
							<img
								src="./qmul.png"
								alt="qmul"
								className="work-image"
							/>
							<div className="work-title">Queen Mary University of London</div>
							<div className="work-subtitle">
							    MSc | Computer Science
							</div>
							<div className="work-duration">2024 - 2026</div>
				</div> 
					</div>
				}
			/>
		</div>
	);
};

export default Institute;

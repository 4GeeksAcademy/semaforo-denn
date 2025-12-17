import React, { useState } from "react";
import "./HomeStyles.css";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [lightActive, setLightActive] = useState ("  ")

	return (
		<div className="traffic-light"> 

			<div className="d-flex justify-content-center p-4">
				<div className="bg-dark p-3 rounded-4 d-flex flex-column gap-3 ">

					<button type="button" id="red-light" className={`rounded-circle bg-danger  ${lightActive == "red" ? "lightActiveGlow" : " " } `} onClick= {() => setLightActive("red")} ></button>

					<button type="button" id="yellow-light" className={`rounded-circle bg-warning ${lightActive == "yellow" ? "lightActiveGlow" : " " }`} onClick= {() => setLightActive("yellow")} ></button>

					<button type="button" id="green-light" className={`rounded-circle bg-success ${lightActive == "green" ? "lightActiveGlow" : " " }`} onClick= {() => setLightActive("green")} ></button>


				</div>
			</div>
		
		</div>

	);
};

export default Home;
import Hero from "./cmps/Hero";
import HighlightsPixelPerfect from "./cmps/HighlightsPixelPerfect";
import Intro from "./cmps/Intro";
import "./styles/main.scss";

function App() {
	return (
		<div className="App">
			<div className="main-container">
				<Hero />
				<Intro />
				<HighlightsPixelPerfect />
				<footer>footer</footer>
			</div>
		</div>
	);
}

export default App;

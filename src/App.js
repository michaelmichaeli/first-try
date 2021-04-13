import Hero from "./cmps/Hero";
import HighlightsPixelPerfect from "./cmps/HighlightsPixelPerfect";
import "./styles/main.scss";

function App() {
	return (
		<div className="App">
			<div className="main-container">
					<Hero />
					<HighlightsPixelPerfect />
					<footer>footer</footer>
			</div>
		</div>
	);
}

export default App;

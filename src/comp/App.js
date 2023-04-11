import '../styles/App.scss';
import CounterWidget from "./CounterWidget"
import GreetingToggle from "./GreetingToggle";
import ShowHide from "./ShowHide";
import FontSizerSlider from "./FontSizerSlider";
import FontSizerButtons from "./FontSizerButtons";
import TextAlignButtons from './TextAlignButtons';
import LifecycleClock from './LifecycleClock';

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>React Widgets</h1>
        <CounterWidget />
        <GreetingToggle />
        <ShowHide />
        <FontSizerButtons />
        <FontSizerSlider />
        <TextAlignButtons />
        <LifecycleClock />
      </header>
    </div>
  );
}


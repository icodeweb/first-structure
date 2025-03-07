import Button from './components/Button';
import Image from './components/Image'
import Mylist from './components/Mylist'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import Clock from './components/Clock'
import Timer from './components/Timer'

function App() {

  let handleClick = () => {
    console.log("u clicked a button");
  }

  return (
    <>
      <Button text="Click Me" onClick={handleClick} />
      <Image src="assets/doge.png" alt='img from neocities' />
      <Mylist />
      <Counter />
      <ToggleButton />
      <Clock />
      <Timer />
    </>
  );
}

export default App;

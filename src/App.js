import Button from './components/Button';
import Image from './components/Image'

function App() {

  let handleClick = () => {
    console.log("u clicked a button");
  }

  return (
    <>
      <Button text="Click Me" onClick={handleClick} />
      <Image src="assets/doge.png" alt='img from neocities' />
    </>
  );
}

export default App;

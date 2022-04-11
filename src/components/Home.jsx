import svg from "../assets/svg.svg";
import Button from "../utils/Button";
const Home = () => {
  return (
    <div class="flex-col my-20 h-full  md:mt-0 md:flex-row justify-around md:min-h-screen items-center  flex md:px-24 file:  ">
      <div class=" text-center w-96 py-44 md:py-0">
        <h1 className="md:text-7xl text-6xl font-semibold my-4">Edu Falcón</h1>
        <p class="  text-xl font-bold">Developer web Full Stack</p>
        <p class="mb-5  text-xm font-semibold">
          100% apacionado por la programacion
        </p>
        <a
          href="#work"
          className="px-4 py-3 rounded font-bold bg-cyan-400 hover: ease-in transition-colors "
        >
          My work
        </a>
      </div>
      <div class="hidden md:flex justify-center ">
        <img className="md:h-80  w-full" src={svg} />
      </div>
    </div>
  );
};

export default Home;

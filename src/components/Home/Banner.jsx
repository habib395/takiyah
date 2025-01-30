import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css"; // Ensure styles are loaded

const Banner = () => {
  return (
    <Flicking 
      align="center"
      options={{ circular: true }} // Correct way to enable infinite scrolling
    >
      {/* Styled Panels for Better Visibility */}
      <div className="w-64 h-40 bg-blue-300 flex items-center justify-center">Panel 0</div>
      <div className="w-64 h-40 bg-green-300 flex items-center justify-center">Panel 1</div>
      <div className="w-64 h-40 bg-red-300 flex items-center justify-center">Panel 2</div>
    </Flicking>
  );
};

export default Banner;

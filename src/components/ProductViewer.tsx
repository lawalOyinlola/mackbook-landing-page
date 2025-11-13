import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store/index";
import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <div className="flex-center gap-5 mt-5">
          <div className="color-control" role="group" aria-label="Color selection">
            <button
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
              aria-label="Silver color"
              aria-pressed={color === "#adb5bd"}
            />
            <button
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
              aria-label="Space gray color"
              aria-pressed={color === "#2e2c2e"}
            />
          </div>

          <div className="size-control">
            <button
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              aria-label="14 inch model"
              aria-pressed={scale === 0.06}
            >
              <p>14"</p>
            </button>
            <button
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              aria-label="16 inch model"
              aria-pressed={scale === 0.08}
            >
              <p>16"</p>
            </button>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />

        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};
export default ProductViewer;

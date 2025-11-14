import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store/index";
import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMacbookScales } from "../hooks/useMacbookScales";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { macbook14Scale, macbook16Scale } = useMacbookScales(isMobile);

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <div className="flex-center gap-5 mt-5">
          <div
            className="color-control"
            role="group"
            aria-label="Color selection"
          >
            <button
              type="button"
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
              aria-label="Silver color"
              aria-pressed={color === "#adb5bd"}
            />
            <button
              type="button"
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
              type="button"
              onClick={() => setScale(macbook14Scale)}
              className={clsx(
                scale === macbook14Scale
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              aria-label="14 inch model"
              aria-pressed={scale === macbook14Scale}
            >
              <p>14"</p>
            </button>
            <button
              type="button"
              onClick={() => setScale(macbook16Scale)}
              className={clsx(
                scale === macbook16Scale
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              aria-label="16 inch model"
              aria-pressed={scale === macbook16Scale}
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

        <ModelSwitcher scale={scale} isMobile={isMobile} />
      </Canvas>
    </section>
  );
};
export default ProductViewer;

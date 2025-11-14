import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Group, Mesh } from "three";
import { MACBOOK_SCALES } from "../../constants";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group: Group | null, opacity: number): void => {
  if (!group) return;

  group.traverse((child) => {
    if (child instanceof Mesh) {
      const material = child.material;
      if (Array.isArray(material)) {
        material.forEach((mat) => {
          if ("transparent" in mat && "opacity" in mat) {
            mat.transparent = true;
            gsap.to(mat, { opacity, duration: ANIMATION_DURATION });
          }
        });
      } else if (
        material &&
        "transparent" in material &&
        "opacity" in material
      ) {
        material.transparent = true;
        gsap.to(material, { opacity, duration: ANIMATION_DURATION });
      }
    }
  });
};

const moveGroup = (group: Group | null, x: number): void => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

type ModelSwitcherProps = {
  scale: number;
  isMobile: boolean;
};

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  const macbook14Ref = useRef<Group>(null);
  const macbook16Ref = useRef<Group>(null);

  const macbook14Scale = isMobile
    ? MACBOOK_SCALES.MOBILE.INCH_14
    : MACBOOK_SCALES.DESKTOP.INCH_14;

  const macbook16Scale = isMobile
    ? MACBOOK_SCALES.MOBILE.INCH_16
    : MACBOOK_SCALES.DESKTOP.INCH_16;

  useGSAP(() => {
    const isShowing16Inch = scale === macbook16Scale;

    if (isShowing16Inch) {
      moveGroup(macbook14Ref.current, -OFFSET_DISTANCE);
      moveGroup(macbook16Ref.current, 0);

      fadeMeshes(macbook14Ref.current, 0);
      fadeMeshes(macbook16Ref.current, 1);
    } else {
      moveGroup(macbook14Ref.current, 0);
      moveGroup(macbook16Ref.current, OFFSET_DISTANCE);

      fadeMeshes(macbook14Ref.current, 1);
      fadeMeshes(macbook16Ref.current, 0);
    }
  }, [scale, isMobile, macbook14Scale, macbook16Scale]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    // polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity] as [number, number],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={macbook16Ref}>
          <MacbookModel16 scale={macbook16Scale} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={macbook14Ref}>
          <MacbookModel14 scale={macbook14Scale} />
        </group>
      </PresentationControls>
    </>
  );
};
export default ModelSwitcher;

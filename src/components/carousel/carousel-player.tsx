import { $, component$, PropsOf, Slot, useContext } from "@qwik.dev/core";
import { carouselContextId } from "./carousel-root";

export const CarouselPlayer = component$((props: PropsOf<"button">) => {
  const context = useContext(carouselContextId);

  const handleClick$ = $(() => {
    context.isAutoplay.value = !context.isAutoplay.value;
  });

  return (
    <button
      {...props}
      onClick$={[handleClick$, props.onClick$]}
      data-qds-carousel-player
    >
      <Slot />
    </button>
  );
});

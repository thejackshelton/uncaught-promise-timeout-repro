import {
  component$,
  createContextId,
  isServer,
  type PropsOf,
  type Signal,
  Slot,
  useComputed$,
  useContextProvider,
  useSignal,
  useTask$,
} from "@qwik.dev/core";

export const carouselContextId = createContextId<CarouselContext>(
  "qui-carousel-context"
);

export type CarouselContext = {
  isAutoplay: Signal<boolean>;
};

export const CarouselRoot = component$(
  (props: PropsOf<"div"> & { itemsPerView?: number }) => {
    const isAutoplay = useSignal(false);
    const itemsPerView = useComputed$(() => props.itemsPerView ?? 1);

    const validIndexes = useComputed$(() => {
      // read of itemsperView in computed
      itemsPerView.value;
    });

    const context: CarouselContext = {
      isAutoplay,
    };

    const intervalId = useSignal<NodeJS.Timeout>();

    useTask$(async ({ track }) => {
      console.log("useTask$");
      track(() => isAutoplay.value);
      if (isServer) return;

      const advanceItemIndex = () => {
        // for some reason a signal read here causes uncaught promise
        validIndexes.value;
      };

      // uncaught promise happens after setInterval time
      intervalId.value = setInterval(() => {
        advanceItemIndex();
      }, 1000);
    });

    useContextProvider(carouselContextId, context);

    return (
      <div
        // signal read in object style property
        style={{
          "--items-per-view": itemsPerView.value,
        }}
      >
        <Slot />
      </div>
    );
  }
);

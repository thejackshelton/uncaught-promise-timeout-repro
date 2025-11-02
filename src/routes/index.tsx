import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";
import { CarouselPlayer } from "~/components/carousel/carousel-player";
import { CarouselRoot } from "~/components/carousel/carousel-root";

export default component$(() => {
  return (
    <CarouselRoot class="carousel-root">
      <CarouselPlayer>Autoplay</CarouselPlayer>
    </CarouselRoot>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

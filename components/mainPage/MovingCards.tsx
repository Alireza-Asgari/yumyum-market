import InfiniteMovingImages from "@/components/ui/InfiniteMovingImages";
export function MovingCards() {
  return (
    <div className="relative z-10 overflow-x-hidden mt-4 text-white">
      <h2 className="mt-10 text-center heading-2">محصولات ما:</h2>
      <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingImages items={images1} direction="right" speed="fast" />
      </div>
    </div>
  );
}
const images1 = [
  {
    src: "/mainpage/candy.png",
  },
  {
    src: "/mainpage/chocolateBox.webp",
  },
  {
    src: "/mainpage/chocolateKilo.webp",
  },
  {
    src: "/mainpage/gift.webp",
  },
  {
    src: "/mainpage/smarties.webp",
  },
  {
    src: "/mainpage/Marshmallow.jpg",
  },
];

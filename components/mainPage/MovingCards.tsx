import InfiniteMovingImages from "@/components/ui/InfiniteMovingImages";
export function MovingCards() {
  return (
    <div className="relative z-10 overflow-x-hidden mt-4 text-gray-700">
      <div className="p-4 sm:p-10 space-y-2 sm:mx-10">
        <h2 className="mt-10 heading-2">
          یام یام مارکت سایت خرید شکلات خارجی آنلاین
        </h2>
        <p className="paragraph">
          یام یام مارکت به عنوان یک مجموعه فروشگاه اینترنتی شناخته می شود که به
          شما انواع شکلات خارجی را ارائه می دهد. ما در این مجموعه به شما بهترین
          مدل ها و برندهای شکلات را در ایران عرضه می کنیم.
        </p>
        <p className="paragraph">
          برای راحتی انتخاب شما ما محصولات را در دسته های زیر قرار داده ایم شما
          می توانید به راحتی نسبت به انتخاب و خرید هر محصول اقدام نمایید. بر روی
          هریک از محصولات زیر کلیک کنید تا وارد صفحه خرید آنها شده بر اساس سلیقه
          و انتخاب خودتان آنها را خریداری نمایید.
        </p>
      </div>
      <h2 className="mt-10 text-center heading-2">محصولات ما:</h2>
      <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingImages items={images1} direction="right" speed="fast" />
      </div>
    </div>
  );
}
const images1 = [
  {
    src: "/mainpage/shopitems/adams.png",
  },
  {
    src: "/mainpage/shopitems/boxchocolate.png",
  },
  {
    src: "/mainpage/shopitems/chocolatekilo.png",
  },
  {
    src: "/mainpage/shopitems/giftpack.png",
  },
  {
    src: "/mainpage/shopitems/marshmalo.png",
  },
  {
    src: "/mainpage/shopitems/pastil.png",
  },
  {
    src: "/mainpage/shopitems/shocobox.png",
  },
  {
    src: "/mainpage/shopitems/smartis.png",
  },
];

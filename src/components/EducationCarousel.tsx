
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const carouselImages = [
  {
    src: "/lovable-uploads/abc6bb16-d0ae-47e7-ae5f-91baf937ee01.png",
    alt: "معلمة تساعد طفل في الواجبات"
  },
  {
    src: "/lovable-uploads/6aef08f2-df4e-42fd-82e2-5ee244f04822.png",
    alt: "طالب يجري تجربة علمية" 
  },
  {
    src: "/lovable-uploads/56796516-4283-4f89-8b7f-8c9fb834a438.png",
    alt: "معلمة مع طلاب يدرسون الجغرافيا"
  },
  {
    src: "/lovable-uploads/829da1c5-f204-48e2-b7c8-da3464cee845.png",
    alt: "أطفال يتعلمون مع معلمة"
  },
  {
    src: "/lovable-uploads/acbddc7d-5127-461c-8b3e-871a3cff7cb0.png",
    alt: "معلمة تساعد طالبة صغيرة"
  },
  {
    src: "/lovable-uploads/55726d95-657d-45c7-95b5-e0d974967466.png",
    alt: "طلاب يستمعون للمعلم"
  },
  {
    src: "/lovable-uploads/8b3cc2cf-c81c-48a2-86ad-e1bc7fe4e8f6.png",
    alt: "معلمة مع طالبة"
  },
  {
    src: "/lovable-uploads/c681414f-91fe-4918-85cb-901b1b8dedca.png",
    alt: "معلم مع طلاب في الفصل"
  },
  {
    src: "/lovable-uploads/c48a4fc9-3012-42b8-a775-bbdab7bc2d74.png",
    alt: "معلمة وطالبة يدرسون عبر الإنترنت"
  },
  {
    src: "/lovable-uploads/acf2f49d-9619-4f87-a6f5-45a200ea78f9.png",
    alt: "معلمة تساعد طالبة في المنزل"
  },
  {
    src: "/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png",
    alt: "معلمة في الفصل"
  },
  {
    src: "/lovable-uploads/3826aa97-4dc0-4238-8ae2-0a2e95c2bd53.png",
    alt: "معلمة تساعد طلاب صغار"
  },
  {
    src: "/lovable-uploads/575dea3b-0c5a-414d-9814-28b08e187acb.png",
    alt: "طالبة تدرس"
  },
  {
    src: "/lovable-uploads/ca1d249f-fbb9-4b12-89f9-917203387e2c.png",
    alt: "معلمة مع طالبة في الفصل"
  },
  {
    src: "/lovable-uploads/8e4b25d0-536d-484f-bfa6-e3e808861ac9.png",
    alt: "معلمة وطالب يدرسون عبر الإنترنت"
  },
  {
    src: "/lovable-uploads/82b0076e-4eca-4bc6-ae5f-6bd7ea7f5590.png",
    alt: "معلمة مع طالبة"
  },
  {
    src: "/lovable-uploads/ebaf1d1e-b903-489a-b6b8-91658c25c8e4.png",
    alt: "قراءة في الهواء الطلق"
  },
  {
    src: "/lovable-uploads/804f95f7-2838-49f1-82f1-960f67dbd206.png",
    alt: "طالبة حزينة تحتاج إلى مساعدة"
  },
  {
    src: "/lovable-uploads/6c8eea94-a92d-439b-b9d7-7b0d2472338a.png",
    alt: "معلمة مع طالب في درس الجغرافيا"
  }
];

export const EducationCarousel = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          لحظات تعليمية مميزة مع أفضل المعلمين
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="overflow-hidden rounded-lg shadow-md bg-white p-1">
                  <div className="aspect-square relative overflow-hidden rounded-md">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static translate-y-0 mx-1 bg-white hover:bg-gray-100 text-gray-800 border-gray-300" />
            <CarouselNext className="static translate-y-0 mx-1 bg-white hover:bg-gray-100 text-gray-800 border-gray-300" />
          </div>
        </Carousel>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            درسني تقدم تجارب تعليمية متميزة مع نخبة من المعلمين المؤهلين في جميع التخصصات والمراحل الدراسية
          </p>
        </div>
      </div>
    </div>
  );
};

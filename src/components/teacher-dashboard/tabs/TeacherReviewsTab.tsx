
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

export const TeacherReviewsTab = () => {
  const [filter, setFilter] = useState("all");

  // Mock reviews data - in a real app this would come from API
  const reviews = [
    {
      id: 1,
      studentName: "محمد علي",
      date: "2023-08-15",
      rating: 5,
      comment: "معلم ممتاز وشرحه سلس وواضح. استفدت كثيراً من دروسه وساعدني على تحسين درجاتي بشكل كبير.",
      avatar: "/lovable-uploads/ca1d249f-fbb9-4b12-89f9-917203387e2c.png"
    },
    {
      id: 2,
      studentName: "فاطمة حسين",
      date: "2023-07-22",
      rating: 4,
      comment: "شرح جيد وأسلوب رائع في توصيل المعلومة. الدروس منظمة ومفيدة جداً.",
      avatar: "/lovable-uploads/829da1c5-f204-48e2-b7c8-da3464cee845.png"
    },
    {
      id: 3,
      studentName: "عبدالله محمد",
      date: "2023-06-10",
      rating: 5,
      comment: "من أفضل المعلمين الذين درست معهم. يشرح بأسلوب سهل وممتع ويهتم بجميع الطلاب.",
      avatar: "/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png"
    },
    {
      id: 4,
      studentName: "نور أحمد",
      date: "2023-05-05",
      rating: 3,
      comment: "شرح جيد ولكن يحتاج إلى مزيد من التمارين والأمثلة التوضيحية.",
      avatar: "/lovable-uploads/8b3cc2cf-c81c-48a2-86ad-e1bc7fe4e8f6.png"
    },
  ];

  // Filter reviews based on selected filter
  const filteredReviews = filter === "all" 
    ? reviews 
    : reviews.filter(review => {
        if (filter === "positive") return review.rating >= 4;
        if (filter === "negative") return review.rating < 4;
        return true;
      });

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-xl font-bold">التقييمات والتعليقات</h3>
            
            <Tabs 
              defaultValue="all" 
              value={filter} 
              onValueChange={setFilter}
              className="w-fit"
            >
              <TabsList className="grid grid-cols-3 w-[300px]">
                <TabsTrigger value="all">الكل</TabsTrigger>
                <TabsTrigger value="positive">
                  <ThumbsUp className="w-4 h-4 ml-1" /> إيجابي
                </TabsTrigger>
                <TabsTrigger value="negative">
                  <ThumbsDown className="w-4 h-4 ml-1" /> سلبي
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              {filteredReviews.map(review => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <img 
                      src={review.avatar} 
                      alt={review.studentName} 
                      className="w-10 h-10 rounded-full mr-3" 
                    />
                    <div>
                      <h4 className="font-semibold">{review.studentName}</h4>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 mr-2">
                          {new Date(review.date).toLocaleDateString('ar-EG')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}

              {filteredReviews.length === 0 && (
                <div className="py-6 text-center text-gray-500">
                  لا توجد تقييمات مطابقة للفلتر المحدد
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">ملخص التقييمات</h3>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= averageRating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                بناءً على {reviews.length} تقييم
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {ratingDistribution.map(item => (
                <div key={item.rating} className="flex items-center">
                  <div className="w-12 text-sm flex items-center font-medium">
                    {item.rating} <Star className="w-3 h-3 mr-1 inline text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="flex-grow mx-2 h-3 bg-gray-200 rounded-full">
                    <div 
                      className="h-3 bg-yellow-400 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-10 text-sm">{item.count}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">الإحصائيات</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>مجموع التقييمات:</span>
                <span className="font-bold">{reviews.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>التقييمات الإيجابية (4-5):</span>
                <span className="font-bold">{reviews.filter(r => r.rating >= 4).length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>التقييمات المتوسطة (3):</span>
                <span className="font-bold">{reviews.filter(r => r.rating === 3).length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>التقييمات السلبية (1-2):</span>
                <span className="font-bold">{reviews.filter(r => r.rating <= 2).length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

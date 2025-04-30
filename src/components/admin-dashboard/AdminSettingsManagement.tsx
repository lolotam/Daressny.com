
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useState } from "react";

export const AdminSettingsManagement = () => {
  const [bannerTitle, setBannerTitle] = useState("منصة درسني - تعلم بسهولة وفعالية");
  const [bannerDescription, setBannerDescription] = useState("دروس خصوصية مع أفضل المدرسين - مراجعات وتمارين لكافة المواد والمراحل الدراسية");
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إعدادات المنصة</h1>
        <Button className="flex items-center gap-2">
          <Save className="h-4 w-4" /> حفظ التغييرات
        </Button>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
          <TabsTrigger value="general">إعدادات عامة</TabsTrigger>
          <TabsTrigger value="content">محتوى الموقع</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات الصفحة الرئيسية</CardTitle>
              <CardDescription>تعديل محتوى الصفحة الرئيسية</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">عنوان البانر الرئيسي</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={bannerTitle}
                  onChange={(e) => setBannerTitle(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">وصف البانر الرئيسي</label>
                <textarea
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  value={bannerDescription}
                  onChange={(e) => setBannerDescription(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">صورة البانر الرئيسي</label>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 border border-dashed border-gray-300 rounded-md p-8 text-center">
                    <p className="text-gray-500 mb-2">اسحب الصورة هنا أو اضغط للتحميل</p>
                    <Button variant="outline" size="sm">اختر صورة</Button>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>• الحد الأقصى لحجم الصورة: 5MB</p>
                    <p>• الأبعاد المثالية: 1920 × 600 بكسل</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>إعدادات وسائل التواصل الاجتماعي</CardTitle>
              <CardDescription>روابط حساباتكم على منصات التواصل الاجتماعي</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">رابط الفيسبوك</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="https://facebook.com/daressny"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">رابط الإنستغرام</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="https://instagram.com/daressny"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">رابط واتساب</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="https://wa.me/96560685150"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>صفحة من نحن</CardTitle>
              <CardDescription>تعديل محتوى صفحة من نحن</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">عنوان صفحة من نحن</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="من نحن - منصة درسني"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">محتوى صفحة من نحن</label>
                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-gray-50 border-b p-2 flex gap-2">
                      <button className="p-1 hover:bg-gray-200 rounded">B</button>
                      <button className="p-1 hover:bg-gray-200 rounded italic">I</button>
                      <button className="p-1 hover:bg-gray-200 rounded underline">U</button>
                      <span className="border-l mx-1"></span>
                      <button className="p-1 hover:bg-gray-200 rounded">عنوان</button>
                      <button className="p-1 hover:bg-gray-200 rounded">رابط</button>
                      <button className="p-1 hover:bg-gray-200 rounded">صورة</button>
                    </div>
                    <textarea
                      className="w-full p-4 min-h-[200px] border-0"
                      placeholder="أدخل محتوى صفحة من نحن هنا..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>الأسئلة الشائعة</CardTitle>
              <CardDescription>تعديل الأسئلة الشائعة المعروضة في الموقع</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                سيتم تطوير هذا القسم قريباً
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات الإشعارات</CardTitle>
              <CardDescription>إعدادات الإشعارات والرسائل الآلية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                سيتم تطوير هذا القسم قريباً
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

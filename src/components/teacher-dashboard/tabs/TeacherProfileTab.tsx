
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FileUploader } from "../FileUploader";

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "الاسم مطلوب" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  phone: z.string().min(8, { message: "رقم الهاتف غير صالح" }),
  address: z.string().min(1, { message: "العنوان مطلوب" }),
  specialization: z.string().min(1, { message: "التخصص مطلوب" }),
  bio: z.string().min(10, { message: "السيرة الذاتية مطلوبة (10 أحرف على الأقل)" }),
});

export const TeacherProfileTab = () => {
  // Mock data for certificates - in a real app this would be from API
  const certificates = [
    { id: 1, name: "ماجستير في الرياضيات", issuer: "جامعة القاهرة", year: 2018 },
    { id: 2, name: "دبلوم في أساليب التدريس", issuer: "الجامعة العربية المفتوحة", year: 2020 },
    { id: 3, name: "شهادة تدريبية في التعليم عن بعد", issuer: "منصة إدراك", year: 2022 }
  ];

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "د. أحمد محمد",
      email: "ahmed@example.com",
      phone: "+965123456789",
      address: "الكويت - حولي",
      specialization: "أستاذ الرياضيات للمرحلة الثانوية والجامعية",
      bio: "أستاذ رياضيات بخبرة 15 عام في تدريس الرياضيات لجميع المراحل الدراسية. حاصل على ماجستير في الرياضيات وعدة شهادات في أساليب التدريس والتعليم عن بعد."
    },
  });

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    console.log(values);
    // Here you would normally send this to the API
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">البيانات الشخصية</h3>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">الاسم</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">البريد الإلكتروني</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">الهاتف</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">العنوان</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="specialization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">التخصص</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">نبذة شخصية</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[120px]" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90">
                    حفظ التغييرات
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">الشهادات والمؤهلات</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {certificates.map((certificate) => (
                <div key={certificate.id} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-semibold">{certificate.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {certificate.issuer} - {certificate.year}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    عرض
                  </Button>
                </div>
              ))}

              <div className="flex justify-end mt-4">
                <Button variant="outline" className="border-brand-blue text-brand-blue">
                  إضافة شهادة جديدة
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">الصورة الشخصية</h3>
          </CardHeader>
          <CardContent>
            <FileUploader 
              accept="image/*" 
              maxSize={5}
              label="قم بتحميل صورة شخصية"
              currentFile="/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">وثائق إضافية</h3>
          </CardHeader>
          <CardContent>
            <FileUploader 
              accept=".pdf,.doc,.docx" 
              maxSize={10}
              label="قم بتحميل مستندات داعمة"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">إعدادات الحساب</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">تغيير كلمة المرور</span>
              <Button variant="outline" size="sm">
                تعديل
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-semibold">إشعارات البريد الإلكتروني</span>
              <Button variant="outline" size="sm">
                إعدادات
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-semibold">حذف الحساب</span>
              <Button variant="destructive" size="sm">
                حذف
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

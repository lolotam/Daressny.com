
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FileUploader } from "@/components/teacher-dashboard/FileUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "الاسم مطلوب" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  phone: z.string().min(8, { message: "رقم الهاتف غير صالح" }),
  address: z.string().min(1, { message: "العنوان مطلوب" }),
  school: z.string().min(1, { message: "اسم المدرسة مطلوب" }),
  grade: z.string().min(1, { message: "المرحلة الدراسية مطلوبة" }),
});

export const StudentProfileTab = () => {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "محمد علي",
      email: "mohamed@example.com",
      phone: "+965123456789",
      address: "الكويت - السالمية",
      school: "مدرسة السالمية الثانوية للبنين",
      grade: "الصف الحادي عشر - علمي",
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="school"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">المدرسة</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="grade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">الصف / المرحلة الدراسية</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

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
            <h3 className="text-xl font-bold">المواد الدراسية</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full">رياضيات</div>
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full">علوم</div>
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full">فيزياء</div>
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full">كيمياء</div>
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full">لغة إنجليزية</div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" className="border-brand-blue text-brand-blue">
                  تحديث المواد الدراسية
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
              currentFile="/lovable-uploads/829da1c5-f204-48e2-b7c8-da3464cee845.png"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">معلومات ولي الأمر</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm text-gray-600">الاسم</label>
                <p className="font-semibold">علي محمد</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">صلة القرابة</label>
                <p className="font-semibold">الأب</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm text-gray-600">رقم الهاتف</label>
                <p className="font-semibold">+965 9876 5432</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">البريد الإلكتروني</label>
                <p className="font-semibold">ali@example.com</p>
              </div>
            </div>

            <div className="flex justify-end mt-2">
              <Button variant="outline" size="sm">
                تعديل
              </Button>
            </div>
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

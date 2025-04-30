
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

const parentFormSchema = z.object({
  name: z.string().min(2, { message: "الاسم مطلوب" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  phone: z.string().min(8, { message: "رقم الهاتف غير صالح" }),
  relation: z.string().min(1, { message: "صلة القرابة مطلوبة" }),
});

export const StudentParentControlTab = () => {
  const [accessSettings, setAccessSettings] = useState({
    viewGrades: true,
    viewSchedule: true,
    viewPayments: true,
    addCourses: false,
    cancelSessions: false,
  });

  const form = useForm<z.infer<typeof parentFormSchema>>({
    resolver: zodResolver(parentFormSchema),
    defaultValues: {
      name: "علي محمد",
      email: "ali@example.com",
      phone: "+965 9876 5432",
      relation: "الأب",
    },
  });

  function onSubmit(values: z.infer<typeof parentFormSchema>) {
    console.log(values);
    // Here you would normally send this to the API
  }

  // Mock activity log - in a real app this would come from API
  const activityLog = [
    {
      id: 1,
      date: "2023-08-20",
      time: "14:30",
      action: "تغيير كلمة المرور",
      user: "ولي الأمر (علي محمد)",
    },
    {
      id: 2,
      date: "2023-08-15",
      time: "10:15",
      action: "عرض جدول الحصص",
      user: "ولي الأمر (علي محمد)",
    },
    {
      id: 3,
      date: "2023-08-10",
      time: "18:45",
      action: "عرض التقييمات",
      user: "ولي الأمر (علي محمد)",
    },
    {
      id: 4,
      date: "2023-08-05",
      time: "09:20",
      action: "إضافة حصة جديدة",
      user: "الطالب (محمد علي)",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">بيانات ولي الأمر</h3>
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
                        <FormLabel className="font-semibold">اسم ولي الأمر</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="relation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">صلة القرابة</FormLabel>
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
            <h3 className="text-xl font-bold">سجل النشاطات</h3>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>التاريخ</TableHead>
                  <TableHead>الوقت</TableHead>
                  <TableHead>الإجراء</TableHead>
                  <TableHead>المستخدم</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activityLog.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>{new Date(log.date).toLocaleDateString('ar-EG')}</TableCell>
                    <TableCell>{log.time}</TableCell>
                    <TableCell>{log.action}</TableCell>
                    <TableCell>{log.user}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">صلاحيات التحكم</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">عرض التقييمات والدرجات</div>
                  <div className="text-sm text-gray-600">السماح لولي الأمر بعرض تقييمات ودرجات الطالب</div>
                </div>
                <Switch 
                  checked={accessSettings.viewGrades} 
                  onCheckedChange={(checked) => 
                    setAccessSettings({...accessSettings, viewGrades: checked})
                  } 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">عرض جدول الحصص</div>
                  <div className="text-sm text-gray-600">السماح لولي الأمر بعرض جدول حصص الطالب</div>
                </div>
                <Switch 
                  checked={accessSettings.viewSchedule} 
                  onCheckedChange={(checked) => 
                    setAccessSettings({...accessSettings, viewSchedule: checked})
                  } 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">عرض المدفوعات</div>
                  <div className="text-sm text-gray-600">السماح لولي الأمر بعرض تفاصيل المدفوعات</div>
                </div>
                <Switch 
                  checked={accessSettings.viewPayments} 
                  onCheckedChange={(checked) => 
                    setAccessSettings({...accessSettings, viewPayments: checked})
                  } 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">إضافة كورسات جديدة</div>
                  <div className="text-sm text-gray-600">السماح لولي الأمر بإضافة كورسات للطالب</div>
                </div>
                <Switch 
                  checked={accessSettings.addCourses} 
                  onCheckedChange={(checked) => 
                    setAccessSettings({...accessSettings, addCourses: checked})
                  } 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">إلغاء الحصص</div>
                  <div className="text-sm text-gray-600">السماح لولي الأمر بإلغاء حصص الطالب</div>
                </div>
                <Switch 
                  checked={accessSettings.cancelSessions} 
                  onCheckedChange={(checked) => 
                    setAccessSettings({...accessSettings, cancelSessions: checked})
                  } 
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">إشعارات ولي الأمر</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>عند حجز حصة جديدة</div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>عند إضافة تقييم جديد</div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>عند إتمام الدفع</div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>التقارير الأسبوعية</div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">دعوة ولي أمر إضافي</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">البريد الإلكتروني</label>
                  <Input placeholder="أدخل البريد الإلكتروني" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">صلة القرابة</label>
                  <Input placeholder="مثال: الأم، الأب، الوصي" />
                </div>
              </div>
              
              <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                إرسال دعوة
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

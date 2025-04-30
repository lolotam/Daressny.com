
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, Plus, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";

export const AdminContentManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إدارة المحتوى</h1>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> إضافة محتوى جديد
        </Button>
      </div>
      
      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
          <TabsTrigger value="courses">الكورسات</TabsTrigger>
          <TabsTrigger value="videos">الفيديوهات</TabsTrigger>
          <TabsTrigger value="pending">قيد المراجعة</TabsTrigger>
        </TabsList>
        
        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>الكورسات التعليمية</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="بحث عن كورس..."
                      className="pl-10 pr-4 py-2 border rounded-md w-64"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardDescription>إدارة الكورسات التعليمية المتاحة على المنصة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>عنوان الكورس</TableHead>
                      <TableHead>المادة</TableHead>
                      <TableHead>المدرس</TableHead>
                      <TableHead>عدد الدروس</TableHead>
                      <TableHead>السعر</TableHead>
                      <TableHead>الحالة</TableHead>
                      <TableHead>إجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">الرياضيات للصف الثاني عشر</TableCell>
                      <TableCell>
                        <Badge variant="outline">الرياضيات</Badge>
                      </TableCell>
                      <TableCell>أحمد محمد</TableCell>
                      <TableCell>12 درس</TableCell>
                      <TableCell>50 د.ك</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">نشط</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">عرض</Button>
                          <Button variant="outline" size="sm">تعديل</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">الفيزياء - الفصل الثاني</TableCell>
                      <TableCell>
                        <Badge variant="outline">الفيزياء</Badge>
                      </TableCell>
                      <TableCell>محمد علي</TableCell>
                      <TableCell>15 درس</TableCell>
                      <TableCell>65 د.ك</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">نشط</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">عرض</Button>
                          <Button variant="outline" size="sm">تعديل</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>الفيديوهات التعليمية</CardTitle>
              <CardDescription>إدارة الفيديوهات التعليمية المنشورة على المنصة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                سيتم تطوير هذا القسم قريباً
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>محتوى قيد المراجعة</CardTitle>
              <CardDescription>مراجعة المحتوى المضاف من قبل المدرسين</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                لا يوجد محتوى قيد المراجعة حالياً
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

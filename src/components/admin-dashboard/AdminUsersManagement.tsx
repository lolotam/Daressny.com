
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, UserPlus, Mail, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

// Sample data for students
const studentsData = [
  {
    id: "s1",
    name: "عبدالله السالم",
    email: "abdullah@example.com",
    phone: "96560123456",
    registeredDate: "2023-03-10",
    sessions: 12,
    status: "active",
  },
  {
    id: "s2",
    name: "نورة الخالد",
    email: "noura@example.com",
    phone: "96561234567",
    registeredDate: "2023-03-15",
    sessions: 8,
    status: "active",
  },
  {
    id: "s3",
    name: "فهد العبدالله",
    email: "fahad@example.com",
    phone: "96562345678",
    registeredDate: "2023-04-05",
    sessions: 5,
    status: "inactive",
  },
];

export const AdminUsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredStudents = studentsData.filter(student => 
    student.name.includes(searchTerm) ||
    student.email.includes(searchTerm) ||
    student.phone.includes(searchTerm)
  );
  
  // Helper function to show the status badge with appropriate color
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">نشط</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">غير نشط</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إدارة المستخدمين</h1>
        <Button className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" /> إضافة مستخدم
        </Button>
      </div>
      
      <Tabs defaultValue="students" className="w-full">
        <TabsList className="grid grid-cols-2 w-full max-w-md mb-6">
          <TabsTrigger value="students">الطلاب</TabsTrigger>
          <TabsTrigger value="parents">أولياء الأمور</TabsTrigger>
        </TabsList>
        
        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>قائمة الطلاب</CardTitle>
                  <CardDescription>إدارة حسابات الطلاب المسجلين في المنصة</CardDescription>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="بحث عن طالب..."
                    className="pl-10 pr-4 py-2 border rounded-md w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {filteredStudents.length === 0 ? (
                <div className="py-8 text-center text-gray-500">
                  لا يوجد طلاب مطابقين لمعايير البحث
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>الاسم</TableHead>
                        <TableHead>البريد الإلكتروني</TableHead>
                        <TableHead>رقم الهاتف</TableHead>
                        <TableHead>تاريخ التسجيل</TableHead>
                        <TableHead>عدد الحصص</TableHead>
                        <TableHead>الحالة</TableHead>
                        <TableHead>إجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStudents.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">{student.name}</TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>{student.phone}</TableCell>
                          <TableCell>{new Date(student.registeredDate).toLocaleDateString("ar-AE")}</TableCell>
                          <TableCell>{student.sessions}</TableCell>
                          <TableCell>{getStatusBadge(student.status)}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <Mail className="h-3 w-3" /> رسالة
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="parents" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>أولياء الأمور</CardTitle>
              <CardDescription>إدارة حسابات أولياء الأمور المسجلين في المنصة</CardDescription>
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

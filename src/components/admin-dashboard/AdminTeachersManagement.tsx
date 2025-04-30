
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, UserCheck, UserX, Edit, Trash2 } from "lucide-react";
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger 
} from "@/components/ui/dialog";

// Sample data for teachers
const teacherRequests = [
  {
    id: "t1",
    name: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "96550123456",
    subjects: ["الرياضيات", "الفيزياء"],
    experience: "5 سنوات",
    status: "pending",
    date: "2023-04-15",
  },
  {
    id: "t2",
    name: "سارة العلي",
    email: "sara@example.com",
    phone: "96551234567",
    subjects: ["اللغة العربية", "التربية الإسلامية"],
    experience: "8 سنوات",
    status: "pending",
    date: "2023-04-14",
  },
];

const activeTeachers = [
  {
    id: "t3",
    name: "محمد علي",
    email: "mohammed@example.com",
    phone: "96559876543",
    subjects: ["الكيمياء", "الأحياء"],
    rating: 4.8,
    studentsCount: 24,
    status: "active",
  },
  {
    id: "t4",
    name: "فاطمة الخالد",
    email: "fatima@example.com",
    phone: "96557654321",
    subjects: ["اللغة الإنجليزية"],
    rating: 4.5,
    studentsCount: 18,
    status: "active",
  },
  {
    id: "t5",
    name: "يوسف العبدالله",
    email: "yousef@example.com",
    phone: "96552345678",
    subjects: ["الدراسات الاجتماعية", "التاريخ"],
    rating: 4.9,
    studentsCount: 32,
    status: "inactive",
  },
];

export const AdminTeachersManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewTeacherDetails, setViewTeacherDetails] = useState<any>(null);

  const handleApprove = (teacherId: string) => {
    console.log(`Approving teacher with ID: ${teacherId}`);
    // Implement actual approval logic here
  };

  const handleReject = (teacherId: string) => {
    console.log(`Rejecting teacher with ID: ${teacherId}`);
    // Implement actual rejection logic here
  };

  const handleToggleStatus = (teacherId: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    console.log(`Changing teacher ${teacherId} status to ${newStatus}`);
    // Implement actual status toggle logic here
  };

  const filteredRequests = teacherRequests.filter(
    teacher => teacher.name.includes(searchTerm) || 
              teacher.email.includes(searchTerm) || 
              teacher.subjects.some(subj => subj.includes(searchTerm))
  );

  const filteredTeachers = activeTeachers.filter(
    teacher => teacher.name.includes(searchTerm) || 
              teacher.email.includes(searchTerm) || 
              teacher.subjects.some(subj => subj.includes(searchTerm))
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إدارة المعلمين</h1>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="بحث عن معلم..."
            className="pl-10 pr-4 py-2 border rounded-md w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="requests" className="w-full">
        <TabsList className="grid grid-cols-2 w-full max-w-md mb-6">
          <TabsTrigger value="requests">طلبات الانضمام ({teacherRequests.length})</TabsTrigger>
          <TabsTrigger value="active">المعلمين ({activeTeachers.length})</TabsTrigger>
        </TabsList>

        {/* Requests Tab */}
        <TabsContent value="requests">
          <Card>
            <CardHeader>
              <CardTitle>طلبات انضمام جديدة</CardTitle>
              <CardDescription>مراجعة وإدارة طلبات الانضمام الجديدة من المعلمين</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredRequests.length === 0 ? (
                <div className="py-8 text-center text-gray-500">
                  لا توجد طلبات انضمام جديدة
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>الاسم</TableHead>
                        <TableHead>البريد الإلكتروني</TableHead>
                        <TableHead>المواد</TableHead>
                        <TableHead>الخبرة</TableHead>
                        <TableHead>تاريخ الطلب</TableHead>
                        <TableHead>إجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRequests.map((teacher) => (
                        <TableRow key={teacher.id}>
                          <TableCell className="font-medium">{teacher.name}</TableCell>
                          <TableCell>{teacher.email}</TableCell>
                          <TableCell>
                            {teacher.subjects.map((subject, idx) => (
                              <Badge key={idx} variant="outline" className="mr-1">
                                {subject}
                              </Badge>
                            ))}
                          </TableCell>
                          <TableCell>{teacher.experience}</TableCell>
                          <TableCell>{new Date(teacher.date).toLocaleDateString("ar-AE")}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={() => setViewTeacherDetails(teacher)}
                                  >
                                    عرض التفاصيل
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>تفاصيل طلب الانضمام</DialogTitle>
                                  </DialogHeader>
                                  {viewTeacherDetails && (
                                    <div className="space-y-4 mt-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm text-gray-500">الاسم</p>
                                          <p className="font-medium">{viewTeacherDetails.name}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-gray-500">البريد الإلكتروني</p>
                                          <p>{viewTeacherDetails.email}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-gray-500">الهاتف</p>
                                          <p>{viewTeacherDetails.phone}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-gray-500">تاريخ الطلب</p>
                                          <p>{new Date(viewTeacherDetails.date).toLocaleDateString("ar-AE")}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-gray-500">الخبرة</p>
                                          <p>{viewTeacherDetails.experience}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-gray-500">المواد</p>
                                          <div className="flex flex-wrap gap-1 mt-1">
                                            {viewTeacherDetails.subjects.map((subject: string, idx: number) => (
                                              <Badge key={idx} variant="outline">
                                                {subject}
                                              </Badge>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex gap-2 justify-end mt-6">
                                        <Button
                                          variant="outline"
                                          onClick={() => handleReject(viewTeacherDetails.id)}
                                          className="flex items-center gap-1"
                                        >
                                          <UserX className="h-4 w-4" /> رفض
                                        </Button>
                                        <Button
                                          onClick={() => handleApprove(viewTeacherDetails.id)}
                                          className="flex items-center gap-1"
                                        >
                                          <UserCheck className="h-4 w-4" /> قبول
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              <Button 
                                variant="default" 
                                size="sm" 
                                onClick={() => handleApprove(teacher.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <UserCheck className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm" 
                                onClick={() => handleReject(teacher.id)}
                              >
                                <UserX className="h-4 w-4" />
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

        {/* Active Teachers Tab */}
        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>قائمة المعلمين</CardTitle>
              <CardDescription>إدارة المعلمين النشطين في المنصة</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredTeachers.length === 0 ? (
                <div className="py-8 text-center text-gray-500">
                  لا يوجد معلمين مطابقين لمعايير البحث
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>الاسم</TableHead>
                        <TableHead>البريد الإلكتروني</TableHead>
                        <TableHead>المواد</TableHead>
                        <TableHead>التقييم</TableHead>
                        <TableHead>عدد الطلاب</TableHead>
                        <TableHead>الحالة</TableHead>
                        <TableHead>إجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTeachers.map((teacher) => (
                        <TableRow key={teacher.id}>
                          <TableCell className="font-medium">{teacher.name}</TableCell>
                          <TableCell>{teacher.email}</TableCell>
                          <TableCell>
                            {teacher.subjects.map((subject, idx) => (
                              <Badge key={idx} variant="outline" className="mr-1">
                                {subject}
                              </Badge>
                            ))}
                          </TableCell>
                          <TableCell>⭐ {teacher.rating}</TableCell>
                          <TableCell>{teacher.studentsCount}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={teacher.status === "active" ? "default" : "secondary"}
                              className={teacher.status === "active" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-gray-100 text-gray-800"
                              }
                            >
                              {teacher.status === "active" ? "نشط" : "غير نشط"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => setViewTeacherDetails(teacher)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleToggleStatus(teacher.id, teacher.status)}
                                className={
                                  teacher.status === "active" 
                                    ? "text-amber-600 border-amber-600 hover:bg-amber-50" 
                                    : "text-green-600 border-green-600 hover:bg-green-50"
                                }
                              >
                                {teacher.status === "active" ? "تعطيل" : "تفعيل"}
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="text-red-600 border-red-600 hover:bg-red-50"
                              >
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
      </Tabs>
    </div>
  );
};

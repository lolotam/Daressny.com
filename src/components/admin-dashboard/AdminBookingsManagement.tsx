
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
import { Search, Filter, Calendar } from "lucide-react";
import { useState } from "react";

// Sample data for bookings
const bookingsData = [
  {
    id: "b1",
    studentName: "عبدالله السالم",
    teacherName: "أحمد محمد",
    subject: "الرياضيات",
    date: "2023-05-10",
    time: "15:00-16:00",
    status: "completed",
    paymentStatus: "paid",
  },
  {
    id: "b2",
    studentName: "نورة الخالد",
    teacherName: "سارة العلي",
    subject: "اللغة العربية",
    date: "2023-05-12",
    time: "17:00-18:00",
    status: "upcoming",
    paymentStatus: "paid",
  },
  {
    id: "b3",
    studentName: "فهد العبدالله",
    teacherName: "محمد علي",
    subject: "الكيمياء",
    date: "2023-05-14",
    time: "16:00-17:00",
    status: "cancelled",
    paymentStatus: "refunded",
  },
  {
    id: "b4",
    studentName: "مريم محمد",
    teacherName: "فاطمة الخالد",
    subject: "اللغة الإنجليزية",
    date: "2023-05-15",
    time: "18:00-19:00",
    status: "upcoming",
    paymentStatus: "pending",
  },
];

export const AdminBookingsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredBookings = bookingsData.filter(booking => 
    booking.studentName.includes(searchTerm) ||
    booking.teacherName.includes(searchTerm) ||
    booking.subject.includes(searchTerm)
  );
  
  // Helper function to show the status badge with appropriate color
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">مكتملة</Badge>;
      case "upcoming":
        return <Badge className="bg-blue-100 text-blue-800">قادمة</Badge>;
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">ملغاة</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  // Helper function to show payment status badge
  const getPaymentStatusBadge = (status: string) => {
    switch(status) {
      case "paid":
        return <Badge className="bg-emerald-100 text-emerald-800">مدفوع</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">قيد الانتظار</Badge>;
      case "refunded":
        return <Badge className="bg-amber-100 text-amber-800">مسترجع</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إدارة الحجوزات</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> تصفية حسب التاريخ
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>جميع الحجوزات</CardTitle>
              <CardDescription>إدارة ومتابعة جميع الحصص المحجوزة على المنصة</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="بحث عن حجز..."
                  className="pl-10 pr-4 py-2 border rounded-md w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredBookings.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              لا توجد حجوزات مطابقة لمعايير البحث
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>رقم الحجز</TableHead>
                    <TableHead>الطالب</TableHead>
                    <TableHead>المدرس</TableHead>
                    <TableHead>المادة</TableHead>
                    <TableHead>التاريخ</TableHead>
                    <TableHead>الوقت</TableHead>
                    <TableHead>حالة الحصة</TableHead>
                    <TableHead>حالة الدفع</TableHead>
                    <TableHead>إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-mono">{booking.id}</TableCell>
                      <TableCell>{booking.studentName}</TableCell>
                      <TableCell>{booking.teacherName}</TableCell>
                      <TableCell>{booking.subject}</TableCell>
                      <TableCell>{new Date(booking.date).toLocaleDateString("ar-AE")}</TableCell>
                      <TableCell>{booking.time}</TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell>{getPaymentStatusBadge(booking.paymentStatus)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">التفاصيل</Button>
                          {booking.status === "upcoming" && (
                            <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                              إلغاء
                            </Button>
                          )}
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
    </div>
  );
};


import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format, addHours, setHours, setMinutes, addDays, isSameDay, subDays } from "date-fns";
import { ar } from "date-fns/locale";
import { CalendarCheck, Star, Video } from "lucide-react";
import { useState } from "react";

export const StudentSessionsTab = () => {
  const [date, setDate] = useState<Date>(new Date());
  
  // Mock sessions data - in a real app this would come from API
  const sessions = [
    {
      id: 1,
      date: subDays(new Date(), 2),
      startTime: "10:00",
      endTime: "11:00",
      subject: "رياضيات",
      teacherName: "د. أحمد محمد",
      teacherAvatar: "/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png",
      status: "completed",
      payment: "paid",
      rated: true
    },
    {
      id: 2,
      date: subDays(new Date(), 1),
      startTime: "14:00",
      endTime: "15:00",
      subject: "فيزياء",
      teacherName: "أ. خالد العلي",
      teacherAvatar: "/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png",
      status: "completed",
      payment: "paid",
      rated: false
    },
    {
      id: 3,
      date: new Date(),
      startTime: "16:00",
      endTime: "17:00",
      subject: "لغة إنجليزية",
      teacherName: "أ. سارة الأحمد",
      teacherAvatar: "/lovable-uploads/829da1c5-f204-48e2-b7c8-da3464cee845.png",
      status: "upcoming",
      payment: "paid",
      rated: false
    },
    {
      id: 4,
      date: addDays(new Date(), 1),
      startTime: "11:00",
      endTime: "12:00",
      subject: "كيمياء",
      teacherName: "د. فاطمة السالم",
      teacherAvatar: "/lovable-uploads/ca1d249f-fbb9-4b12-89f9-917203387e2c.png",
      status: "upcoming",
      payment: "unpaid",
      rated: false
    },
    {
      id: 5,
      date: addDays(new Date(), 3),
      startTime: "13:00",
      endTime: "14:00",
      subject: "رياضيات",
      teacherName: "د. أحمد محمد",
      teacherAvatar: "/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png",
      status: "upcoming",
      payment: "unpaid",
      rated: false
    }
  ];

  // Filter sessions based on selected date
  const filteredSessions = sessions.filter(session => 
    isSameDay(new Date(session.date), date)
  );

  // Group sessions by status
  const upcomingSessions = sessions.filter(session => session.status === "upcoming");
  const completedSessions = sessions.filter(session => session.status === "completed");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-xl font-bold">جدول الحصص</h3>
          </CardHeader>
          
          <CardContent>
            {filteredSessions.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>المعلم</TableHead>
                    <TableHead>المادة</TableHead>
                    <TableHead>الوقت</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الدفع</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSessions.map((session) => (
                    <TableRow key={session.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <img 
                            src={session.teacherAvatar} 
                            alt={session.teacherName} 
                            className="w-8 h-8 rounded-full" 
                          />
                          <span>{session.teacherName}</span>
                        </div>
                      </TableCell>
                      <TableCell>{session.subject}</TableCell>
                      <TableCell>
                        {session.startTime} - {session.endTime}
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          session.status === 'completed' ? 'bg-green-100 text-green-800' :
                          session.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {session.status === 'completed' ? 'مكتملة' :
                           session.status === 'upcoming' ? 'قادمة' : 'ملغاة'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          session.payment === 'paid' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {session.payment === 'paid' ? 'مدفوع' : 'غير مدفوع'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {session.status === 'completed' && !session.rated && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="flex items-center"
                            >
                              <Star className="w-4 h-4 ml-1" />
                              تقييم
                            </Button>
                          )}
                          {session.status === 'upcoming' && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="flex items-center"
                            >
                              <Video className="w-4 h-4 ml-1" />
                              دخول
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-10">
                <CalendarCheck className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">لا توجد حصص مسجلة في هذا اليوم</p>
                <Button className="mt-4 bg-brand-blue hover:bg-brand-blue/90">
                  حجز حصة جديدة
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">تاريخ الحصص المكتملة</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {completedSessions.length > 0 ? (
                completedSessions.map((session) => (
                  <div key={session.id} className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={session.teacherAvatar} 
                        alt={session.teacherName} 
                        className="w-12 h-12 rounded-full" 
                      />
                      <div>
                        <div className="font-semibold">{session.teacherName}</div>
                        <div className="text-sm text-gray-600">{session.subject}</div>
                        <div className="text-sm text-gray-500">
                          {format(new Date(session.date), 'EEEE, d MMMM yyyy', { locale: ar })}
                          {' '} - {' '} 
                          {session.startTime} - {session.endTime}
                        </div>
                      </div>
                    </div>
                    <div>
                      {session.rated ? (
                        <div className="flex text-yellow-500">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <Star key={n} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      ) : (
                        <Button variant="outline" size="sm">
                          <Star className="w-4 h-4 ml-1" />
                          تقييم
                        </Button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-500">
                  لا توجد حصص مكتملة بعد
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">التقويم</h3>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => newDate && setDate(newDate)}
              className="rounded-md p-3 pointer-events-auto"
              locale={ar}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">الحصص القادمة</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingSessions.length > 0 ? (
                upcomingSessions.slice(0, 3).map((session) => (
                  <div key={session.id} className="flex items-center justify-between border-b pb-3">
                    <div>
                      <div className="font-semibold">{session.subject}</div>
                      <div className="text-sm text-gray-600">{session.teacherName}</div>
                      <div className="text-sm text-gray-500">
                        {format(new Date(session.date), 'EEEE, d MMMM', { locale: ar })}
                        {' '} - {' '} 
                        {session.startTime}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      تفاصيل
                    </Button>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-gray-500">
                  لا توجد حصص قادمة
                </div>
              )}
              
              <div className="pt-2">
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  حجز حصة جديدة
                </Button>
              </div>
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
                <span>إجمالي الحصص:</span>
                <span className="font-bold">{sessions.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>الحصص المكتملة:</span>
                <span className="font-bold">{sessions.filter(s => s.status === 'completed').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>الحصص القادمة:</span>
                <span className="font-bold">{sessions.filter(s => s.status === 'upcoming').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>الحصص الملغاة:</span>
                <span className="font-bold">{sessions.filter(s => s.status === 'cancelled').length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

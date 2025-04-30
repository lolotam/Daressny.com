
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format, addHours, setHours, setMinutes, addDays, isSameDay } from "date-fns";
import { ar } from "date-fns/locale";
import { CalendarPlus, CalendarX, Clock, Edit2, Mail } from "lucide-react";
import { useState } from "react";
import { AddAvailabilityForm } from "../forms/AddAvailabilityForm";

export const TeacherScheduleTab = () => {
  const [date, setDate] = useState<Date>(new Date());
  // Mock schedule data - in a real app this would come from API
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      date: new Date(),
      startTime: "10:00",
      endTime: "11:00",
      status: "available", // available, booked, completed, cancelled
      studentName: null,
      studentEmail: null
    },
    {
      id: 2,
      date: new Date(),
      startTime: "14:00",
      endTime: "15:00",
      status: "booked",
      studentName: "محمد علي",
      studentEmail: "mohamed@example.com"
    },
    {
      id: 3,
      date: addDays(new Date(), 1),
      startTime: "12:00",
      endTime: "13:00",
      status: "available",
      studentName: null,
      studentEmail: null
    },
    {
      id: 4,
      date: addDays(new Date(), 2),
      startTime: "16:00",
      endTime: "17:00",
      status: "available",
      studentName: null,
      studentEmail: null
    }
  ]);

  // Filter schedule based on selected date
  const filteredSchedule = schedule.filter(slot => 
    isSameDay(new Date(slot.date), date)
  );

  // Function to handle cancelling a slot
  const handleCancel = (id: number) => {
    setSchedule(schedule.map(slot => 
      slot.id === id ? { ...slot, status: "available", studentName: null, studentEmail: null } : slot
    ));
  };

  // Function to handle adding a new availability slot
  const handleAddAvailability = (newSlot: any) => {
    setSchedule([...schedule, {
      id: schedule.length + 1,
      date: newSlot.date,
      startTime: format(newSlot.startTime, 'HH:mm'),
      endTime: format(newSlot.endTime, 'HH:mm'),
      status: "available",
      studentName: null,
      studentEmail: null
    }]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-xl font-bold">جدول المواعيد</h3>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-brand-blue hover:bg-brand-blue/90">
                  <CalendarPlus className="w-4 h-4 ml-2" />
                  إضافة وقت جديد
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>إضافة وقت متاح جديد</DialogTitle>
                </DialogHeader>
                <AddAvailabilityForm onAdd={handleAddAvailability} />
              </DialogContent>
            </Dialog>
          </CardHeader>
          
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الوقت</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الطالب</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSchedule.length > 0 ? (
                    filteredSchedule.map((slot) => (
                      <TableRow key={slot.id}>
                        <TableCell>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 ml-1 text-gray-500" />
                            <span>{slot.startTime} - {slot.endTime}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            slot.status === 'available' ? 'bg-green-100 text-green-800' :
                            slot.status === 'booked' ? 'bg-blue-100 text-blue-800' :
                            slot.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {slot.status === 'available' ? 'متاح' :
                             slot.status === 'booked' ? 'محجوز' :
                             slot.status === 'completed' ? 'مكتمل' : 'ملغي'}
                          </span>
                        </TableCell>
                        <TableCell>
                          {slot.studentName || '-'}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {slot.status === 'booked' && (
                              <>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => alert('سيتم إرسال إيميل للطالب')}
                                >
                                  <Mail className="w-4 h-4" />
                                </Button>
                                <Button 
                                  variant="destructive" 
                                  size="sm"
                                  onClick={() => handleCancel(slot.id)}
                                >
                                  <CalendarX className="w-4 h-4" />
                                </Button>
                              </>
                            )}
                            {slot.status === 'available' && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => alert('تعديل الوقت المتاح')}
                              >
                                <Edit2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-4">
                        لا توجد مواعيد لهذا اليوم
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
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
            <h3 className="text-xl font-bold">إحصائيات المواعيد</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>المواعيد المتاحة:</span>
                <span className="font-bold">{schedule.filter(s => s.status === 'available').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>المواعيد المحجوزة:</span>
                <span className="font-bold">{schedule.filter(s => s.status === 'booked').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>المواعيد المكتملة:</span>
                <span className="font-bold">{schedule.filter(s => s.status === 'completed').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>المواعيد الملغاة:</span>
                <span className="font-bold">{schedule.filter(s => s.status === 'cancelled').length}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">إشعارات البريد الإلكتروني</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>عند حجز موعد جديد</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex justify-between items-center">
                <span>قبل الموعد بساعة</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex justify-between items-center">
                <span>عند إلغاء موعد</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addMinutes } from "date-fns";
import { ar } from "date-fns/locale";
import { useState } from "react";

const availabilityFormSchema = z.object({
  date: z.date({
    required_error: "يرجى تحديد التاريخ",
  }),
  startHour: z.string().min(1, "يرجى تحديد الساعة"),
  startMinute: z.string().min(1, "يرجى تحديد الدقائق"),
  durationMinutes: z.string().min(1, "يرجى تحديد مدة الجلسة"),
});

type AvailabilityFormValues = z.infer<typeof availabilityFormSchema>;

interface AddAvailabilityFormProps {
  onAdd: (availability: any) => void;
}

export const AddAvailabilityForm = ({ onAdd }: AddAvailabilityFormProps) => {
  const [startTime, setStartTime] = useState<Date | null>(null);

  const form = useForm<AvailabilityFormValues>({
    resolver: zodResolver(availabilityFormSchema),
    defaultValues: {
      startHour: "",
      startMinute: "",
      durationMinutes: "60",
    },
  });

  const onSubmit = (data: AvailabilityFormValues) => {
    // Create start time Date object
    const startTime = new Date(data.date);
    startTime.setHours(parseInt(data.startHour, 10), parseInt(data.startMinute, 10), 0);
    
    // Create end time by adding duration
    const endTime = addMinutes(startTime, parseInt(data.durationMinutes, 10));
    
    // Pass the data to parent component
    onAdd({
      date: data.date,
      startTime,
      endTime,
      durationMinutes: parseInt(data.durationMinutes, 10),
    });
    
    // Reset form
    form.reset();
  };

  // Generate hours and minutes for select dropdowns
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = ['00', '15', '30', '45'];
  const durations = [
    { value: '30', label: '30 دقيقة' },
    { value: '45', label: '45 دقيقة' },
    { value: '60', label: 'ساعة واحدة' },
    { value: '90', label: 'ساعة ونصف' },
    { value: '120', label: 'ساعتين' }
  ];

  // Calculate and display the generated time slot
  const calculateTimeSlot = () => {
    const values = form.getValues();
    if (!values.date || !values.startHour || !values.startMinute || !values.durationMinutes) {
      return null;
    }

    const startDate = new Date(values.date);
    startDate.setHours(parseInt(values.startHour, 10), parseInt(values.startMinute, 10), 0);
    
    const endDate = addMinutes(startDate, parseInt(values.durationMinutes, 10));
    
    setStartTime(startDate);
    
    return {
      start: format(startDate, 'hh:mm a', { locale: ar }),
      end: format(endDate, 'hh:mm a', { locale: ar }),
      date: format(values.date, 'EEEE, d MMMM yyyy', { locale: ar })
    };
  };

  const timeSlot = calculateTimeSlot();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-semibold">التاريخ</FormLabel>
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date) => {
                  field.onChange(date);
                  calculateTimeSlot();
                }}
                disabled={(date) => date < new Date()}
                locale={ar}
                className="rounded-md p-3 pointer-events-auto"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="startHour"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">الساعة</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value);
                    calculateTimeSlot();
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الساعة" />
                  </SelectTrigger>
                  <SelectContent>
                    {hours.map((hour) => (
                      <SelectItem key={hour} value={hour}>{hour}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="startMinute"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">الدقائق</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value);
                    calculateTimeSlot();
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الدقائق" />
                  </SelectTrigger>
                  <SelectContent>
                    {minutes.map((minute) => (
                      <SelectItem key={minute} value={minute}>{minute}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="durationMinutes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">مدة الجلسة</FormLabel>
              <Select
                value={field.value}
                onValueChange={(value) => {
                  field.onChange(value);
                  calculateTimeSlot();
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر المدة" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map((duration) => (
                    <SelectItem key={duration.value} value={duration.value}>
                      {duration.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {timeSlot && (
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-semibold mb-2">ملخص الوقت المتاح</h4>
            <p className="mb-1">
              <strong>اليوم والتاريخ:</strong> {timeSlot.date}
            </p>
            <p>
              <strong>الوقت:</strong> {timeSlot.start} - {timeSlot.end}
            </p>
          </div>
        )}

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline">إلغاء</Button>
          <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90">
            إضافة الوقت
          </Button>
        </div>
      </form>
    </Form>
  );
};

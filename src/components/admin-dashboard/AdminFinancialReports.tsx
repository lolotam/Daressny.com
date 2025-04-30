
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer, 
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";

// Sample data for financial reports
const revenueData = [
  { month: "يناير", revenue: 12000, sessions: 180 },
  { month: "فبراير", revenue: 14000, sessions: 200 },
  { month: "مارس", revenue: 16000, sessions: 230 },
  { month: "أبريل", revenue: 18000, sessions: 250 },
  { month: "مايو", revenue: 21000, sessions: 280 },
  { month: "يونيو", revenue: 19000, sessions: 260 },
];

const paymentSourceData = [
  { name: "كي نت", value: 55 },
  { name: "بطاقة ائتمان", value: 30 },
  { name: "تحويل بنكي", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const topTeachersData = [
  {
    id: "t1",
    name: "أحمد محمد",
    subject: "الرياضيات",
    sessions: 45,
    revenue: 2250,
    commission: 450,
  },
  {
    id: "t2",
    name: "سارة العلي",
    subject: "اللغة العربية",
    sessions: 38,
    revenue: 1900,
    commission: 380,
  },
  {
    id: "t3",
    name: "محمد علي",
    subject: "الكيمياء",
    sessions: 32,
    revenue: 1600,
    commission: 320,
  },
];

export const AdminFinancialReports = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">التقارير المالية</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> تحديد الفترة
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" /> تصدير التقرير
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الإيرادات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">96,000 د.ك</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+15%</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">عدد الحصص</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+8%</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">متوسط سعر الحصة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">45 د.ك</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+3%</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-2 w-full max-w-md mb-6">
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="teachers">تقرير المدرسين</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>الإيرادات الشهرية</CardTitle>
                <CardDescription>تحليل الإيرادات شهرياً</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ChartContainer
                    config={{
                      revenue: {
                        label: "الإيرادات",
                        color: "#2563eb",
                      },
                      sessions: {
                        label: "عدد الحصص",
                        color: "#10b981",
                      }
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={revenueData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend content={<ChartLegendContent />} />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="revenue"
                          name="revenue"
                          stroke="#2563eb"
                          strokeWidth={2}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="sessions"
                          name="sessions"
                          stroke="#10b981"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>توزيع طرق الدفع</CardTitle>
                <CardDescription>تحليل مصادر الدفع المستخدمة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={paymentSourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {paymentSourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>تفاصيل المبيعات اليومية</CardTitle>
              <CardDescription>سجل آخر المعاملات المالية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>التاريخ</TableHead>
                      <TableHead>رقم العملية</TableHead>
                      <TableHead>المدرس</TableHead>
                      <TableHead>الطالب</TableHead>
                      <TableHead>نوع الخدمة</TableHead>
                      <TableHead>المبلغ</TableHead>
                      <TableHead>طريقة الدفع</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2023-05-15</TableCell>
                      <TableCell className="font-mono">#INV-12345</TableCell>
                      <TableCell>أحمد محمد</TableCell>
                      <TableCell>عبدالله السالم</TableCell>
                      <TableCell>حصة دراسية</TableCell>
                      <TableCell>50 د.ك</TableCell>
                      <TableCell>كي نت</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-05-15</TableCell>
                      <TableCell className="font-mono">#INV-12346</TableCell>
                      <TableCell>سارة العلي</TableCell>
                      <TableCell>نورة الخالد</TableCell>
                      <TableCell>كورس كامل</TableCell>
                      <TableCell>120 د.ك</TableCell>
                      <TableCell>بطاقة ائتمان</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-05-14</TableCell>
                      <TableCell className="font-mono">#INV-12347</TableCell>
                      <TableCell>محمد علي</TableCell>
                      <TableCell>فهد العبدالله</TableCell>
                      <TableCell>حصة دراسية</TableCell>
                      <TableCell>45 د.ك</TableCell>
                      <TableCell>كي نت</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="teachers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>أعلى المدرسين تحقيقاً للإيرادات</CardTitle>
              <CardDescription>المدرسون الأكثر نشاطاً وتحقيقاً للإيرادات</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 mb-6">
                <ChartContainer
                  config={{
                    revenue: {
                      label: "الإيرادات",
                      color: "#8b5cf6",
                    },
                    commission: {
                      label: "العمولة",
                      color: "#f59e0b",
                    }
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={topTeachersData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend content={<ChartLegendContent />} />
                      <Bar dataKey="revenue" name="revenue" fill="#8b5cf6" />
                      <Bar dataKey="commission" name="commission" fill="#f59e0b" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>المدرس</TableHead>
                      <TableHead>المادة</TableHead>
                      <TableHead>عدد الحصص</TableHead>
                      <TableHead>إجمالي الإيرادات</TableHead>
                      <TableHead>عمولة المنصة</TableHead>
                      <TableHead>صافي المعلم</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topTeachersData.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell className="font-medium">{teacher.name}</TableCell>
                        <TableCell>{teacher.subject}</TableCell>
                        <TableCell>{teacher.sessions}</TableCell>
                        <TableCell>{teacher.revenue} د.ك</TableCell>
                        <TableCell>{teacher.commission} د.ك</TableCell>
                        <TableCell>{teacher.revenue - teacher.commission} د.ك</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

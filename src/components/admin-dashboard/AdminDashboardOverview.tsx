
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { Users, BookOpen, Calendar, Video, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const monthlyData = [
  { name: "يناير", revenue: 12000, sessions: 180 },
  { name: "فبراير", revenue: 14000, sessions: 210 },
  { name: "مارس", revenue: 16000, sessions: 240 },
  { name: "أبريل", revenue: 18000, sessions: 260 },
  { name: "مايو", revenue: 21000, sessions: 290 },
  { name: "يونيو", revenue: 19000, sessions: 270 },
];

const userTypeData = [
  { name: "طلاب", count: 650 },
  { name: "معلمين", count: 120 },
  { name: "أولياء أمور", count: 250 },
  { name: "إداريين", count: 15 },
];

export const AdminDashboardOverview = () => {
  const statCards = [
    {
      title: "الطلاب",
      value: "650",
      change: "+12%",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      title: "المعلمين",
      value: "120",
      change: "+5%",
      icon: BookOpen,
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      title: "الحجوزات",
      value: "1,245",
      change: "+18%",
      icon: Calendar,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      title: "الكورسات",
      value: "85",
      change: "+7%",
      icon: Video,
      color: "text-amber-500",
      bgColor: "bg-amber-100",
    },
    {
      title: "الإيرادات الشهرية",
      value: "21,000 د.ك",
      change: "+15%",
      icon: TrendingUp,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
  ];
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">نظرة عامة</h1>
        <span className="text-sm text-gray-500">آخر تحديث: اليوم، 12:30 م</span>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statCards.map((card, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${card.bgColor}`}>
                <card.icon className={`h-5 w-5 ${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={card.change.startsWith("+") ? "text-green-600" : "text-red-600"}>
                  {card.change}
                </span>{" "}
                منذ الشهر الماضي
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>الإيرادات الشهرية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  revenue: {
                    label: "الإيرادات",
                    color: "#2563eb",
                  }
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip 
                      content={<ChartTooltipContent />} 
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      name="revenue"
                      stroke="#2563eb"
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
            <CardTitle>توزيع المستخدمين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  count: {
                    label: "العدد",
                    color: "#8b5cf6",
                  }
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={userTypeData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip 
                      content={<ChartTooltipContent />} 
                    />
                    <Bar
                      dataKey="count"
                      name="count"
                      fill="#8b5cf6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

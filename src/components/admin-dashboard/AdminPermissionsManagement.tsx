
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
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";

// Sample data for admins
const adminsData = [
  {
    id: "a1",
    name: "محمد أحمد",
    email: "admin@example.com",
    role: "مدير",
    permissions: [
      "إدارة المعلمين", "إدارة الطلاب", "إدارة المحتوى", 
      "التقارير المالية", "الإعدادات", "إدارة الصلاحيات"
    ],
    lastLogin: "2023-05-15 10:30",
    status: "active",
  },
  {
    id: "a2",
    name: "عبدالله الخالد",
    email: "abdullah@example.com",
    role: "مدير محتوى",
    permissions: ["إدارة المحتوى", "إدارة الكورسات"],
    lastLogin: "2023-05-14 15:45",
    status: "active",
  },
  {
    id: "a3",
    name: "سارة العلي",
    email: "sara@example.com",
    role: "مدير مالي",
    permissions: ["التقارير المالية", "إدارة الحجوزات"],
    lastLogin: "2023-05-13 09:20",
    status: "active",
  },
];

// Sample data for roles
const rolesData = [
  {
    id: "r1",
    name: "مدير",
    permissions: [
      "إدارة المعلمين", "إدارة الطلاب", "إدارة المحتوى", 
      "التقارير المالية", "الإعدادات", "إدارة الصلاحيات"
    ],
    adminsCount: 1,
  },
  {
    id: "r2",
    name: "مدير محتوى",
    permissions: ["إدارة المحتوى", "إدارة الكورسات"],
    adminsCount: 1,
  },
  {
    id: "r3",
    name: "مدير مالي",
    permissions: ["التقارير المالية", "إدارة الحجوزات"],
    adminsCount: 1,
  },
  {
    id: "r4",
    name: "مشرف دعم فني",
    permissions: ["عرض الطلبات", "التواصل مع المستخدمين"],
    adminsCount: 0,
  },
];

export const AdminPermissionsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddRoleDialogOpen, setIsAddRoleDialogOpen] = useState(false);
  const [isAddAdminDialogOpen, setIsAddAdminDialogOpen] = useState(false);
  
  const filteredAdmins = adminsData.filter(admin => 
    admin.name.includes(searchTerm) ||
    admin.email.includes(searchTerm) ||
    admin.role.includes(searchTerm)
  );
  
  const filteredRoles = rolesData.filter(role => 
    role.name.includes(searchTerm)
  );
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إدارة الصلاحيات</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="بحث..."
            className="pl-10 pr-4 py-2 border rounded-md w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>المشرفون</CardTitle>
              <CardDescription>إدارة حسابات المشرفين وصلاحياتهم</CardDescription>
            </div>
            <Dialog open={isAddAdminDialogOpen} onOpenChange={setIsAddAdminDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" /> إضافة مشرف
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>إضافة مشرف جديد</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الاسم</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="أدخل اسم المشرف"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="أدخل البريد الإلكتروني"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">كلمة المرور</label>
                    <input
                      type="password"
                      className="w-full p-2 border rounded-md"
                      placeholder="أدخل كلمة المرور"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الدور</label>
                    <select className="w-full p-2 border rounded-md">
                      {rolesData.map(role => (
                        <option key={role.id} value={role.name}>{role.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" onClick={() => setIsAddAdminDialogOpen(false)}>
                      إلغاء
                    </Button>
                    <Button>إضافة</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {filteredAdmins.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              لا يوجد مشرفين مطابقين لمعايير البحث
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الاسم</TableHead>
                    <TableHead>البريد الإلكتروني</TableHead>
                    <TableHead>الدور</TableHead>
                    <TableHead>الصلاحيات</TableHead>
                    <TableHead>آخر تسجيل دخول</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAdmins.map((admin) => (
                    <TableRow key={admin.id}>
                      <TableCell className="font-medium">{admin.name}</TableCell>
                      <TableCell>{admin.email}</TableCell>
                      <TableCell>{admin.role}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {admin.permissions.slice(0, 2).map((perm, idx) => (
                            <Badge key={idx} variant="outline" className="mr-1">
                              {perm}
                            </Badge>
                          ))}
                          {admin.permissions.length > 2 && (
                            <Badge variant="outline">
                              +{admin.permissions.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{admin.lastLogin}</TableCell>
                      <TableCell>
                        <Badge 
                          className="bg-green-100 text-green-800"
                        >
                          نشط
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
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
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>الأدوار والصلاحيات</CardTitle>
              <CardDescription>إدارة الأدوار وصلاحياتها المرتبطة بها</CardDescription>
            </div>
            <Dialog open={isAddRoleDialogOpen} onOpenChange={setIsAddRoleDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" /> إضافة دور
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>إضافة دور جديد</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">اسم الدور</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="أدخل اسم الدور"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الصلاحيات</label>
                    <div className="space-y-2 max-h-60 overflow-y-auto border rounded-md p-4">
                      <div className="flex items-center">
                        <input type="checkbox" id="perm1" className="mr-2" />
                        <label htmlFor="perm1">إدارة المعلمين</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="perm2" className="mr-2" />
                        <label htmlFor="perm2">إدارة الطلاب</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="perm3" className="mr-2" />
                        <label htmlFor="perm3">إدارة المحتوى</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="perm4" className="mr-2" />
                        <label htmlFor="perm4">إدارة الكورسات</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="perm5" className="mr-2" />
                        <label htmlFor="perm5">التقارير المالية</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="perm6" className="mr-2" />
                        <label htmlFor="perm6">إدارة الحجوزات</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="perm7" className="mr-2" />
                        <label htmlFor="perm7">الإعدادات</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="perm8" className="mr-2" />
                        <label htmlFor="perm8">إدارة الصلاحيات</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" onClick={() => setIsAddRoleDialogOpen(false)}>
                      إلغاء
                    </Button>
                    <Button>إضافة</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {filteredRoles.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              لا توجد أدوار مطابقة لمعايير البحث
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>اسم الدور</TableHead>
                    <TableHead>الصلاحيات</TableHead>
                    <TableHead>عدد المشرفين</TableHead>
                    <TableHead>إجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRoles.map((role) => (
                    <TableRow key={role.id}>
                      <TableCell className="font-medium">{role.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {role.permissions.slice(0, 3).map((perm, idx) => (
                            <Badge key={idx} variant="outline" className="mr-1">
                              {perm}
                            </Badge>
                          ))}
                          {role.permissions.length > 3 && (
                            <Badge variant="outline">
                              +{role.permissions.length - 3}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{role.adminsCount}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          {role.adminsCount === 0 && (
                            <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                              <Trash2 className="h-4 w-4" />
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

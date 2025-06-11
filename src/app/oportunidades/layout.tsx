import DashboardLayout from '../dashboard/DashboardLayout';

export default function OportunidadesLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
    <DashboardLayout>
    {children}
    </DashboardLayout>
);
} 
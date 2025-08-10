import { BarChart3, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';

const Dashboard = () => {
  // Mock data for demonstration
  const mockStats = {
    totalEmployees: 1470,
    attritionRate: 16.1,
    highRiskEmployees: 237,
    avgTenure: 7.2
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Attrition Prediction Dashboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time insights and predictions for employee attrition risk across your organization.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="data-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <Users className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {mockStats.totalEmployees.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">Active workforce</p>
              </CardContent>
            </Card>

            <Card className="data-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Attrition Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">
                  {mockStats.attritionRate}%
                </div>
                <p className="text-xs text-muted-foreground">Current rate</p>
              </CardContent>
            </Card>

            <Card className="data-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">High Risk</CardTitle>
                <AlertTriangle className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">
                  {mockStats.highRiskEmployees}
                </div>
                <p className="text-xs text-muted-foreground">Employees at risk</p>
              </CardContent>
            </Card>

            <Card className="data-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Tenure</CardTitle>
                <BarChart3 className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">
                  {mockStats.avgTenure} yrs
                </div>
                <p className="text-xs text-muted-foreground">Company average</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="data-card">
              <CardHeader>
                <CardTitle>Attrition Risk Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Chart visualization will be implemented here
                </div>
              </CardContent>
            </Card>

            <Card className="data-card">
              <CardHeader>
                <CardTitle>Department-wise Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Heatmap visualization will be implemented here
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
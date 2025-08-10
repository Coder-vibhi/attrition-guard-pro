import { BarChart3, PieChart, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const Insights = () => {
  const recommendations = [
    {
      title: "Improve Work-Life Balance",
      description: "Employees with poor work-life balance are 2.3x more likely to leave. Consider flexible working arrangements.",
      priority: "High",
      icon: Target,
      color: "text-destructive"
    },
    {
      title: "Career Development Programs", 
      description: "Implement mentorship and training programs for employees with low job satisfaction scores.",
      priority: "Medium",
      icon: TrendingUp,
      color: "text-warning"
    },
    {
      title: "Retention Bonuses",
      description: "Consider retention bonuses for high-performing employees in sales and R&D departments.",
      priority: "High", 
      icon: Target,
      color: "text-destructive"
    },
    {
      title: "Manager Training",
      description: "Provide management training to improve employee-manager relationships and reduce turnover.",
      priority: "Medium",
      icon: BarChart3,
      color: "text-warning"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Insights & Recommendations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI-powered insights and actionable recommendations to improve employee retention.
            </p>
          </div>

          {/* Feature Importance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="data-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-6 w-6 mr-2 text-secondary" />
                  Feature Importance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Monthly Income', value: 85 },
                    { name: 'Work Life Balance', value: 72 },
                    { name: 'Years at Company', value: 68 },
                    { name: 'Job Satisfaction', value: 61 },
                    { name: 'Distance From Home', value: 45 }
                  ].map((feature, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{feature.name}</span>
                        <span className="text-muted-foreground">{feature.value}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-accent h-2 rounded-full transition-all duration-300"
                          style={{ width: `${feature.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="data-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-6 w-6 mr-2 text-accent" />
                  Attrition by Department
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <PieChart className="h-16 w-16 mx-auto mb-4 text-accent" />
                    <p>Interactive pie chart will be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* HR Recommendations */}
          <Card className="data-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                HR Recommendations
              </CardTitle>
              <p className="text-muted-foreground">
                Evidence-based strategies to reduce attrition and improve retention
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="border border-card-border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${rec.color === 'text-destructive' ? 'bg-destructive/10' : 'bg-warning/10'}`}>
                        <rec.icon className={`h-6 w-6 ${rec.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{rec.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            rec.priority === 'High' 
                              ? 'bg-destructive/10 text-destructive' 
                              : 'bg-warning/10 text-warning'
                          }`}>
                            {rec.priority}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{rec.description}</p>
                        <Button size="sm" variant="outline" className="btn-corporate-outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Export Options */}
          <div className="text-center">
            <div className="inline-flex space-x-4">
              <Button className="btn-corporate">
                Export Report as PDF
              </Button>
              <Button variant="outline" className="btn-corporate-outline">
                Download CSV Data
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Insights;
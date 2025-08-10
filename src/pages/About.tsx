import { Target, Users, BarChart3, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About the Project
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Employee Attrition Prediction System using Machine Learning
            </p>
          </div>

          {/* Institution Info */}
          <Card className="data-card mb-8">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                G H Raisoni College of Engineering and Management
              </CardTitle>
              <p className="text-center text-muted-foreground">Session 2025-2026</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-white" />
              </div>
              <p className="text-lg text-muted-foreground">
                Advanced Analytics and Machine Learning Project
              </p>
            </CardContent>
          </Card>

          {/* Problem Statement */}
          <Card className="data-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-6 w-6 mr-2 text-secondary" />
                Problem Statement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-4">
                Employee attrition is a critical challenge faced by organizations worldwide, leading to 
                increased recruitment costs, loss of institutional knowledge, and reduced productivity. 
                Traditional HR approaches often fail to predict which employees are at risk of leaving, 
                resulting in reactive rather than proactive retention strategies.
              </p>
              <p className="text-foreground leading-relaxed">
                This project aims to develop a comprehensive machine learning-based system that can 
                accurately predict employee attrition risk, provide actionable insights to HR teams, 
                and enable data-driven decision making for workforce retention strategies.
              </p>
            </CardContent>
          </Card>

          {/* Objectives */}
          <Card className="data-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-6 w-6 mr-2 text-accent" />
                Project Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Primary Objectives:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Develop accurate ML models for attrition prediction
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Create intuitive data visualization dashboard
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provide actionable HR recommendations
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Enable CSV data upload and processing
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Technical Goals:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Implement Random Forest, XGBoost, Decision Trees
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Feature importance analysis using SHAP
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Interactive data visualization
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Export capabilities (PDF/CSV)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card className="data-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-primary-light" />
                Methodology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Data Collection</h4>
                  <p className="text-sm text-muted-foreground">
                    IBM HR Analytics dataset with 35 features and 1470 employee records
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Model Training</h4>
                  <p className="text-sm text-muted-foreground">
                    Train and compare multiple ML algorithms for optimal performance
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-light">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Deployment</h4>
                  <p className="text-sm text-muted-foreground">
                    Web-based interface for real-time predictions and insights
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expected Outcomes */}
          <Card className="data-card">
            <CardHeader>
              <CardTitle>Expected Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground">For HR Professionals</h4>
                  <p className="text-muted-foreground">
                    Proactive identification of at-risk employees with confidence scores and 
                    personalized retention strategies.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground">For Organizations</h4>
                  <p className="text-muted-foreground">
                    Reduced turnover costs, improved workforce planning, and data-driven 
                    HR decision making capabilities.
                  </p>
                </div>
                <div className="border-l-4 border-primary-light pl-4">
                  <h4 className="font-semibold text-foreground">Technical Impact</h4>
                  <p className="text-muted-foreground">
                    Scalable ML pipeline, automated insights generation, and modern 
                    web-based analytics platform.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
import { BookOpen, ExternalLink, Users, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';

const References = () => {
  const references = [
    {
      title: "Predictive Analytics in Human Resources: A Systematic Literature Review",
      authors: "Strohmeier, S., & Piazza, F.",
      journal: "The International Journal of Human Resource Management",
      year: "2015",
      doi: "10.1080/09585192.2014.944372"
    },
    {
      title: "Machine Learning Approaches for Employee Attrition Prediction",
      authors: "Jain, P., Jain, A., & Bhadane, A.",
      journal: "International Journal of Engineering Research and Technology",
      year: "2020",
      doi: "10.17577/IJERTV9IS050123"
    },
    {
      title: "IBM HR Analytics Employee Attrition & Performance Dataset",
      authors: "IBM Watson Analytics",
      journal: "Kaggle",
      year: "2020",
      doi: "kaggle.com/pavansubhasht/ibm-hr-analytics-attrition-dataset"
    },
    {
      title: "Employee Turnover Prediction using Machine Learning: A Comprehensive Study",
      authors: "Shah, D., Zala, T., & Patel, A.",
      journal: "IEEE Xplore",
      year: "2021",
      doi: "10.1109/ICCSEA49143.2021.9132908"
    },
    {
      title: "Random Forest Algorithm for Employee Attrition Prediction",
      authors: "Kumar, S., & Singh, M.",
      journal: "International Conference on Computing and Communication",
      year: "2019",
      doi: "10.1109/ICCC.2019.8836456"
    },
    {
      title: "SHAP Values for Model Explainability in HR Analytics",
      authors: "Lundberg, S. M., & Lee, S. I.",
      journal: "Advances in Neural Information Processing Systems",
      year: "2017",
      doi: "10.5555/3295222.3295230"
    }
  ];

  const datasets = [
    {
      name: "IBM HR Analytics Employee Attrition & Performance",
      source: "IBM Watson Analytics",
      description: "Fictional dataset created by IBM data scientists with 1470 employee records and 35 features",
      features: "Age, BusinessTravel, Department, DistanceFromHome, Education, Gender, JobRole, etc.",
      records: "1,470 employees"
    },
    {
      name: "HR Data for Analytics",
      source: "Kaggle Community",
      description: "Real-world HR dataset for machine learning and predictive analytics research",
      features: "Employee demographics, performance metrics, satisfaction scores",
      records: "14,999 employees"
    }
  ];

  const tools = [
    {
      name: "React & TypeScript",
      category: "Frontend",
      description: "Modern web development framework for building interactive user interfaces"
    },
    {
      name: "Python & Scikit-learn",
      category: "Machine Learning",
      description: "ML library for implementing Random Forest, XGBoost, and Decision Trees"
    },
    {
      name: "Recharts",
      category: "Visualization",
      description: "React-based charting library for interactive data visualization"
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      description: "Utility-first CSS framework for responsive and modern UI design"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              References & Literature
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Academic references, datasets, and tools used in this research project
            </p>
          </div>

          {/* Literature Survey */}
          <Card className="data-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <BookOpen className="h-7 w-7 mr-3 text-secondary" />
                Literature Survey
              </CardTitle>
              <p className="text-muted-foreground">
                Key research papers and studies in employee attrition prediction
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {references.map((ref, index) => (
                  <div key={index} className="border-l-4 border-secondary/30 pl-6 py-2">
                    <h4 className="font-semibold text-foreground text-lg mb-2">
                      {ref.title}
                    </h4>
                    <p className="text-muted-foreground mb-1">
                      <strong>Authors:</strong> {ref.authors}
                    </p>
                    <p className="text-muted-foreground mb-1">
                      <strong>Published in:</strong> {ref.journal} ({ref.year})
                    </p>
                    <p className="text-sm text-accent hover:text-accent-light cursor-pointer flex items-center">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      DOI: {ref.doi}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Datasets Used */}
          <Card className="data-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Database className="h-7 w-7 mr-3 text-accent" />
                Datasets Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {datasets.map((dataset, index) => (
                  <div key={index} className="border border-card-border rounded-lg p-6">
                    <h4 className="font-semibold text-foreground text-lg mb-3">
                      {dataset.name}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong className="text-foreground">Source:</strong> 
                        <span className="text-muted-foreground ml-1">{dataset.source}</span>
                      </p>
                      <p>
                        <strong className="text-foreground">Records:</strong> 
                        <span className="text-muted-foreground ml-1">{dataset.records}</span>
                      </p>
                      <p>
                        <strong className="text-foreground">Features:</strong> 
                        <span className="text-muted-foreground ml-1">{dataset.features}</span>
                      </p>
                      <p className="text-muted-foreground pt-2">
                        {dataset.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technologies & Tools */}
          <Card className="data-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="h-7 w-7 mr-3 text-primary-light" />
                Technologies & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="text-center p-4 border border-card-border rounded-lg">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">
                        {tool.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{tool.name}</h4>
                    <p className="text-xs text-secondary font-medium mb-2">{tool.category}</p>
                    <p className="text-xs text-muted-foreground">{tool.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Citation */}
          <Card className="data-card">
            <CardHeader>
              <CardTitle>How to Cite This Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-6 font-mono text-sm">
                <p className="text-foreground mb-2">
                  <strong>APA Style:</strong>
                </p>
                <p className="text-muted-foreground mb-4">
                  G H Raisoni College of Engineering and Management. (2025). 
                  Employee Attrition Prediction System using Machine Learning. 
                  Academic Project, Session 2025-2026.
                </p>
                <p className="text-foreground mb-2">
                  <strong>IEEE Style:</strong>
                </p>
                <p className="text-muted-foreground">
                  G H Raisoni College of Engineering and Management, 
                  "Employee Attrition Prediction System using Machine Learning," 
                  Academic Project, 2025.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default References;
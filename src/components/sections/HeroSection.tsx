import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Data visualization background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/80 to-secondary/70"></div>
      </div>

      {/* Triangle accents */}
      <div className="triangle-accent-tl"></div>
      <div className="triangle-accent-br"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Predict Attrition,
            <span className="block text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
              Retain Talent
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced machine learning analytics to identify at-risk employees, 
            provide actionable insights, and strengthen your workforce retention strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/upload">
              <Button size="lg" className="btn-corporate group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="btn-corporate-outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-in-right">
          <div className="data-card text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              ML Predictions
            </h3>
            <p className="text-muted-foreground">
              Random Forest, XGBoost, and Decision Tree models for accurate attrition prediction
            </p>
          </div>

          <div className="data-card text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              Visual Insights
            </h3>
            <p className="text-muted-foreground">
              Interactive charts and heatmaps to visualize attrition patterns and trends
            </p>
          </div>

          <div className="data-card text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              HR Recommendations
            </h3>
            <p className="text-muted-foreground">
              Actionable strategies for employee retention and workforce optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
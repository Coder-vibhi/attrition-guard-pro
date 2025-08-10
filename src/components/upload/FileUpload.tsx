import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle, AlertCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FileInfo {
  name: string;
  size: number;
  uploadDate: string;
  rows: number;
  columns: number;
  preview: any[];
}

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState<FileInfo | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [validationStatus, setValidationStatus] = useState<'valid' | 'invalid' | null>(null);

  const expectedColumns = [
    'Age', 'BusinessTravel', 'DailyRate', 'Department', 'DistanceFromHome',
    'Education', 'EducationField', 'EmployeeCount', 'EmployeeNumber',
    'EnvironmentSatisfaction', 'Gender', 'HourlyRate', 'JobInvolvement',
    'JobLevel', 'JobRole', 'JobSatisfaction', 'MaritalStatus', 'MonthlyIncome',
    'MonthlyRate', 'NumCompaniesWorked', 'Over18', 'OverTime',
    'PercentSalaryHike', 'PerformanceRating', 'RelationshipSatisfaction',
    'StandardHours', 'StockOptionLevel', 'TotalWorkingYears',
    'TrainingTimesLastYear', 'WorkLifeBalance', 'YearsAtCompany',
    'YearsInCurrentRole', 'YearsSinceLastPromotion', 'YearsWithCurrManager',
    'Attrition'
  ];

  const parseCSV = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const data = lines.slice(1, 6).map(line => {
      const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
      const row: any = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });
      return row;
    });
    return { headers, data, totalRows: lines.length - 1 };
  };

  const validateFile = (headers: string[]) => {
    const missingColumns = expectedColumns.filter(col => !headers.includes(col));
    return missingColumns.length === 0;
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const text = e.target?.result as string;
          const { headers, data, totalRows } = parseCSV(text);
          const isValid = validateFile(headers);
          
          setValidationStatus(isValid ? 'valid' : 'invalid');
          
          setUploadedFile({
            name: file.name,
            size: file.size,
            uploadDate: new Date().toLocaleString(),
            rows: totalRows,
            columns: headers.length,
            preview: data
          });
        } catch (error) {
          console.error('Error parsing CSV:', error);
          setValidationStatus('invalid');
        } finally {
          setIsUploading(false);
        }
      };
      
      reader.readAsText(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.csv']
    },
    multiple: false
  });

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">Upload Employee Data</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Upload your CSV file containing employee data to start predicting attrition risk. 
          We support IBM HR Analytics dataset format.
        </p>
      </div>

      {/* Upload Area */}
      <Card className="data-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="h-6 w-6 mr-2 text-secondary" />
            File Upload
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
              isDragActive
                ? 'border-secondary bg-secondary/10'
                : 'border-muted hover:border-secondary hover:bg-secondary/5'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            {isDragActive ? (
              <p className="text-lg text-secondary font-medium">Drop the CSV file here...</p>
            ) : (
              <div>
                <p className="text-lg font-medium text-foreground mb-2">
                  Drag & drop your CSV file here, or click to select
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports CSV files up to 50MB
                </p>
              </div>
            )}
          </div>

          {isUploading && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary/10">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-secondary mr-2"></div>
                <span className="text-secondary font-medium">Processing file...</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* File Information */}
      {uploadedFile && (
        <Card className="data-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <FileText className="h-6 w-6 mr-2 text-secondary" />
                File Information
              </span>
              {validationStatus === 'valid' && (
                <Badge className="bg-success text-success-foreground">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Valid Format
                </Badge>
              )}
              {validationStatus === 'invalid' && (
                <Badge className="bg-destructive text-destructive-foreground">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Invalid Format
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">File Name</p>
                <p className="font-medium">{uploadedFile.name}</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">File Size</p>
                <p className="font-medium">{formatFileSize(uploadedFile.size)}</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Rows</p>
                <p className="font-medium">{uploadedFile.rows.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Columns</p>
                <p className="font-medium">{uploadedFile.columns}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">Upload Date: {uploadedFile.uploadDate}</p>
            </div>

            {validationStatus === 'valid' && (
              <div className="flex gap-4">
                <Button className="btn-corporate">
                  <Download className="h-4 w-4 mr-2" />
                  Proceed to Predictions
                </Button>
                <Button variant="outline" className="btn-corporate-outline">
                  View Data Preview
                </Button>
              </div>
            )}

            {validationStatus === 'invalid' && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-4">
                <p className="text-destructive font-medium mb-2">Invalid file format detected</p>
                <p className="text-sm text-muted-foreground">
                  Please ensure your CSV file contains all required columns for the IBM HR Analytics dataset format.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Data Preview */}
      {uploadedFile && uploadedFile.preview.length > 0 && (
        <Card className="data-card">
          <CardHeader>
            <CardTitle>Data Preview (First 5 Rows)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    {Object.keys(uploadedFile.preview[0]).slice(0, 8).map((key) => (
                      <th key={key} className="text-left p-2 font-medium">
                        {key}
                      </th>
                    ))}
                    <th className="text-left p-2 font-medium">...</th>
                  </tr>
                </thead>
                <tbody>
                  {uploadedFile.preview.map((row, index) => (
                    <tr key={index} className="border-b">
                      {Object.values(row).slice(0, 8).map((value: any, colIndex) => (
                        <td key={colIndex} className="p-2">
                          {value}
                        </td>
                      ))}
                      <td className="p-2">...</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FileUpload;
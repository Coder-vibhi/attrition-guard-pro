import Layout from '@/components/layout/Layout';
import FileUpload from '@/components/upload/FileUpload';

const Upload = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-12">
        <FileUpload />
      </div>
    </Layout>
  );
};

export default Upload;
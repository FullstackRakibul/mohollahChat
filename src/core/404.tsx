import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import  LostImage  from '../assets/error.png';


const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img src={LostImage} className="w-64 h-64 mb-8" />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8 text-center">Oops! The page you're looking for doesn't exist.</p>
      <Button type="primary" onClick={handleGoHome}>
        Go to Home Page
      </Button>
    </div>
    </>
  )
}

export default NotFoundPage
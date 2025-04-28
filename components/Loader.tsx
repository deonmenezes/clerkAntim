interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
}

const Loader = ({ size = 'medium' }: LoaderProps) => {
  const sizeClass = {
    small: 'h-5 w-5 border-t-2',
    medium: 'h-8 w-8 border-t-3',
    large: 'h-12 w-12 border-t-4'
  };

  return (
    <div className={`flex items-center justify-center ${size === 'large' ? 'h-screen' : ''}`}>
      <div className={`animate-spin rounded-full border-black border-solid ${sizeClass[size]}`}></div>
    </div>
  );
}

export default Loader;
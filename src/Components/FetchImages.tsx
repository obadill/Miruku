interface FetchDataProps {
  imageUrl?: string;
}

const FetchAndDisplayImage: React.FC<FetchDataProps> = ({ imageUrl }) => {
  if (!imageUrl) return <div>No image available</div>;

  return (
      <img src={imageUrl} alt="" className="aImg"/>
  );
};

export default FetchAndDisplayImage;
import Carousel from 'react-bootstrap/Carousel';

function ControlledExample({ images }: any) {
  return (
    <Carousel>
      {images.map((e: string, index: number) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={e}
            alt={`${index} slide`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledExample;
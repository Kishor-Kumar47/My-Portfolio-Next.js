import Image from 'next/image';
import galleryImage from '../path/to/image.jpg';

function Exam() {
  return (
    <Image alt="gallery" src={require("../../public/imgs/pro1.webp")} />
  );
}

export default Exam
import ImageCard from "~/common/ui/component/article/image";
import ContainerLayout from "~/common/ui/layout/container-layout";

import style from "./style/style.module.scss";


interface IImageSectionProps {
  image: string;
  text?: string;
}

const imageMock: IImageSectionProps[] = [
  {
    image: "https://cdn.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    text: "Photo description here"
  }
];

const ImageSection = () => {
  return (
    <section>
      <ContainerLayout>
        {imageMock.map((item, index) => (
          <ImageCard key={index} {...item} />
        ))}
      </ContainerLayout>
    </section>
  );
};

export default ImageSection;

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  direction: rtl;
  padding: 20px;
  @media (max-width: 480px) {
    width: 100%;
    padding: 0;
  }
  `;

const SliderMainImage = styled.div`
 
`;

const MainSlider = styled.div``;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 600px;
`;
const ImageCount = styled.div`
    width: 30px; 
    height: 20px;
    background-color: var(--color-info);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 16px;
    color: var(--color-primary);
    bottom: 20px;
    left: 25px;
    cursor: pointer;

    svg{
        font-size: 16px;
    }
`
const SingleImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  border-radius: 12px;
`;

const ThumbnailWrapper = styled.div`
  margin-top: 12px;
  
  .keen-slider__slide {
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    
    &.active {
      opacity: 1;
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 480px) {
      display: none;
  }
`;

const MainSlide = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
`;

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    
    function addActive(idx) {
      if (slider.slides[idx]) {
        slider.slides[idx].classList.add("active");
      }
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) {
            mainRef.current.moveToIdx(idx);
          }
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

function ImageGallery({ images }) {
  if (!images || images.length === 0) {
    return (
      <Container>
        <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
          تصویری وجود ندارد
        </div>
      </Container>
    );
  }

  if (images.length === 1) {
    return (
      <Container>
        <SingleImage src={images[0]} alt="تصویر" />
      </Container>
    );
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: Math.min(4, images.length),
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <Container>
      <SliderMainImage ref={sliderRef} className="keen-slider">
        {images.map((img, index) => (
          <MainSlider key={index} className="keen-slider__slide">
            <MainSlide>
              <MainImage src={img} alt={`تصویر ${index + 1}`} />
            </MainSlide>
          </MainSlider>
        ))}
        <ImageCount>{images.length} <FullscreenIcon /></ImageCount>
      </SliderMainImage>

      <ThumbnailWrapper>
        <div ref={thumbnailRef} className="keen-slider thumbnail">
          {images.map((img, index) => (
            <div key={index} className="keen-slider__slide">
              <img src={img} alt={`تصویر کوچک ${index + 1}`} />
            </div>
          ))}
        </div>
      </ThumbnailWrapper>
    </Container>
  );
}

export default ImageGallery;
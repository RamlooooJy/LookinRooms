import {FC} from "react";

interface ImagePreviewI {
  url: string,
  alt: string
}
type ImageComponent = FC<ImagePreviewI>

const defaultComponent: ImageComponent = ({url, alt}) => (
  <picture>
    <source srcSet={url}
            media="(min-width: 800px)"/>
      <img src={url} alt={alt}/>
  </picture>
)

export default defaultComponent

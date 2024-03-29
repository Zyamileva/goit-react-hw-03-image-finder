import React from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageItems } from './ImageItems/ImageItems';

export const ImageGallery = ({ images, shouModal }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageItems
          key={id}
          smallImageURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          shouModal={shouModal}
        />
      ))}
    </Gallery>
  );
};

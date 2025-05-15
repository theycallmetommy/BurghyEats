import React from 'react';
import { Image } from 'react-native';

const DynamicImage = ({ uri, width }: { uri: string, width?: number | string }) => {
  const [aspectRatio, setAspectRatio] = React.useState<number | null>(null);

  React.useEffect(() => {
    Image.getSize(
      uri,
      (width, height) => setAspectRatio(width / height),
      (error) => console.error("Error loading image", error)
    );
  }, [uri]);

  if (!aspectRatio) return null; // or a placeholder

  return (
    <Image
      source={{ uri }}
      style={{ width: width, aspectRatio, borderRadius: 10, resizeMode: 'cover' }}
    />
  );
};

export default DynamicImage;
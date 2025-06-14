import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const storage = getStorage();
const BUCKET_URL = 'gs://vervenxt-website.firebasestorage.app';
const PUBLIC_BASE_URL = 'https://firebasestorage.googleapis.com/v0/b/vervenxt-website.firebasestorage.app/o';

export const getPublicImageUrl = (path) => {
  // Encode the path to handle special characters
  const encodedPath = encodeURIComponent(path);
  return `${PUBLIC_BASE_URL}/${encodedPath}?alt=media`;
};

export const getCarsImageUrl = (imageName) => {
  return getPublicImageUrl(`cars/${imageName}`);
};

export const getBikesImageUrl = (imageName) => {
  return getPublicImageUrl(`bikes/${imageName}`);
}; 
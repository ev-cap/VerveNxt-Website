import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const storage = getStorage();
const BUCKET_URL = 'gs://vervenxt-website.firebasestorage.app';
const PUBLIC_BASE_URL = 'https://storage.googleapis.com/vervenxt-website.appspot.com';

export const getPublicImageUrl = (path) => {
  return `${PUBLIC_BASE_URL}/${path}`;
};

export const getCarsImageUrl = (imageName) => {
  return getPublicImageUrl(`cars/${imageName}`);
};

export const getBikesImageUrl = (imageName) => {
  return getPublicImageUrl(`bikes/${imageName}`);
}; 
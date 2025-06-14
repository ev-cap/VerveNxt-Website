import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const storage = getStorage();
const BUCKET_URL = 'gs://vervenxt-website.firebasestorage.app';

export const getImageUrl = async (path) => {
  try {
    const imageRef = ref(storage, path);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error('Error getting image URL:', error);
    return null;
  }
};

export const getCarsImageUrl = async (imageName) => {
  return getImageUrl(`cars/${imageName}`);
};

export const getBikesImageUrl = async (imageName) => {
  return getImageUrl(`bikes/${imageName}`);
}; 
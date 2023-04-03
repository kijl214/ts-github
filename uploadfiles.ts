import { create, urlSource } from "ipfs-http-client";

// This will create a IPFS client which would allow you to upload files to IPFS.
const ipfs = create({
	host: "ipfs.infura.io",
	port: 5001,
	protocol: "https"
})

// Use uploadFile method to upload to IPFS with file url.
export default async function uploadFileFromURL(file: string) {
	const fileAdded = await ipfs.add(urlSource(file));
	return `https://ipfs.io/ipfs/${fileAdded.cid.toString()}`;
}

// Use uploadFromStorage to upload using local file.
export const uploadFromStorage = async (file: File) => {
  const fileAdded = await ipfs.add(file);
  return `https://ipfs.io/ipfs/${fileAdded.cid.toString()}`;
}
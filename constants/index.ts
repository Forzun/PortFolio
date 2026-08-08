

const url = [
  'https://i.pinimg.com/originals/e3/7c/63/e37c634e6f4b61dcad982ee3d5d74c85.gif'
];

export default function randomCover(): string {
    const randomIndex = Math.floor(Math.random() * url.length);
    const randomImage = url[randomIndex]
    return randomImage
}

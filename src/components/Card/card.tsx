import Image, { StaticImageData } from "next/image";
import styles from "./card.module.css";
import { useRouter } from "next/navigation";

interface CardType {
  title: string;
  redirectLink: string;
  image: StaticImageData;
}

export default function Card({ title, redirectLink, image }: CardType) {
  const router = useRouter();

  const handleClick = () => {
    router.push(redirectLink);
  };

  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <Image src={image} alt="cardImage" />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

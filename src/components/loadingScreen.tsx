import Image from "next/image";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <div className="loadingScreen" style={isLoading ? { display: "flex" } : { display: "none" }}>
      <h1>
        <Image src="/images/hero_title.png" alt="Celebrate" draggable={false} width={1000} height={240} objectFit="cover" objectPosition="center" priority />
      </h1>
      <h2>
        <Image src="/images/hero_desc.png" alt="Celebrate" draggable={false} width={1000} height={72} objectFit="cover" objectPosition="center" priority />
      </h2>
    </div>
  );
}

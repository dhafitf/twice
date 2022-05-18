import Image from "next/image";
import { MemberItemProps } from "~/src/types/components";

interface Props extends MemberItemProps {
  onClick?: () => void;
}

export default function MemberItem({ onClick, image, name, nickname }: Props) {
  return (
    <div className="member_item" onClick={onClick}>
      <div className="member_pict">
        <Image src={image} width={400} height={400} alt={name} objectFit="cover" objectPosition="top" />
      </div>
      <div className="member_info">
        <h2>{nickname}</h2>
      </div>
    </div>
  );
}

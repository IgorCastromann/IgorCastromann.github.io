import { FC } from "react";
// import ItsMeIgor from "../../assets/igor_2.png";
// import "./styles.css";
interface AvatarProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ className, ...props }) => {
  return (
    <img
      src={"Igor-2.png"}
      alt="Imagem de perfil"
      style={{ width: "fit-content", height: "fit-content" }}
      className={`${className} `}
      {...props}
    />
  );
};

export default Avatar;

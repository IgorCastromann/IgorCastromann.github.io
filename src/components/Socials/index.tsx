const Socials = () => {
  return (
    <>
      <SocialLink
        link="https://github.com/IgorCastromann"
        img={{
          src: "https://img.icons8.com/ios-filled/50/000000/github.png",
          alt: "github",
        }}
      />
      <SocialLink
        link="https://www.linkedin.com/in/igor-castro-27470672/"
        img={{
          src: "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
          alt: "linkedin",
        }}
      />
    </>
  );
};

export default Socials;

interface ImgProps {
  src: string;
  alt: string;
}

const SocialLink = ({ link, img }: { link: string; img: ImgProps }) => {
  return (
    <>
      <a href={link}>
        <img src={img.src} alt={img.alt} />
      </a>
    </>
  );
};

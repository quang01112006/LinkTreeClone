import "./Links.css";

function Links({ socialImg, socialName, href, target = "_blank" }) {
  return (
    <>
      <div className="socialItem">
        <img src={socialImg} alt="Social Image" className="socialImg" />
        <a href={href} className="socialName" target={target}>
          {socialName}
        </a>
        <div className="share-btn">❤️</div>
      </div>
    </>
  );
}
export default Links;

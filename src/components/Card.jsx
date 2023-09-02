import "./Card.style.css";

export default function Card({ image, name, job, telephone, email, githubUrl, linkedinUrl, twitterUrl }) {
  return (
    <>
      <div className="container">
        <img src={image} />
        <h1>{name}</h1>
        <hr />
        <p>{job}</p>
        <hr />
        <p>{telephone}</p>
        <hr />
        <p>{email}</p>
        <div id="links">
          <a href={githubUrl} target="_blank">
            GitHub
          </a>
          <a href={linkedinUrl} target="_blank">
            LinkedIn
          </a>
          <a href={twitterUrl} target="_blank">
            Twitter
          </a>
        </div>
      </div>
    </>
  );
}

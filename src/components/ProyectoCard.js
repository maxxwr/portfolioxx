import { Col } from "react-bootstrap";
import "../color/ProjectCard.css"

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="gif-container">
          <img src={imgUrl} alt={title} className="gif-image" />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <div className="project-link">
              <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Echar un Vistazo
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};

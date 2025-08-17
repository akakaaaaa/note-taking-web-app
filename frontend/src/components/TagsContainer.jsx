import { Tag } from "./Tag";
import { useUser } from "../store/userContext";
import "./styles/TagsContainer.scss";
import { useNavigate } from "react-router-dom";

export const TagsContainer = ({ tags }) => {
  const { selectedTag, setSelectedTag } = useUser();

  const navigate = useNavigate();

  function handleTagClick(tag) {
    setSelectedTag(tag);
    navigate("/");
  }

  return (
    <div className="tags-container">
      <div className="tags-container-title">
        <p>Tags</p>
      </div>

      <div className="tags-wrapper">
        {tags.map((tag) => (
          <Tag
            key={tag}
            onClick={() => handleTagClick(tag)}
            isActive={selectedTag === tag}
          >
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

import { Searchbar } from "../components/Searchbar";
import { TagsContainer } from "../components/TagsContainer";
import { useUser } from "../store/userContext";
import "./styles/TagsPage.scss";

export const TagsPage = () => {
  const { tags } = useUser();

  return (
    <div className="tagspage">
      <div className="searchbar">
        <Searchbar />
      </div>
      <TagsContainer tags={tags} />
    </div>
  );
};

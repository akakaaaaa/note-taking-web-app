import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { TagsContainer } from "../components/TagsContainer";
import { useUser } from "../store/userContext";
import "./styles/TagsPage.scss";
import { useNavigate } from "react-router-dom";

export const TagsPage = () => {
  const { tags } = useUser();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      navigate("/");
    }
  }, [isMobile, navigate]);

  if (!isMobile) return null;

  return (
    <div className="tagspage">
      <div className="header">
        <Header />
      </div>
      <TagsContainer tags={tags} />
    </div>
  );
};

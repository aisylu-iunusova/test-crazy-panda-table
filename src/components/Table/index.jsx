import React, { useEffect, useState } from "react";
import "./index.scss";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import Search from "../Search";
import Button from "../Button";
import {
  getCount,
  getPostsList,
  getPostsRange,
  filterPosts,
  CURRENT_COUNT,
  sortById,
} from "../../service/posts-storage";
import empty from "../../assets/empty.png";

const Table = () => {
  const [posts, setPosts] = useState([]);
  const [click, setClick] = useState(0);
  const [sortCheck, setSortCheck] = useState(false);

  useEffect(() => {
    getPostsList().then((posts) => {
      setPosts(posts.slice(0, CURRENT_COUNT));
    });
  }, []);

  useEffect(() => {
    let currentPost = getPostsRange(click);

    setPosts(currentPost);
  }, [click]);

  useEffect(() => {
    setClick(0);

    let sortList = sortById(sortCheck);

    setPosts(sortList.slice(0, CURRENT_COUNT));
  }, [sortCheck]);

  const showNextPostList = () => {
    setClick(click + 1);
  };

  const showPrevPostList = () => {
    setClick(click - 1);
  };

  const filterPostList = (e) => {
    let filterList = filterPosts(e.target.value);

    setPosts(filterList.slice(0, CURRENT_COUNT));
  };

  const sortPostById = () => {
    posts.length && setSortCheck(!sortCheck);
  };

  return (
    <div className="table">
      <div className="table-header">
        <Search onChange={filterPostList} />
      </div>
      <div className="table-main">
        <div className="table-main-rows">
          <TableHeader onClick={sortPostById} />
          {posts.map((post) => (
            <TableRow {...post} key={post.id} />
          ))}
        </div>
      </div>
      {posts.length ? (
        <div className="table-footer">
          <Button onClick={showPrevPostList} disabled={click <= 0}>
            Назад
          </Button>
          <Button
            onClick={showNextPostList}
            disabled={click === getCount() - 1}
          >
            Вперед
          </Button>
        </div>
      ) : (
        <div className="emptySearch">
          <p>Упс, не найдено ...</p>
          <p>Попробуй сформулировать запрос по-другому</p>
          <img src={empty} alt="Нет результав" />
        </div>
      )}
    </div>
  );
};

export default Table;

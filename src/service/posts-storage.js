import { getPosts } from "./api";

let posts = [];
let filteredList = [];

export const CURRENT_COUNT = 10;

export async function getPostsList() {
  try {
    let data = await getPosts();

    posts = [...data].slice(0, 55);

    return posts;
  } catch (err) {
    alert("Ошибка в загрузке данных");
    return [];
  }
}

export const getCurrentPosts = () => {
  return posts.slice(0, CURRENT_COUNT);
};

export const getCount = () => {
  let current = filteredList.length ? filteredList : posts;
  return Math.ceil(current.length / CURRENT_COUNT);
};

export const getPostsRange = (count) => {
  let start = count * CURRENT_COUNT;
  let end = count * CURRENT_COUNT + CURRENT_COUNT;
  let current = filteredList.length ? filteredList : posts;

  return current.slice(start, end);
};

export const filterPosts = (value) => {
  value = value.toLowerCase();

  filteredList = posts.filter((post, i) => {
    return (
      String(post.id).indexOf(value) + 1 ||
      post.title.toLowerCase().indexOf(value) + 1 ||
      post.body.toLowerCase().indexOf(value) + 1
    );
  });

  return value.length ? filteredList : posts;
};

export const sortById = (up = true) => {
  let current = filteredList.length ? filteredList : posts;
  return current.sort((a, b) => {
    return up ? b.id - a.id : a.id - b.id;
  });
};

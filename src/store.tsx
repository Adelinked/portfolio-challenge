import { create } from "zustand";
import initialProjects from "@/data/projects.json";
import initialBlogs from "@/data/blogs.json";

export type projectType = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export type projectsType = projectType[];

export const useProjectsStore = create<{
  projects: projectsType;
  filterTags: string[];
  toggleFilter: (tag: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}>((set) => ({
  projects: initialProjects,
  filterTags: [],
  currentPage: 0,
  setCurrentPage: (page: number) => {
    set((state) => ({ currentPage: page }));
  },
  toggleFilter: (tag: string) => {
    set((state) => ({
      filterTags: state.filterTags.includes(tag)
        ? state.filterTags.filter((t) => t !== tag)
        : [...state.filterTags, tag],
      currentPage: 0,
    }));
  },
}));

export interface blogType {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}
export type blogsType = blogType[];

//make the same code for blogs
export const useBlogsStore = create<{
  blogs: blogsType;
  filterTags: string[];
  toggleFilter: (tag: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  
}>((set) => ({
  blogs: initialBlogs.slice(0, 3),
  filterTags: [],
  currentPage: 0,
  setCurrentPage: (page: number) => {
    set((state) => ({ currentPage: page }));
  },
  toggleFilter: (tag: string) => {
    set((state) => ({
      filterTags: state.filterTags.includes(tag)
        ? state.filterTags.filter((t) => t !== tag)
        : [...state.filterTags, tag],
        currentPage: 0  
    }));
  },
}));

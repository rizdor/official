// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// Blog型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: {
    url: string;
  };
};
export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

//APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};
// News型定義
export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;

  date: string;
  text: string;
};
export type NewsResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: News[];
};

//APIの呼び出し
export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.get<NewsResponse>({ endpoint: "news", queries });
};
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
};

// Schedule型定義
export type Schedule = {
  id: string;
  name: string;
  year: string;
  day: string;
  week: string;
  time: string;
  text: string;
  image?: {
    url: string;
  };
};
export type ScheduleResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Schedule[];
};

//APIの呼び出し
export const getSchedule = async (queries?: MicroCMSQueries) => {
  return await client.get<ScheduleResponse>({ endpoint: "schedule", queries });
};
export const getScheduleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Schedule>({
    endpoint: "schedule",
    contentId,
    queries,
  });
};

//concer型定義
export type Concert = {
  id: string;
  year: string;
  winterplace: string;
  winterdate: string;
  summerplace: string;
  summerdate: string;
};
export type ConcertResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Schedule[];
};

//APIの呼び出し
export const getConcert = async (queries?: MicroCMSQueries) => {
  return await client.get<ConcertResponse>({ endpoint: "concert", queries });
};
export const getConcertDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Concert>({
    endpoint: "concert",
    contentId,
    queries,
  });
};

import Head from 'next/head';
import React from 'react';

import Header from '../components/header/header';
import HomeBodySection from '../components/section/homeBodySection';
import Footer from '../components/footer/footer';
import { fetchHeaderData } from '../modules/common/service';
import { fetchHomePagePost } from "../modules/articles/service";
import { fetchMostReadPost, fetchFeaturedVideos } from "../modules/widgets/service";

var hostname = "https://my-blog-seven-phi.vercel.app";
var href = "https://my-blog-seven-phi.vercel.app";

if (typeof window !== 'undefined') {
  hostname = window.location.origin;
  href = window.location.href
};

export const getStaticProps = async () => {
  const categoriesData = await fetchHomePagePost();
  const headerData = await fetchHeaderData();
  const mostReadPost = await fetchMostReadPost();
  const featuredVideo = await fetchFeaturedVideos();

  return {
    props: {
      categories: categoriesData.categories,
      headers: headerData.categories,
      popularArticles: mostReadPost.articles,
      featuredVideos: featuredVideo.featuredVideos
    }
  }
}

export default function Home(props) {
  const { categories, headers, popularArticles, featuredVideos } = props;

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header HeaderData={headers} />
      <HomeBodySection Categories={categories} popularPost={popularArticles} featuredVideo={featuredVideos} />
      <Footer />
    </>
  )
}

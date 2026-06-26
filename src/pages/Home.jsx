import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { adsData } from '../services/fakePosts';
import NoResult from '../components/posts/NoResult';
import Posts from '../components/posts/Posts';
import Post from '../components/posts/Post';

const HomeWrapper = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-right: 18%;
  margin-top: 80px;
  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
  }
`;

const LoadingText = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: var(--color-info);
`;

const LoaderContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: var(--color-subtitle);
`;

function Home() {
  const params = useParams();
  const cityParam = params.City || 'iran';
  const POSTS_PER_PAGE = 12;

  const [allData, setAllData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    setLoading(true);

    let filtered = [];
    if (cityParam === 'iran') {
      filtered = adsData;
    } else {
      const cities = cityParam.split(',').map(c => c.trim());
      filtered = adsData.filter((item) => cities.includes(item.city));
    }

    setAllData(filtered);
    setPage(1);
    setHasMore(true);
    setVisibleData([]);
    setLoading(false);
  }, [cityParam]);

  useEffect(() => {
    const start = 0;
    const end = page * POSTS_PER_PAGE;
    const newData = allData.slice(start, end);
    setVisibleData(newData);
    setHasMore(end < allData.length);
  }, [allData, page]);

  const loadMore = useCallback(() => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    setPage((prev) => prev + 1);
  }, [loadingMore, hasMore]);

  useEffect(() => {
    if (page > 1) {
      setLoadingMore(false);
    }
  }, [page]);

  useEffect(() => {
    if (loadingMore || !hasMore || visibleData.length === 0) {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    observerRef.current = observer;

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [hasMore, loadingMore, loadMore, visibleData.length]);

  const handleFilterChange = (filteredPosts) => {
    setAllData(filteredPosts);
    setPage(1);
    setHasMore(true);
    setVisibleData([]);
    setLoadingMore(false);
    
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  };

  if (loading) {
    return (
      <HomeWrapper>
        <Sidebar posts={adsData} />
        <MainContent>
          <LoadingText>در حال بارگذاری آگهی‌ها...</LoadingText>
        </MainContent>
      </HomeWrapper>
    );
  }

  return (
    <HomeWrapper>
      <Sidebar posts={adsData} onFilterChange={handleFilterChange} />

      <MainContent>
        <h4>
          آگهی‌ها و نیازمندی‌ها در{' '}
          {cityParam === 'iran' ? 'کل شهرهای ایران' : cityParam}
        </h4>

        <Posts>
          {visibleData.length > 0 ? (
            visibleData.map((ad) => <Post ad={ad} key={ad.id} />)
          ) : (
            <NoResult />
          )}
        </Posts>

        {hasMore && visibleData.length > 0 && (
          <LoaderContainer ref={loaderRef}>
            {loadingMore ? ' در حال بارگذاری...' : ' بیشتر'}
          </LoaderContainer>
        )}

        {!hasMore && visibleData.length > 0 && (
          <LoaderContainer> همه آگهی‌ها بارگذاری شد</LoaderContainer>
        )}
      </MainContent>
    </HomeWrapper>
  );
}

export default Home;
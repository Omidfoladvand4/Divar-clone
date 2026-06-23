import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { adsData } from '../services/fakePosts';
import NoResult from '../components/posts/NoResult'
import Posts from '../components/posts/Posts'
import Post from '../components/posts/Post'

const HomeWrapper = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
`;

const MainContent = styled.div`
  width: 78%;
  padding: 20px;
  margin-right: 22%;
  margin-top: 80px;
  @media (max-width: 480px) {
     width: 100%;
     margin-right : 0;
  }
`;


const LoadingText = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 18px;
  color: var(--color-info);
`;

function Home() {
  const params = useParams();
  const cityParam = params.City || 'iran';
  
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    if (cityParam === 'iran') {
      setFilteredData(adsData);
    } else {
      const cities = cityParam.split(',').map(c => c.trim());
      const filtered = adsData.filter((item) => 
        cities.includes(item.city)
      );
      setFilteredData(filtered);
    }
    
    setLoading(false);
  }, [cityParam]);

  if (loading) {
    return (
      <HomeWrapper>
        <Sidebar />
        <MainContent>
          <LoadingText>در حال بارگذاری آگهی‌ها...</LoadingText>
        </MainContent>
      </HomeWrapper>
    );
  }

  return (
    <HomeWrapper>
      <Sidebar />
      
      <MainContent>
        <h2>آگهی‌های {cityParam === 'iran' ? 'همه شهرها' : cityParam}</h2>
        <p style={{ color: '#999', marginBottom: '10px' }}>
          {filteredData.length} آگهی پیدا شد
        </p>
        
        <Posts>
          {filteredData.length > 0 ? (
            filteredData.map((ad) => (
              <Post ad={ad} key={ad.id}>
               
              </Post>
            ))
          ) : (
            <NoResult />
          )}
        </Posts>
      </MainContent>
    </HomeWrapper>
  );
}

export default Home;
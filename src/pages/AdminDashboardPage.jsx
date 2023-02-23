import React, { useEffect, useState } from "react";
import MkdSDK from "../utils/MkdSDK";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

const AdminDashboardPage = () => {
  const [videos, setVideos] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const fetchVideo = async () => {
    setLoading(true);
    const payload = {
      payload: {},
      page: currentPage,
      limit: 10,
    };
    const sdk = new MkdSDK();
    sdk._table = "video";
    const fetchVideos = await sdk.callRestAPI(payload, "PAGINATE");

    setVideos(fetchVideos.list);
    setTotalPage(fetchVideos.num_pages);
    setCurrentPage(fetchVideos.page);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideo();
  }, [currentPage]);
  return (
    <div className='max-w-5xl mx-auto'>
      <Header />
      <div className='mt-[60px] space-y-10'>
        <SubHeader />

        <div>
          <Table videos={videos} />
          <Pagination
            setCurrent={setCurrentPage}
            currentPage={currentPage}
            totalPage={totalPage}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

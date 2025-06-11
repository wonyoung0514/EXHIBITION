// src/App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ① SearchHeader 컴포넌트를 불러옵니다.
import SearchHeader from "./components/SearchHeader";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import TodayExhibitions from "./components/TodayExhibitions";
import ExhibitionDetail from "./components/ExhibitionDetail";
import LikedExhibitions from "./components/LikedExhibitions";
import MyRecordsPage from "./components/MyRecordsPage";
import WritePage from "./components/WritePage";
import RecordDetail from "./components/RecordDetail";
import EditPage from "./components/EditPage";
import LocalMenuSection from "./components/LocalMenuSection";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");

  return (
    <BrowserRouter>
      {/* ★ SearchHeader 를 import 했기 때문에 이제 JSX에서 문제 없이 쓸 수 있습니다 */}
      <SearchHeader query={query} setQuery={setQuery} />

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage query={query} />} />
        <Route path="/TodayExhibitions/:name" element={<TodayExhibitions />} />
        <Route path="/exhibition/:id" element={<ExhibitionDetail />} />
        <Route path="/liked" element={<LikedExhibitions />} />
        <Route path="/write" element={<MyRecordsPage />} />
        <Route path="/write/new" element={<WritePage />} />
        <Route path="/write/:id" element={<RecordDetail />} />
        <Route path="/write/edit/:id" element={<EditPage />} />
        <Route path="/local" element={<LocalMenuSection />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
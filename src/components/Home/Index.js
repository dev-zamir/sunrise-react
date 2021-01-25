import HomeIntroduction from "./HomeIntroduction";
import TopperList from "./TopperList";
import StudentSectionCard from "./StudentSectionCard";
import TeacherSectionCard from "./TeacherSectionCard";
import NewsEventsCard from "./NewsEventsCard";
import ParentsSectionCard from "./ParentsSectionCard";
import ExamSection from "./ExamSection";
import PhotoGallery from "./PhotoGallery";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = `Home`;
  });

  return ( 
    <>
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <HomeIntroduction/>
        </div>
        <div className="col-lg-4 col-sm-12">
          <TopperList/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-12 mt-2">
          <StudentSectionCard/>
        </div>
        <div className="col-lg-4 col-sm-12 mt-2">
          <TeacherSectionCard/>
        </div>
        <div className="col-lg-4 col-sm-12 mt-2">
          <NewsEventsCard/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-12 mt-2">
          <ParentsSectionCard/>
        </div>
        <div className="col-lg-4 col-sm-12 mt-2">
          <ExamSection/>
        </div>
        <div className="col-lg-4 col-sm-12 mt-2">
          <PhotoGallery/>
        </div>
      </div>
    </>
   );
}
 
export default Home;
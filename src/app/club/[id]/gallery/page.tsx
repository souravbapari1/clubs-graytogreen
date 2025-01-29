import ClubGalleryCategory from "../_components/ClubGalleryCategory";
import Navigations from "../_components/Navigations";
import GalleryTab from "./_components/GalleryTab";
import GalleryView from "./GalleryView";

function page() {
  return (
    <>
    <Navigations/>
    <div className="container">
      {/* <GalleryTab />
      <GalleryView /> */}
      <ClubGalleryCategory />
    </div>
    
    </>
  );
}

export default page;

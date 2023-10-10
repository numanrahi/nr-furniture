import "./Gallery.css";
const Gallery = () => {
  return (
    <div style={{ overflowX: "hidden" }} className="my-3">
      <div className="text-center fs-5">Share your setup with</div>
      <div className="text-center m-1 fs-3">#NR Furniture</div>
      <div className="gallery-container">
        <div className="gallery-box">
          {/* col 1 */}
          <div className="dream">
            <img src="https://i.ibb.co/kKyfsDM/Rectangle-38.png" alt="" />
            <img src="https://i.ibb.co/hgHHFHp/Rectangle-37.png" alt="" />
            <img src="https://i.ibb.co/2KRBB4W/img6.jpg" alt="" />
            <img src="https://i.ibb.co/Lhv88Rn/Rectangle-44.png" alt="" />
            <img src="https://i.ibb.co/25GcTrx/Rectangle-45.png" alt="" />
          </div>
          {/* col 2 */}
          <div className="dream">
            <img src="https://i.ibb.co/Lkww1rd/img1.jpg" alt="" />
            <img src="https://i.ibb.co/jVWRCr1/img2.jpg" alt="" />
            <img src="https://i.ibb.co/x5mfPJZ/img3.jpg" alt="" />
            <img src="https://i.ibb.co/fpLP2zc/img4.jpg" alt="" />
            <img src="https://i.ibb.co/MkgCgtH/img5.jpg" alt="" />
          </div>
          {/* col 3 */}
          <div className="dream">
            <img src="https://i.ibb.co/gWMXBMS/img8.jpg" alt="" />
            <img src="https://i.ibb.co/Pt7gCFB/mg7.jpg" alt="" />
            <img src="https://i.ibb.co/FWs9cP4/Rectangle-40.png" alt="" />
            <img src="https://i.ibb.co/qB2mQtL/img9.jpg" alt="" />
            <img src="https://i.ibb.co/QPL76rM/img10.jpg" alt="" />
            <img src="https://i.ibb.co/xmkD76r/img11.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

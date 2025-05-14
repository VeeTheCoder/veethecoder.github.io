import bannerImage from '../../assets/images/banner.jpg'
import './Banner.css'

function Banner() {
  return (
    <div id="home" className="intro route bg-image" style={{backgroundImage: "url("+bannerImage+")"}}>
      <div className="intro-content display-table">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-1/2">
          <h1 className="text-6xl font-extrabold">Vee Valand</h1>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-slate-200 ">Full Stack Software Engineer</h2>
        </div>
        <div className="bottom-0 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="img-social" href="https://github.com/veethecoder/">
            <svg aria-hidden="true"  height="48" version="1.1" viewBox="0 0 800 800" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 177c-127 0-223 103-223 223 0 104 72 188 160 214v-41c0-33 17-46 17-46-73-8-116-43-116-126 0-45 27-69 27-69s-14-26 2-67c25-6 71 26 71 26s24-9 63-9 63 9 63 9 46-32 71-26c16 41 2 67 2 67s27 24 27 69c0 83-43 118-116 126 0 0 17 13 17 46v41c87-27 158-109 158-214 0-120-96-223-223-223zm0-42c146 0 265 119 265 265S546 665 400 665 135 546 135 400s119-265 265-265z"></path>
             </svg>
          </a>
        </div>
      </div>
    </div>
 );
};

export default Banner;
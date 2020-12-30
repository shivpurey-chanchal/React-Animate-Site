import Common from "./Common";
import img1 from "./img/img(11).jpg";

const Home = () => {
  return (
    <>
      <Common
        name="Celebrating a birthday party or wedding? Wow your guests, or surprise a friend, with one of these impressive celebration cake."
        imgsrc={img1}
        visit="/services"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;

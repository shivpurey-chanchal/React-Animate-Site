import Common from "./Common";
import img1 from "./img/img(10).jpg";

const About = () => {
  return (
    <>
      <Common
        name="Cakes are ideal for celebrating a special occasion. Check out our great recipes and bake the most delicious celebration cake. "
        imgsrc={img1}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;

import PageHero from "../components/PageHero";
import image from "../assets/hero-bcg.jpeg";

const About = () => {
  return (
    <main>
      <PageHero pageName="About" />
      <section className="page section section-center about-page">
        <img src={image} alt="about page" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum
            cerebro. De carne lumbering animata corpora quaeritis. Summus brains
            sit​​, morbo vel maleficia? De apocalypsi gorger omero undead
            survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo
            evil stalking monstra adventus resi dentevil vultus comedat
            cerebella viventium. Qui animated corpse, cricket bat max brucks
            terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat
            mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum
            defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut
            malus putrid voodoo horror. Nigh tofth eliv ingdead.
          </p>
        </article>
      </section>
    </main>
  );
};
export default About;

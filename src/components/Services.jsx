import { services } from "../data";

const Services = () => {
  return (
    <div className="services section">
      <div className="section-center">
        <article className="header">
          <h3>
            custom furniture <br /> for everyone but you
          </h3>
          <p>
            Salvia glossier subway tile, leggings mustache YOLO semiotics chia.
            Pitchfork tbh af blog church-key leggings vaporware PBR&B master
            cleanse post-ironic man bun pabst mustache letterpress synth.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className="service" key={id}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Services;
